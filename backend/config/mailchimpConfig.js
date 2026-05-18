import mailchimp from "@mailchimp/mailchimp_marketing"

// [x] set up env
// [x] hämta server prefix
// [ ] skapa validering/error i ui för om emailadressen redan finns i mailchimp (Mailchimp returnerar 400 med "Member Exists" i body) Är detta en säkerhetssårbarhet?
// [x] Kolla om premiumStartDate och premiumEndDate funkar och skickas med i Mailchimp
// [ ] Skapa logik som taggar ny användare med "Vill bli medlem" i Mailchimp vid POST
// [ ] Ta bort required på alla fält i Mailchimp, backend sköter validering så det inte blir krock

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
})

const toMailchimpMember = (user, cityLabel) => ({
  email_address: user.email,
  status: "subscribed", //vi har single opt-in, så vi kan ha "subscribed"  och inte "pending"
  merge_fields: {
    FNAME: user.firstName,
    LNAME: user.lastName,
    CITY: cityLabel,
    MOTIVE: user.justifyMembership,
    // [ ] WORKSTATUS: user.workStatus,
    MMERGE15: user.isPremium ? "Premium" : "Gratis",
    PREM_START: user.premiumStartDate,
    PREM_END: user.premiumEndDate,
    CREATEDAT: user.userCreatedAt
  }
})

export const addContactToMailchimp = async (user, cityLabel) => {
    
  // Stoppa tidigt om input saknas.
  if (!user?.email) {
    throw new Error("Missing user email for Mailchimp")
  }

  // Säkerställ att Mailchimp-konfig finns innan API-anrop.
  if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_SERVER_PREFIX || !process.env.MAILCHIMP_LIST_ID) {
    throw new Error("Missing Mailchimp environment variables")
  }

  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID,
      toMailchimpMember(user, cityLabel)
    )

    return response

  } catch (error) {
      console.error("Mailchimp error:", error.response?.body || error.message)
      throw error
  }
}
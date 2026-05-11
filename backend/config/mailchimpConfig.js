import mailchimp from "@mailchimp/mailchimp_marketing"

//[ ] set up env
// [ ] hämta server prefix
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
})

// [ ] lägg in workStatus när färdigt


export const addContactToMailchimp = async () => {

  const mailchimpUser = {
    firstName,
    lastName,
    email,
    city,
    justifyMembership,
    // workStatus,
    isPremium,
    premiumStartDate,
    premiumEndDate,
    createdAt
  }

  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID,
      {
        email_adress: mailchimpUser.email,
        status: "subscribed",
        merge_fields: {
          FNAME: mailchimpUser.firstName,
          LNAME: mailchimpUser.lastName,
          CITY: mailchimpUser.city,
          MOTIVE: mailchimpUser.justifyMembership,
          // WORKSTATUS: mailchimpUser.workStatus,
          ISPREMIUM: mailchimpUser.isPremium,
          PREM_START: mailchimpUser.premiumStartDate,
          PREM_END: mailchimpUser.premiumEndDate,
          CREATEDAT: mailchimpUser.createdAt
        }
      }
    )

    return response

  } catch (error) {
      console.error("Mailchimp error:", error.response?.body || error.message)
      throw error
  }
}
// [ ] Ska vi skriva krav i lösenordsfältets placebolder? Eller i en tooltip? Eller i en liten text under fältet?
// [ ] Ska vi lägga till validering och error text i en store? I denna eller i en egen contentStore för formulärdata? Ev. Skapa formContentStore och pagesContentStore typ?
// [ ] Lägg till mer i medlemskapsContent när vi vet mer om hur sidan ska se ut och vi har implementerat Stripe etc...

import { create } from "zustand"


const NavbarContent = {
  logoAltTxt: "Womenation",
  logoHref: "https://womenation.se",
  links: {
    omMedlemskap: "Om Medlemskap",
    konto: "Konto"
  },
  buttons: {
    logIn: "Logga in",
    logOut: "Logga ut"
  }
}

const sharedContent = {
  buttons: {
    backToMembership: "Tillbaka till Om Medlemskap"
  }
}

const omMedlemskapContent = {
  hero: "OM MEDLEMSKAP",
  heading: "BLI PREMIUM MEDLEM!",
  text: "Få exklusiva rabatter och erbjudande. Förtur på eventbiljetter",
  cards: {
    basic: {
      type: "BASIC",
      price: "Gratis",
      benefit: "Köpa biljetter via portalen\nTillgång till medlemsportalen",
    },
    pro: {
      type: "PRO",
      price: "SEK 200",
      benefit: "Förträde till events\nExklusiva rabatter från våra partners\nTillgång till Womenation marketplace",
    },
  },
  buttons: {
    basic: "Välj Basic (inaktiv)",
    pro: "Välj Pro (inaktiv)",
  }
}

const signuUpContent = {
  pageHeading: "",
  pageSubHeading: "",
  form: {
    heading: "BLI MEDLEM",
    subHeading: "Skapa konto!\nfyll i din information för att få tillgång till ditt konto.",
    labels: {
      firstName: "Förnamn",
      lastName: "Efternamn",
      email: "E-post",
      password: "Lösenord",
      city: "I vilken stad bor du?",
      justifyMembership: "Berätta kort om dig själv och varför du vill vara en del av Womenation!",
      workStatus: {
        label: "Vart befinner du dig just nu?",
        desc: "Välj det alternativ som passar din arbetssituation bäst, du kan välja fler alternativ.",
        checkboxLabel: {
          worker: "Jobbar i ett företag eller organisation",
          owner: "Driver eget företag",
          startUp: "Håller på att starta eget",
          searching: "Söker nytt jobb eller vill byta bana",
          other: "Annat"
        },
      },
    },
    placeholders: {
      firstName: "ex. Anna",
      lastName: "ex. Andersson",
      email: "ex. anna@example.com",
      password: "Ange ditt lösenord (Skriv krav här?)",
      city: "Sök bland alla svenska städer...",
      justifyMembership: "Berätta kort om dig själv och varför du vill vara en del av Womenation!",
      workStatusOther: "Skriv din arbetssituation här..."
    },
    button: {
      text: "Bli medlem",
      textSubmitting: "Skapar konto..."
    },
   navigateToLogIn: {
      text: "Redan medlem? Logga in ",
      linkText: "här",
      linkTo: "/logga-in"
    }
  }
}

const logInContent = {
  pageHeading: "",
  pageSubHeading: "",
  form: {
    heading: "LOGGA IN",
    subHeading: "Välkommen tillbaka!\nLogga in för att få tillgång till ditt konto.",
    labels: {
      email: "E-post",
      password: "Lösenord",
    },
    placeholders: {
      email: "ex. anna@example.com",
      password: "Ange ditt lösenord",
    },
    button: {
      text: "Logga in",
      textSubmitting: "Loggar in..."
    },
   navigateToSignUp: {
      text: "Inte registrerad? Bli medlem ",
      linkText: "här",
      linkTo: "/bli-medlem"
    }
  }
}

const sidebarContent = {
  links: {
    //Används inte just nu
    minaSidor: "Mina sidor",
    medlemskap: "Medlemskap",
    events: "Events",
    erbjudanden: "Erbjudanden"
  }
}

const minaSidorContent = {
  heading: "Mina sidor",
  description: "Här kan du se dina medlemskap och uppdatera din information.", 
  form: {
    labels: {
      firstName: "Förnamn",
      lastName: "Efternamn",
      email: "E-post",
      city: "Stad",
    },
    inputData: {
      firstName: "user.firstName",
      lastName: "user.lastName",
      email: "user.email",
      city: "user.city"
    },
    editButton: "Uppdatera information",
    saveButton: "Spara",
    textButtonSubmitting: "Uppdaterar..."
  }
} 

const medlemskapContent = {
  // Just nu används omMedlemskapsContent här
}
const eventContent = {
  heading: "Events",
  description: "Här är våra kommande event. Som medlem får du förtur på biljetter. Håll utkik, fler event kommer snart!",
  card: {
   // Just nu används mockUpEvents. Ska vi här mappa från backend via nya event-GET från event-POST skapat i adminläge)
    image: "",
    heading: "",
    description: "",
    price: "",
    place: "",
    tag: "", // datum
    button: ""
  }
}

const erbjudandenContent = {
  //Tom sida för tillfället
}



export const useContentStore = create(() => ({
  sharedContent: sharedContent,
  navbarContent: NavbarContent,
  omMedlemskapContent: omMedlemskapContent,
  signuUpContent: signuUpContent,
  logInContent: logInContent,
  sidebarContent: sidebarContent,
  minaSidorContent: minaSidorContent,
  medlemskapContent: medlemskapContent,
  eventContent: eventContent,
  erbjudandenContent: erbjudandenContent
}))

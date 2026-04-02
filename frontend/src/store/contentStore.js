import { create } from "zustand"

const membershipContent = {
  hero: "OM MEDLEMSKAP",
  heading: "BLI PREMIUM MEDLEM!",
  text: "Få exklusiva rabatter och erbjudande. Förtur på eventbiljetter",
  cards: {
    basic: {
      type: "BASIC",
      price: "Gratis",
      info:
        "Köpa biljetter genom portalen\nTillgång till medlemsportalen",
    },
    pro: {
      type: "PRO",
      price: "SEK 200",
      info:
        "Förträde till events\nExklusiva rabatter från våra partners\nTillgång till Womenation marketplace",
    },
  },
  buttons: {
    basic: "Välj Basic",
    pro: "Välj Pro",
    logIn: "Logga in" 
  }
}
// [x] Ändra i logga in komponent efter restructure 

const logInContent = {
  heading: {
    logIn: "Logga in",
    signUp: "Bli medlem",
  },
  text: {
    logIn: "Välkommen tillbaka!\nLogga in för att få tillgång till ditt konto.",
    signUp: "Skapa konto!\nfyll i din information för att få tillgång till ditt konto.",
  },
  signUp: {
    text: "Inte registrerad? Bli medlem ",
    linkText: "här",
    linkTo: "/bli-medlem"
  },
  logIn: {
    text: "Redan medlem? Logga in ",
    linkText: "här",
    linkTo: "/logga-in"
  },
  form: {
    name: "namn",
    email: "E-post",
    password: "Lösenord",
    button: {
      logIn: "Logga in",
      signUp: "Bli medlem"

    }
  },
}

const minaSidorContent = {
  heading: "Mina sidor",
  description: "Här kan du se dina medlemskap och uppdatera din information.", 
} 

const eventContent = {
  heading: "Events",
  description: "hallå",
  card: {
    image: "",
    title: "hej",
    description: ""
  }
}


export const useContentStore = create(() => ({
  content: membershipContent,
  logInContent: logInContent,
  minaSidorContent: minaSidorContent,
  eventContent: eventContent
}))

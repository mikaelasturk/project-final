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
    firstName: "Förnamn",
    firstNamePlaceholder: "ex. Anna",
    lastName: "Efternamn",
    lastNamePlaceholder: "ex. Andersson",
    email: "E-post",
    emailPlaceholder: "ex. anna@example.com",
    password: "Lösenord",
    passwordPlaceholder: "Ange ditt lösenord",
    city: "I vilken stad bor du?",
    cityPlaceholder: "Sök bland alla svenska städer...",
    justifyMembershipLabel: "Berätta kort om dig själv och varför du vill vara en del av Womenation!",
    workStatusLabel: "Vart befinner du dig just nu?",
    workStatusDesc: "Välj det alternativ som passar din arbetssituation bäst, du kan välja fler alternativ.",
    workStatus: {
      a: "Jobbar i ett företag eller organisation",
      b: "Driver eget företag",
      c: "Håller på att starta eget",
      d: "Söker nytt jobb eller vill byta bana",
      e: "Annat"
    },
    button: {
      logIn: "Logga in",
      signUp: "Bli medlem"

    }
  },
}

const minaSidorContent = {
  heading: "Mina sidor"
} 

const medlemskapContent = {
  heading: "Medlemskap"
}

const eventContent = {
  heading: "Events",
  description: "hallå",
  events: [
    { id: 1, image: "media/images/1 (258).jpg", date: "24 mars", title: "Event title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "100kr", city: "Stockholm" },
    { id: 2, date: "7 april", title: "Event title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "100kr", city: "Göteborg" },
    { id: 3, date: "19 maj", title: "Event title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "100kr", city: "Malmö" },
    { id: 4, date: "31 maj", title: "Event title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "100kr", city: "Stockholm" }
  ],
  button: "Anmäl dig här"
}

const erbjudandenContent = {
  heading: "Erbjudanden",
  description: "Här hittar du våra aktuella erbjudanden."
}

export const useContentStore = create(() => ({
  content: membershipContent,
  logInContent: logInContent,
  minaSidorContent: minaSidorContent,
  medlemskapContent: medlemskapContent,
  eventContent: eventContent,
  erbjudandenContent: erbjudandenContent
}))

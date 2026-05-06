// [x] Mikaela ska kolla upp hur vi ska strukturera theme colors efter pages.

export const Theme = {

  //Endingbreakpoints for said media querie.
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '1024px',
  },

  // [ ] gå igenom vad som använder colors och ändra till strukturen nedan

  colors: {
    // darkPurple: '#442E57',     //grafisk profil
    // mediumPurple: '#574368', //hemsidan
    // lightPurple: '#CFCCE4', //grafisk profil
    // gold: '#CDB56C', //grafisk profil
    // darkGrey: '#353333', //hemsidan
    // lightGrey: '#C6C6C7', //påhittad
    black: '#000000',         
    white: '#ffffff'
  },

  // --darkPurple: '#442E57', //from graphic design
  // --mediumPurple: '#574368', //from website
  // --lightPurple: '#CFCCE4', //from graphic design
  // --gold: '#CDB56C', //from graphic design
  // --darkGrey: '#353333', //from website
  // --lightGrey: '#C6C6C7', //made up
  // --black: '#000000',         
  // --white: '#ffffff'

  //Color theme for "omMedlemskap" page
  omMedlemskap: {
    bgClr: 'var(--darkPurple)',
    txtClr: 'var(--white)',

    cards:{
      bgClr: 'var(--mediumPurple)',
      txtClr: 'var(--white)'
    },

    buttons: {
      väljMedlemskap: {
        bgClr: 'var(--gold)',
        txtClr: 'var(--black)',
      },
      loggaIn: {
        bgClr: 'var(--gold)',
        txtClr: 'var(--black)',
      },
    },
  },
  
  //Color theme for "loggaIn" page
  loggaIn: {
    bgClr: 'var(--mediumPurple)',
    txtClr: '',
    cards: {
      bgClr: '',
    },
    form: {
      bgClr: 'var(--darkPurple)',
      txtClr: 'var(--white)',
      inputBgClr: 'var(--lightPurple)',
      inputTxtClr: 'var(--darkGrey)',
    },
    buttons: {
      loggaIn: {
        bgClr: 'var(--gold)',
        txtClr: 'var(--black)',
      },
      gåTillbaka: {
        bgClr: 'var(--lightGrey)',
        txtClr: 'var(--black)',
      },
    },
  },

  signUp: {
    bgClr: 'var(--mediumPurple)',
    txtClr: '',
    cards: {
      bgClr: '',
    },
    form: {
      bgClr: 'var(--darkPurple)',
      txtClr: 'var(--white)',
      inputBgClr: 'var(--lightPurple)',
      inputTxtClr: 'var(--darkGrey)',
      inputBgClrHover: 'var(--mediumPurple)',
      inputTxtClrHover: 'var(--white)',
      inputBgClrSelected: 'var(--darkPurple)',
      inputTxtClrSelected: 'var(--white)',
    },
    buttons: {
      loggaIn: {
        bgClr: 'var(--gold)',
        txtClr: 'var(--black)',
      },
      gåTillbaka: {
        bgClr: 'var(--lightGrey)',
        txtClr: 'var(--black)',
      },
    },
  },

  konto: {
    bgClr: 'var(--darkGrey)',
    txtClr: 'var(--white)',
    txtClrH1: 'var(--gold)',

    sidebar: {
      avatar: {
        bgClr: 'inherit',
        avatarClr: 'var(--gold)',
        txtClr: 'var(--gold)',
      },
      links: {
        bgClr: 'inherit',
        txtClr: 'var(--gold)',
        borderClrActive: 'var(--gold)',
        hoverBgClr: '',
        hoverTxtClr: '',
        hoverBorderClr: '',
      },
    },

    mainPage: {
      pageTitleClr: "var(--gold)",
      sectionTitleClr: "var(--lightGrey)",
      bgClr: 'var(--darkGrey)', 
      txtClr: 'var(--white)',

      minaSidor: {
        form: {
            bgClr: 'inherit', 
            txtClr: 'var(--white)',

            editButton: {
            bgClr: 'var(--darkGrey)',
            txtClr: 'var(--gold)',
            borderClr: 'var(--gold)',
            hoverBgClr: '',
            hoverTextClr: '',
            hoverBorderClr: '',
            },

            saveButton: {
              bgClr: 'var(--gold)',
              txtClr: 'var(--darkGrey)',
              borderClr: '',
              hoverBgClr: '',
              hoverTextClr: '',
              hoverBorderClr: '',
            },
          },
        },

      medlemskap: {
        cards: {
          bgClr: 'var(--darkPurple)',
          textClr: {
            h2: 'var(--white)',
            p: 'var(--white)',
            tag: 'var(--white)',
          },
          button: {
            bgClr: 'var(--gold)',
            txtClr: 'var(--darkGrey)',
            borderClr: '',
            hoverBgClr: '',
            hoverTextClr: '',
            hoverBorderClr: '',
          },
          checkmark: {
            bgClr: 'var(--darkGrey)',
            symbolClr: 'var(--gold)',
          },
        },
      },

      events: {
        cards: {
          bgClr: 'var(--darkGrey)',
          textClr: {
            h2: 'var(--white)',
            p: 'var(--white)',
            price: 'var(--white)',
          },
          button: {
            bgClr: 'var(--gold)',
            txtClr: 'var(--darkGrey)',
            borderClr: '',
            hoverBgClr: '',
            hoverTextClr: '',
            hoverBorderClr: '',
          },
          tag: {
            bgClr: 'var(--mediumPurple)',
            txtClr: 'var(--white)',
          },
        },
      },

      erbjudanden: {  
        cards: {
          bgClr: '',
          textClr: {
            h2: '',
            p: '',
          },
          button: {
            bgClr: '',
            txtClr: '',
            borderClr: '',
            hoverBgClr: '',
            hoverTextClr: '',
            hoverBorderClr: '',
          },
          tag: {
            bgClr: '',
            txtClr: '',
          },
        },
      },
    },
  },

  form: {
    bgClr: 'var(--darkPurple)',
    txtClr: 'var(--white)',
    inputBgClr: 'var(--lightPurple)',
    inputTxtClr: 'var(--darkGrey)',
    inputBgClrHover: 'var(--mediumPurple)',
    inputTxtClrHover: 'var(--white)',
    inputBgClrSelected: 'var(--darkPurple)',
    inputTxtClrSelected: 'var(--white)',
  },

  buttons: {
    loggaIn: {
      bgClr: 'var(--gold)',
      txtClr: 'var(--black)',
    },
  }
}


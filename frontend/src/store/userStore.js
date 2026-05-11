import { create } from 'zustand'
import { persist } from 'zustand/middleware' // AI

// [ ] Vart ska isAuthenticated vara?
// [ ] Ta bort persist och localStorage och använd fetch/httpOnly cookies
// [ ] Använd setLoading och error i hela appen där det behövs
// [ ] Lägg till logout funktion som tar bort user data och localStorage
// [ ] Lägg till token expiration och refresh token logik
// [ ] Lägg till user role/permissions i user data och använd det för att styra access till olika delar av appen (isAdmin, isPremium osv)
// [ ] Lägg till user profile data i user data och använd det i medlemsportal (avatar, name, email osv) istället för att hämta det separat från dashboard endpoint - diskutera om det här behövs?
// [ ] Lägg till en global error state i userStore som kan användas för att visa globala error messages i UI när något går fel med user auth eller dashboard fetch  
// [ ] Ska vi lägga till en global isAuthenticated state (?) 
// [ ] Diskutera om vi behöver en separat authStore för auth relaterad state och logik, eller om det är okej att ha allt i userStore för enkelhetens skull. AuthStore skulle kunna hantera allt som har med inloggning, tokenhantering, user roles osv att göra, medan userStore bara hanterar user profile data och dashboard data

const getInitialUserData = () => ({
  user: null,
  isLoading: false,
})

// localStorage.setItem('user', JSON.stringify(userData)) används inte med persist i userStore

export const useUserStore = create(
  persist( // AI
    (set) => ({
      ...getInitialUserData(),

      setUserData: (user) =>
        set({
          user,
          isLoading: false
        }),

      setLoading: (isLoading) =>
        set({
          isLoading
        }),

      resetUserData: () =>
        set({
          ...getInitialUserData()
        })
    }),
    {
      name: "user-storage" // AI
    }
  )
)
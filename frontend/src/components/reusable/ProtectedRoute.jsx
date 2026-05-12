import { Navigate, Outlet } from "react-router-dom"
import { useUserStore } from "../../store/userStore"

export const ProtectedRoute = () => {
  // const user = JSON.parse(localStorage.getItem("user")) 
  const user = useUserStore((state) => state.user) // För att persist ska funka använder vi userStore istället för att hämta från localStorage. 

  const accessToken =
    user?.accessToken || user?.savedUser?.accessToken

  if (!accessToken) {
    return <Navigate to="/logga-in" replace />
  }

  return <Outlet />
}

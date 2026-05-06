import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"))

  if (!user?.accessToken) {
    return <Navigate to="/logga-in" replace />
  }

  return <Outlet />
}

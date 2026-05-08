import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"))

  const accessToken =
    user?.accessToken || user?.savedUser?.accessToken

  if (!accessToken) {
    return <Navigate to="/logga-in" replace />
  }

  return <Outlet />
}

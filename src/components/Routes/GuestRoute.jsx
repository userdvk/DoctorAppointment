import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export function GuestRoute() {
  const user = useContext(AuthContext);

  if (user) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
}

import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRouteAdmin({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}

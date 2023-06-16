import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user?.isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
}

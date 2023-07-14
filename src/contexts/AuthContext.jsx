import { createContext, useState, useEffect } from "react";
import { getMe } from "../api/auth-api";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    const fetchMe = async () => {
      const res = await getMe(accessToken);

      setUser(res.data.user);
    };

    fetchMe();
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    window.location.reload(false);
  };
  // console.log("last", user);
  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

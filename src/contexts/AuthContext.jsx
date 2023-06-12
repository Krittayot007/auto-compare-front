import { createContext, useState, useContext, useEffect } from "react";
import { getMe } from "../api/auth-api";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    const fetchMe = async () => {
      const res = await getMe(accessToken);
      console.log(res.data);
      setUser(res.data);
    };

    fetchMe();
  }, []);

  const logout = () => {
    localStorage.removeItem("accesstoken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

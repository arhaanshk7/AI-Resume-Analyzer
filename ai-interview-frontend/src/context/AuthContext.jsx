import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const fetchUser = async () => {

    const token = localStorage.getItem("token");

    if (!token) {
      setUser(null);
      return;
    }

    try {

      const response = await axios.get(
        "http://localhost:5000/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(response.data.user);

    } catch (err) {

      console.log(err);

      localStorage.removeItem("token");
      setUser(null);

    }

  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        fetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
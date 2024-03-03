
import { createContext, useEffect, useState } from "react";

const LoginContext = createContext({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
});

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // Update context on user changes
  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem("userData", JSON.stringify(userData)); // Persist data (optional)
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("userData");
  };

  const contextValue = {
    user,
    setUser: handleLogin,
    isLoggedIn,
    logout: handleLogout,
  };

  return (
    //@ts-ignore
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };

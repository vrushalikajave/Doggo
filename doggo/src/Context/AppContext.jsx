import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const logoutUser = () => {
    setToken(null);
  };

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        logoutUser,

        isAuth,
        setIsAuth,
      }}
    >
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

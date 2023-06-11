import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: true,
  login: (token) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("tokenCreatorCV");

  return {
    token: storedToken,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("tokenCreatorCV");
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("tokenCreatorCV", token);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    // isLoggedIn: true,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

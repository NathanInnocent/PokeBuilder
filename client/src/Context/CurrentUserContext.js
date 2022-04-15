import { createContext, useState } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
 // CurrentUser
 const [currentUser, setCurrentUser] = useState(null);
 console.log("current user", currentUser);

 return (
  <CurrentUserContext.Provider
   value={{
    currentUser,
    setCurrentUser,
   }}
  >
   {children}
  </CurrentUserContext.Provider>
 );
};

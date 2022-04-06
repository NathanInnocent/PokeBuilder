import { createContext, useState } from "react";

export const CurrentPokemonTeamContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
 // CurrentUser
 const [currentPokemonTeam, setCurrentPokemonTeam] = useState(null);

 return (
  <CurrentPokemonTeamContext.Provider
   value={{
    currentPokemonTeam,
    setCurrentPokemonTeam,
   }}
  >
   {children}
  </CurrentPokemonTeamContext.Provider>
 );
};

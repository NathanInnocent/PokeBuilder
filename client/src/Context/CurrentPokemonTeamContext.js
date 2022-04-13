import { createContext, useState } from "react";

export const CurrentPokemonTeamContext = createContext(null);

export const CurrentTeamContext = ({ children }) => {
 // CurrentUser
 const [currentPokemonTeam, setCurrentPokemonTeam] = useState([{}, {}, {}, {}, {}, {}]);
 console.log(`Team size`, currentPokemonTeam.length, `Team is,`, currentPokemonTeam);

 const addPokemonToTeam = (pokemonToAddData) => {
  let stateCopy = [...currentPokemonTeam];
  //  Search State to see if there's an empty object => Means no pokemon chosen
  let index = stateCopy.findIndex((currentTeam) => Object.keys(currentTeam).length === 0);

  // Nothing found -> party full of pokemons
  if (index === -1) return;
  //Found empty object, team is not full
  else {
   // Check if Pokemon already exists in team, if so exit out of function
   if (currentPokemonTeam.find((currentTeam) => currentTeam.name === pokemonToAddData.name)) return;
   //  Pokemon not already in team, add it
   stateCopy[index] = pokemonToAddData;
   setCurrentPokemonTeam([...stateCopy]);
  }
 };

 // ========================
 const removePokemonFromTeam = (pokemonToRemoveFromTeam) => {
  let stateCopy = [...currentPokemonTeam];
  //  Search State to see if there's an empty object => Means no pokemon chosen
  let index = stateCopy.findIndex((currentTeam) => currentTeam.name === pokemonToRemoveFromTeam.name);

  // Nothing found -> pokemon is not in party
  if (index === -1) return;
  // Pokemon found, replace data with empty object
  else {
   stateCopy[index] = {};
   setCurrentPokemonTeam([...stateCopy]);
  }
 };

 return (
  <CurrentPokemonTeamContext.Provider
   value={{
    currentPokemonTeam,
    setCurrentPokemonTeam,
    addPokemonToTeam,
    removePokemonFromTeam,
   }}
  >
   {children}
  </CurrentPokemonTeamContext.Provider>
 );
};

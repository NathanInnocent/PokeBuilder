import { createContext, useContext, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";

export const CurrentPokemonTeamContext = createContext(null);

// Change name to CurrentTeamProvider
export const CurrentTeamProvider = ({ children }) => {
 const { currentUser } = useContext(CurrentUserContext);

 const [currentPokemonTeam, setCurrentPokemonTeam] = useState([{}, {}, {}, {}, {}, {}]);

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

 const postPokemonTeam = async () => {
  const username = currentUser?.user || null;
  //Stop process if no username
  if (username === null) return console.log("This feature is only available to logged in users.");
  console.log("username", username, "pokemonTeam", currentPokemonTeam);
  //  Search State to see if there's an empty object // True || false
  let index = currentPokemonTeam.some((currentTeam) => Object.keys(currentTeam).length === 0);

  // Pokemon team is not full, return
  if (index === true) return console.log("Your Pokemon team is not full. Please add Pokemons to your team.");
  else {
   // Pokemon team is full, post it
   await fetch(`http://localhost:4000/api/pokemon-team`, {
    headers: {
     "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ username, team: currentPokemonTeam }),
   })
    .then((res) => res.json())
    .then((data) => {
     if (data.status >= 200 && data.status <= 299) {
      //{ status: 200, message: "Account created successfully!" }
      console.log("success", data);
      return data;
     } else {
      throw data;
     }
    })
    .catch((error) => {
     console.log("error", error);
    });
  }
 };

 return (
  <CurrentPokemonTeamContext.Provider
   value={{
    currentPokemonTeam,
    setCurrentPokemonTeam,
    addPokemonToTeam,
    removePokemonFromTeam,
    postPokemonTeam,
   }}
  >
   {children}
  </CurrentPokemonTeamContext.Provider>
 );
};

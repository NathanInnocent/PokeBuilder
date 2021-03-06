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

 const postPokemonTeam = async (setFetchResponse, teamName, setButtonDisabled) => {
  //init remove serverResponse
  setFetchResponse(null);
  const username = currentUser?.user || null;
  //Stop process if no username
  if (username === null) return setFetchResponse({ status: 400, message: "This feature is only available to logged in users." });
  //Stop process if no teamName
  if (teamName === "" || teamName === undefined) return setFetchResponse({ status: 400, message: "Please enter a team name." });
  else if (teamName.length > 20) return setFetchResponse({ status: 400, message: "Team name must be less than 20 characters." });
  else if (teamName.length < 3) return setFetchResponse({ status: 400, message: "Team name must be at least 3 characters." });

  //  Search State to see if there's an empty object // True || false
  let index = currentPokemonTeam.some((currentTeam) => Object.keys(currentTeam).length === 0);

  // Pokemon team is not full, return
  if (index === true) return setFetchResponse({ status: 400, message: "Your Pokemon team is not full. Please add Pokemons to your team." });
  else {
   // Pokemon team is full, post it
   // Reduce pokemonTeam object to save save to database
   const pokemonTeamObject = currentPokemonTeam.map((pokemon) => {
    const { name, sprites } = pokemon;
    return { name, sprites };
   });
   setButtonDisabled(true);
   await fetch(`http://localhost:4000/api/pokemon-team`, {
    headers: {
     "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ username, team: pokemonTeamObject, teamName }),
   })
    .then((res) => res.json())
    .then((data) => {
     // Posted successfully
     const { status, message } = data;
     if (status >= 200 && status <= 299) {
      //  Remove current pokemon team
      setCurrentPokemonTeam([{}, {}, {}, {}, {}, {}]);
      setButtonDisabled(false);
      return setFetchResponse({ status: 200, message: message });
     } else {
      throw data;
     }
    })
    .catch((error) => {
     setButtonDisabled(false);
     return setFetchResponse(error.message);
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

import { createContext, useState } from "react";

export const CurrentPokemonContext = createContext(null);

export const CurrentPokemonProvider = ({ children }) => {
 //Contains information about pokemon evolution
 const [evolutionChainDetail, setEvolutionChainDetail] = useState(null);

 //Contains information about pokemon species {species:"", description: ""} && more
 const [speciesDetails, setSpeciesDetail] = useState(null);

 //Contains information about pokemon stats
 const [statsDetail, setStatsDetail] = useState({ hp: "", attack: "", defense: "", speed: "", specialAttack: "", specialDefense: "" });

 //Contains information about current Pokemon
 const [currentPokemon, setCurrentPokemon] = useState(null);

 //Contains information about ability effetcs
 const [abilityEffect, setAbilityEffect] = useState([]);

 return (
  <CurrentPokemonContext.Provider
   value={{
    statsDetail,
    setStatsDetail,
    speciesDetails,
    setSpeciesDetail,
    evolutionChainDetail,
    setEvolutionChainDetail,
    currentPokemon,
    setCurrentPokemon,
   }}
  >
   {children}
  </CurrentPokemonContext.Provider>
 );
};

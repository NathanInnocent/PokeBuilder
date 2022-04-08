import { createContext, useState } from "react";

export const PokemonDataContext = createContext(null);

export const PokemonDataProvider = ({ children }) => {
 // CurrentUser
 const [pokemonData, setPokemonData] = useState([]);

 const getAllPokemon = async () => {
  // First 20 Pokemons
  const initUrl = "https://pokeapi.co/api/v2/pokemon";
  //All Pokemons
  // const initUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  const response = await fetch(initUrl);
  const data = await response.json();

  const getPokemon = (result) => {
   result.forEach(async (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
    const data = await fetch(url);
    const pokemonFetchData = await data.json();

    // Check if data is already inside the context, if so break out of loop
    if (pokemonData.find((contextPokemonData) => pokemonFetchData.name === contextPokemonData.name)) return;
    // Data not already inside Context, proceed to add it
    else setPokemonData((currentInformation) => [...currentInformation, pokemonFetchData]);
   });
  };

  getPokemon(data.results);
 };

 return (
  <PokemonDataContext.Provider
   value={{
    pokemonData,
    setPokemonData,
    getAllPokemon,
   }}
  >
   {children}
  </PokemonDataContext.Provider>
 );
};

import { createContext, useState } from "react";

export const PokemonDataContext = createContext(null);

export const PokemonDataProvider = ({ children }) => {
 // CurrentUser
 const [allPokemonData, setAllPokemonData] = useState([]);
 const [shownPokemons, setShownPokemons] = useState([]);
 const [viewedGeneration, setViewedGeneration] = useState("Generation 1");

 const getAllPokemon = async () => {
  //Gen i
  const genUrl = "https://pokeapi.co/api/v2/generation/1/";
  const responseGen = await fetch(genUrl);
  const dataGen = await responseGen.json();
  //All Pokemons
  const allUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  const responseAll = await fetch(allUrl);
  const dataAll = await responseAll.json();

  const getPokemon = async (result, setState) => {
   result.forEach(async (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
    const data = await fetch(url);
    const pokemonFetchData = await data.json();
    setState((currentInformation) => [...currentInformation, pokemonFetchData]);
   });
  };
  // // Get 1 gen
  await getPokemon(dataGen.pokemon_species, setShownPokemons);
  // Get all the pokemons
  await getPokemon(dataAll.results, setAllPokemonData);
 };

 return (
  <PokemonDataContext.Provider
   value={{
    allPokemonData,
    setAllPokemonData,
    getAllPokemon,
    shownPokemons,
    setShownPokemons,
    viewedGeneration,
    setViewedGeneration,
   }}
  >
   {children}
  </PokemonDataContext.Provider>
 );
};

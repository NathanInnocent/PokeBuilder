import { useEffect, useState } from "react";
import { PokemonCard } from "../../Components/PokemonCard";
import { useFetch } from "../../Hooks/useFetch";

export const Homepage = () => {
 const [pokemonData, setPokemonData] = useState([]);
 const [currentPagePokemon, setCurrentPagePokemon] = useState("https://pokeapi.co/api/v2/pokemon");
 const [pokemonInformation, setPokemonInformation] = useState([]);

 const [previousPokemon, setPreviousPokemon] = useState(null);
 const [nextPokemon, setNextPokemon] = useState(null);

 //  console.log("currentPagePokemon", pokemonData);

 useFetch("https://pokeapi.co/api/v2/pokemon/", setPokemonData);

 const getAllPokemon = async () => {
  const initUrl = "https://pokeapi.co/api/v2/pokemon";
  // const initUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  const response = await fetch(initUrl);
  const data = await response.json();

  const getPokemon = (result) => {
   result.forEach(async (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
    const data = await fetch(url);
    const json = await data.json();
    if (pokemonInformation.find((pokemon) => json.name === pokemon.name)) {
     console.log("already in state");
    } else setPokemonInformation((currentInformation) => [...currentInformation, json]);
   });
  };

  getPokemon(data.results);
 };

 useEffect(() => {
  getAllPokemon();
 }, []);

 console.log(pokemonInformation);

 useEffect(() => {
  if (pokemonData.next) setNextPokemon(pokemonData.next);
  else setNextPokemon(null);

  if (pokemonData.previous) setPreviousPokemon(pokemonData.previous);
  else setPreviousPokemon(null);
 }, [pokemonData]);

 return (
  <>
   <div>homepage</div>
   {pokemonInformation &&
    pokemonInformation
     .sort((pokemonA, pokemonB) => pokemonA.id > pokemonB.id)
     .map((pokemon, index) => {
      return <PokemonCard key={index} info={pokemon} />;
     })}
  </>
 );
};

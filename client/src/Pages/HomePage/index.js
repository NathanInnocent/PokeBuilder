import { useContext, useEffect, useState } from "react";
import { PokemonCard } from "../../Components/PokemonCard";
import { PokemonDataContext } from "../../Context/PokemonDataContext";

export const Homepage = () => {
 const { pokemonData, getAllPokemon } = useContext(PokemonDataContext);

 const [currentPagePokemon, setCurrentPagePokemon] = useState("https://pokeapi.co/api/v2/pokemon");
 const [pokemonInformation, setPokemonInformation] = useState([]);

 const [previousPokemon, setPreviousPokemon] = useState(null);
 const [nextPokemon, setNextPokemon] = useState(null);

 useEffect(() => {
  if (pokemonData.next) setNextPokemon(pokemonData.next);
  else setNextPokemon(null);

  if (pokemonData.previous) setPreviousPokemon(pokemonData.previous);
  else setPreviousPokemon(null);
 }, [pokemonData]);

 return (
  <>
   <div>homepage</div>
   {pokemonData &&
    pokemonData
     .sort((pokemonA, pokemonB) => pokemonA.id > pokemonB.id)
     .map((pokemon, index) => {
      return <PokemonCard key={index} info={pokemon} />;
     })}
  </>
 );
};

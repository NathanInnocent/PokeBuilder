import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonCard } from "../../Components/PokemonCard";
import { PokemonDataContext } from "../../Context/PokemonDataContext";

export const FilteredPokemonPage = () => {
 let { criteria } = useParams();
 const { allPokemonData } = useContext(PokemonDataContext);

 const [filteredPokemonList, setFilteredPokemonList] = useState(null);
 console.log(filteredPokemonList);

 useEffect(() => {
  let filteredPokemons = allPokemonData.filter((pokemonContextData) => pokemonContextData.types.some((object) => object.type.name === criteria));
  setFilteredPokemonList(filteredPokemons);
 }, [criteria]);

 return (
  <>
   {/* Loading data */}
   {filteredPokemonList === null && <div>loading data...</div>}
   {/* Found results */}
   {Array.isArray(filteredPokemonList) && filteredPokemonList.length > 0 && filteredPokemonList.map((pokemon, index) => <PokemonCard key={index} info={pokemon} />)}
   {/* No results */}
   {Array.isArray(filteredPokemonList) && filteredPokemonList.length === 0 && <div>No pokemons found</div>}
  </>
 );
};

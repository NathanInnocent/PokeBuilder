import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Filters } from "../../Components/Filters";
import { PokemonCard } from "../../Components/PokemonCard";
import { PokemonTeam } from "../../Components/PokemonTeam";
import { SearchBar } from "../../Components/SearchBar";
import { CurrentPokemonTeamContext } from "../../Context/CurrentPokemonTeamContext";
import { PokemonDataContext } from "../../Context/PokemonDataContext";
import { Content } from "../SinglePokemon/styling";

export const FilteredPokemonPage = () => {
 let { criteria } = useParams();
 const { allPokemonData } = useContext(PokemonDataContext);
 const { currentPokemonTeam } = useContext(CurrentPokemonTeamContext);

 const [filteredPokemonList, setFilteredPokemonList] = useState(null);

 useEffect(() => {
  let filteredPokemons = allPokemonData.filter((pokemonContextData) => pokemonContextData.types.some((object) => object.type.name === criteria));
  setFilteredPokemonList(filteredPokemons);
 }, [criteria]);

 return (
  //{filteredPokemonList === null && <div>loading data...</div>}
  <Content>
   <SearchBar />
   <PokemonTeam pokemon={currentPokemonTeam} />
   {/* Found results */}
   <div>{`Showing ${criteria} Type Pokemons`}</div>
   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", justifyItems: "center" }}>
    {Array.isArray(filteredPokemonList) && filteredPokemonList.length > 0 && filteredPokemonList.map((pokemon, index) => <PokemonCard key={index} info={pokemon} />)}
   </div>
   {/* No results */}
   {Array.isArray(filteredPokemonList) && filteredPokemonList.length === 0 && <div>No pokemons found</div>}
  </Content>
 );
};

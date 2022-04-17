import { useContext, useEffect, useState } from "react";
import { Filters } from "../../Components/Filters";
import { PokemonCard } from "../../Components/PokemonCard";
import { PokemonTeam } from "../../Components/PokemonTeam";
import { SearchBar } from "../../Components/SearchBar";
import { CurrentPokemonTeamContext } from "../../Context/CurrentPokemonTeamContext";
import { PokemonDataContext } from "../../Context/PokemonDataContext";
import { Content } from "../SinglePokemon/styling";

export const Homepage = () => {
 const { shownPokemons, viewedGeneration } = useContext(PokemonDataContext);

 const { currentPokemonTeam } = useContext(CurrentPokemonTeamContext);

 return (
  <Content>
   <SearchBar displayButton="none" />
   <PokemonTeam pokemon={currentPokemonTeam} />
   <Filters />

   <div>{`Viewing ${viewedGeneration} Pokemons`}</div>
   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", justifyItems: "center" }}>
    {shownPokemons &&
     shownPokemons.map((pokemon, index) => {
      return <PokemonCard key={index} info={pokemon} />;
     })}
   </div>
  </Content>
 );
};

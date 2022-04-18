import { useContext, useEffect } from "react";
import { Filters } from "../../Components/Filters";
import { PokemonCard } from "../../Components/PokemonCard";
import { PokemonTeam } from "../../Components/PokemonTeam";
import { PostTeamForm } from "../../Components/PokemonTeam/PostTeamForm";
import { SearchBar } from "../../Components/SearchBar";
import { CurrentPokemonTeamContext } from "../../Context/CurrentPokemonTeamContext";
import { PokemonDataContext } from "../../Context/PokemonDataContext";
import { Content } from "../SinglePokemon/styling";

export const PokedexPage = () => {
 const { shownPokemons, viewedGeneration } = useContext(PokemonDataContext);

 const { currentPokemonTeam } = useContext(CurrentPokemonTeamContext);

 useEffect(() => {
  window.scrollTo(0, 0);
  document.body.style.backgroundColor = "white";
 }, []);

 return (
  <Content>
   <SearchBar displayButton="none" />
   <PokemonTeam pokemon={currentPokemonTeam} />
   <PostTeamForm />
   <Filters />

   <div style={{ fontSize: "1.5em", color: "black", fontWeight: "bold", marginTop: "20px" }}>{`Viewing ${viewedGeneration} Pokemons`}</div>
   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", justifyItems: "center" }}>
    {shownPokemons &&
     shownPokemons.map((pokemon, index) => {
      return <PokemonCard key={index} info={pokemon} />;
     })}
   </div>
  </Content>
 );
};

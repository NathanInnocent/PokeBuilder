import { useContext } from "react";
import { CurrentPokemonTeamContext } from "../../Context/CurrentPokemonTeamContext";
import { TeamCard } from "./Card";

export const PokemonTeam = () => {
 const { currentPokemonTeam, postPokemonTeam } = useContext(CurrentPokemonTeamContext);
 let isTeamIncomplete = currentPokemonTeam.some((pokemon) => Object.keys(pokemon).length === 0);

 let pokemoname = currentPokemonTeam.map((pokemon) => pokemon.name);
 console.log(pokemoname);

 return (
  <>
   <div style={{ display: "flex", gap: "20px", justifyContent: "center", margin: "20px 0 20px 0" }}>
    {currentPokemonTeam.map((eachPokemon, index) => (
     <TeamCard key={index} pokemon={eachPokemon} />
    ))}
    {isTeamIncomplete === false && <button onClick={() => postPokemonTeam("nathan", currentPokemonTeam)}>Post team</button>}
   </div>
  </>
 );
};

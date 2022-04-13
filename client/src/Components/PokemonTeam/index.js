import { useContext } from "react";
import { CurrentPokemonTeamContext } from "../../Context/CurrentPokemonTeamContext";
import { TeamCard } from "./Card";

export const PokemonTeam = () => {
 const { currentPokemonTeam } = useContext(CurrentPokemonTeamContext);

 return (
  <>
   <div style={{ display: "flex", gap: "20px", justifyContent: "center", margin: "20px 0 20px 0" }}>
    {currentPokemonTeam.map((eachPokemon, index) => (
     <TeamCard key={index} pokemon={eachPokemon} />
    ))}
   </div>
  </>
 );
};

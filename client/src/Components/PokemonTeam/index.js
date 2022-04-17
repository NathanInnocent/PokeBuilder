import { useContext, useState } from "react";
import { ErrorMessage } from "../../Auth/Form/Components/FormStyles";
import { CurrentPokemonTeamContext } from "../../Context/CurrentPokemonTeamContext";
import { TeamCard } from "./Card";

export const PokemonTeam = ({ pokemon }) => {
 const { currentPokemonTeam, postPokemonTeam } = useContext(CurrentPokemonTeamContext);
 const [serverResponse, setServerResponse] = useState(null);
 let isTeamIncomplete = currentPokemonTeam.some((pokemon) => Object.keys(pokemon).length === 0);

 return (
  <>
   {pokemon && (
    <>
     <div style={{ display: "flex", gap: "20px", justifyContent: "center", margin: "20px 0 20px 0" }}>
      {pokemon.map((singlePokemon, index) => (
       <TeamCard key={index} pokemon={singlePokemon} />
      ))}
      {/* Should only show if pokemon === currentPokemonTeam */}
      {isTeamIncomplete === false && <button onClick={() => postPokemonTeam(setServerResponse)}>Post team</button>}
     </div>
     {serverResponse && <ErrorMessage style={{ backgroundColor: `${serverResponse.status === 200 ? "hsl(147deg, 83%, 34%)" : "hsl(0, 100%, 50%, 0.5)"}` }}>{serverResponse.message}</ErrorMessage>}
    </>
   )}
  </>
 );
};

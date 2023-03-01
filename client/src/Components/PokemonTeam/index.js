import { TeamCard } from "./Card";
import { Fragment } from "react";

export const PokemonTeam = ({ pokemon }) => {
 return (
  <Fragment>
   {pokemon && (
     <div style={{ display: "flex", gap: "20px", justifyContent: "center", margin: "20px 0 20px 0" }}>
      {pokemon.map((singlePokemon, index) => (
       <TeamCard key={index} pokemon={singlePokemon} />
      ))}
     </div>
   )}
  </Fragment>
 );
};

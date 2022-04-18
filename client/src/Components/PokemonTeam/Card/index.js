import { EmptyPokemon } from "./emptyPokemon";
import { SmallPokemonIcon } from "./pickedPokemon";

export const TeamCard = ({ pokemon }) => {
 const { name } = pokemon;
 // If there are no pokemons, show empty pokemon icon
 if (Object.keys(pokemon).length === 0) {
  return <EmptyPokemon />;
 }
 // If there is a pokemon, show icon
 return (
  <div>
   <SmallPokemonIcon pokemon={pokemon} />
   <p style={{ textAlign: "center", textTransform: "capitalize", fontSize: "1.3em", fontWeight: "bold" }}>{name}</p>
  </div>
 );
};

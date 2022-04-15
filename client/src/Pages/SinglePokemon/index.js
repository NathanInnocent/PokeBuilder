import { CurrentPokemonProvider } from "./context";
import { SinglePokemon } from "./singlePokemon";

export const SinglePokemonPage = () => {
 return (
  <CurrentPokemonProvider>
   <SinglePokemon />
  </CurrentPokemonProvider>
 );
};

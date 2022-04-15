import { useContext } from "react";
import { SmallPokemonIcon } from "../../Components/PokemonTeam/Card/pickedPokemon";
import { PokemonDataContext } from "../../Context/PokemonDataContext";
import { CurrentPokemonContext } from "./context";

export const Evolutions = () => {
 const { allPokemonData } = useContext(PokemonDataContext);
 const { evolutionChainDetail } = useContext(CurrentPokemonContext);

 return (
  <>
   {/* Make sure that the evolution chain is not 1 => would mean that there is only 1 form of the pokemon */}
   {Array.isArray(evolutionChainDetail) && evolutionChainDetail.length > 1 && (
    <div>
     <div>Evolution Chain</div>
     <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {evolutionChainDetail.map((possibleEvolution) => {
       let currentPokemon = possibleEvolution.name;
       let data = possibleEvolution.value;
       let contextData = allPokemonData.filter((data) => data.name === currentPokemon)[0];
       return <SmallPokemonIcon key={currentPokemon} pokemon={contextData} style={{ flex: "1" }} />;
      })}
     </div>
    </div>
   )}
  </>
 );
};

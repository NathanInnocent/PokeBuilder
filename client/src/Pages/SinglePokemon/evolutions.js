import { useContext } from "react";
import { TeamCard } from "../../Components/PokemonTeam/Card";
import { SmallPokemonIcon } from "../../Components/PokemonTeam/Card/pickedPokemon";
import { PokemonDataContext } from "../../Context/PokemonDataContext";

export const Evolutions = ({ data }) => {
 const { allPokemonData } = useContext(PokemonDataContext);

 return (
  <>
   {/* Make sure that the evolution chain is not 1 => would mean that there is only 1 form of the pokemon */}
   {Array.isArray(data) && data.length > 1 && (
    <div>
     <div>Evolution Chain</div>
     <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {data.map((possibleEvolution) => {
       let currentPokemon = possibleEvolution.name;
       let data = possibleEvolution.value;
       let contextData = allPokemonData.filter((data) => data.name === currentPokemon)[0];
       return <SmallPokemonIcon pokemon={contextData} style={{ flex: "1" }} />;
      })}
     </div>
    </div>
   )}
  </>
 );
};

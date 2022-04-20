import { useContext } from "react";
import { getColorPallate } from "../../Components/PokemonCard/typeLogic";
import { CurrentPokemonContext } from "./context";
import { FlexHorizontalContainer, TypeLabel } from "./styling";

export const Type = () => {
 const {
  currentPokemon: { types },
 } = useContext(CurrentPokemonContext);

 return (
  <FlexHorizontalContainer>
   {types.map((availableType, index) => {
    // Get color schema for each available type
    const { numberColor } = getColorPallate(availableType.type.name);

    return (
     <TypeLabel key={index} style={{ backgroundColor: `${numberColor}` }}>
      {availableType.type.name}
     </TypeLabel>
    );
   })}
  </FlexHorizontalContainer>
 );
};

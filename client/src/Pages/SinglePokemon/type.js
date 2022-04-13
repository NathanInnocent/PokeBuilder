import { getColorPallate } from "../../Components/PokemonCard/typeLogic";
import { FlexHorizontalContainer, TypeLabel } from "./styling";

export const Type = ({ data }) => {
 return (
  <FlexHorizontalContainer>
   {data.map((availableType, index) => {
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

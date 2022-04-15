import { useContext } from "react";
import { convertPokemonId, getColorPallate } from "../../../Components/PokemonCard/typeLogic";
import { CurrentPokemonContext } from "../context";
import { ImageContainerDiv, PokemonId, PokemonImage, PokemonName } from "../styling";
import { AddAndRemoveTeamButtons } from "./Buttons";

export const ImageUI = () => {
 const { currentPokemon } = useContext(CurrentPokemonContext);
 const { id, name, sprites, types } = currentPokemon;
 const primaryType = types[0].type.name;
 const { numberColor, nameColor } = getColorPallate(primaryType);
 const displayedPokemonId = convertPokemonId(id);
 const image = sprites.other[`official-artwork`][`front_default`];

 return (
  <>
   <PokemonName style={{ color: `${nameColor}`, textAlign: "center", textTransform: "capitalize" }}>{name}</PokemonName>
   <PokemonId style={{ textAlign: "center", color: `${numberColor}` }}>{displayedPokemonId}</PokemonId>
   {/* Add to team button */}
   <AddAndRemoveTeamButtons />
   {/* image section */}
   <ImageContainerDiv style={{ zIndex: "1", margin: "auto" }}>
    <PokemonImage src={image} alt={`${name} png`} />
   </ImageContainerDiv>
  </>
 );
};

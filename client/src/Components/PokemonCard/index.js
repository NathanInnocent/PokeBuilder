import { useState } from "react";
import { Icon, ID, Image, Name, SmallPokemonCard } from "./styling";
import { convertPokemonId, getColorPallate, getTypeIcon } from "./typeLogic";

export const PokemonCard = ({ info }) => {
 //  const [pokemon, setPokemon] = useState(pokemonSampleData);
 const { sprites, id, types, name } = info;
 const image = sprites.other[`official-artwork`][`front_default`];
 const primaryType = types[0].type.name;
 const { backgroundColor, numberColor, nameColor } = getColorPallate(primaryType);
 const displayedPokemonId = convertPokemonId(id);

 const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
 };

 return (
  <SmallPokemonCard style={{ backgroundColor: `${backgroundColor}` }}>
   <ID style={{ color: `${numberColor}` }}>{displayedPokemonId}</ID>
   <Name style={{ color: `${nameColor}` }}>{capitalizeFirstLetter(name)}</Name>
   <div style={{ display: "flex", gap: "10px" }}>
    {types.map((data, index) => {
     const { icon } = getTypeIcon(data.type.name);
     return <Icon src={icon} alt={`${primaryType} icon`} key={index} />;
    })}
   </div>
   <Image src={image} alt={`${name}`} />
  </SmallPokemonCard>
 );
};

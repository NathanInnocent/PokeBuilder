import { Icon, ID, Image, Name, SmallPokemonCard } from "./styling";
import { convertPokemonId, getColorPallate, getTypeIcon } from "./typeLogic";
import { useNavigate } from "react-router-dom";

export const PokemonCard = ({ info }) => {
 let navigate = useNavigate();

 const { sprites, id, types, name } = info;
 const image = sprites.other[`official-artwork`][`front_default`];
 const primaryType = types[0].type.name;
 const { backgroundColor, numberColor, nameColor } = getColorPallate(primaryType);
 const displayedPokemonId = convertPokemonId(id);

 return (
  <SmallPokemonCard
   onClick={() => {
    navigate(`/pokemon/${name}`);
   }}
   style={{ backgroundColor: `${backgroundColor}` }}
  >
   <ID style={{ color: `${numberColor}` }}>{displayedPokemonId}</ID>
   <Name style={{ color: `${nameColor}`, textTransform: "capitalize" }}>{name}</Name>
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

import { getColorPallate, getTypeIcon } from "../../Components/PokemonCard/typeLogic";
import { Button, Text } from "./styling";
import { Icon } from "../../Components/PokemonCard/styling";

export const GridTypes = ({ columns, handleSearch }) => {
 const pokemonTypeList = ["normal", "fire", "water", "grass", "bug", "electric", "fairy", "psychic", "fighting", "rock", "ground", "flying", "ghost", "ice", "dark", "dragon", "poison", "steel"];

 const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
 };

 return (
  <>
   <h2>Search by type</h2>
   <div style={{ display: "grid", gridTemplateColumns: `${columns}`, gap: "10px" }}>
    {pokemonTypeList.map((type, index) => {
     const { backgroundColor, numberColor } = getColorPallate(type);
     const { icon } = getTypeIcon(type);
     return (
      <Button onClick={() => handleSearch(type)} key={index} style={{ backgroundColor: `${backgroundColor}` }}>
       <Text style={{ color: `${numberColor}` }}>{capitalizeFirstLetter(type)}</Text>
       <Icon src={icon} alt={`${type}_icon`} style={{ width: "50px", height: "50px", top: "0" }} />
      </Button>
     );
    })}
   </div>
  </>
 );
};

import { useState } from "react";
import { Icon } from "../../Components/PokemonCard/styling";
import { getColorPallate, getTypeIcon } from "../../Components/PokemonCard/typeLogic";
import { SearchBar } from "../../Components/SearchBar";
import { ICON } from "../../Helpers/Icons";
import { Button, Text } from "./styling";

export const SearchFilterPage = () => {
 const [pokemonTypeList, setPokemonTypeList] = useState([
  "normal",
  "fire",
  "water",
  "grass",
  "bug",
  "electric",
  "fairy",
  "psychic",
  "fighting",
  "rock",
  "ground",
  "flying",
  "ghost",
  "ice",
  "dark",
  "dragon",
  "poison",
  "steel",
 ]);

 const [sortingCriteria, setSortingCriteria] = useState(["A-Z", "Z-A", "Heaviest-Lightest", "Lightest-Heaviest", "Tallest-Shortest", "Shortest-Tallest"]);

 const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
 };

 return (
  <>
   {/* Container */}
   <div>
    <SearchBar />
    <h2>Search by type</h2>
    {/* Types */}
    {/* 2 columns on mobile -> 4 on desktop? */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
     {pokemonTypeList.map((type, index) => {
      const { background, numberColor } = getColorPallate(type);
      const { icon } = getTypeIcon(type);
      return (
       <Button key={index} style={{ backgroundColor: `${background}`, marginBottom: "10px" }}>
        <Text style={{ color: `${numberColor}` }}>{capitalizeFirstLetter(type)}</Text>
        <Icon src={icon} alt={`${type}_icon`} style={{ width: "50px", height: "50px", top: "0" }} />
       </Button>
      );
     })}
    </div>
    <h2>Sort by</h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
     {sortingCriteria.map((criteria, index) => (
      <Button key={index} style={{ marginBottom: "10px" }}>
       <Text>{criteria}</Text>
       <Icon src={ICON.upDownArrow} alt={`${criteria}_icon`} style={{ width: "50px", height: "50px", top: "0", borderRadius: "0" }} />
      </Button>
     ))}
    </div>
    <h2>Sort by Generation</h2>
   </div>
  </>
 );
};

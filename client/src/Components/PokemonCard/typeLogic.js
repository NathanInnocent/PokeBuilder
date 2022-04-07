import { COLOR } from "../../Constants";
import { TYPE_ICON } from "../../Helpers/Icons";

//Pokemons
import Grookey from "../../Assets/Images/Test/Grookey.png";
import Charmander from "../../Assets/Images/Test/Charmander.png";
import Ratatta from "../../Assets/Images/Test/Ratatta.png";

let colorPalette = { background: "", ID: "", name: "", icon: "" };

export const getPokemonTypeInformation = (type) => {
 switch (type) {
  case "normal":
   colorPalette = { background: COLOR.normal_card, numberColor: COLOR.normal_ID, nameColor: COLOR.normal_name, icon: TYPE_ICON.normal, image: Ratatta };
   break;
  case "fire":
   colorPalette = { background: COLOR.fire_card, numberColor: COLOR.fire_ID, nameColor: COLOR.fire_name, icon: TYPE_ICON.fire, image: Charmander };
   break;
  case "water":
   colorPalette = { background: COLOR.water_card, numberColor: COLOR.water_ID, nameColor: COLOR.water_name, icon: TYPE_ICON.water };
   break;
  case "grass":
   colorPalette = { background: COLOR.grass_card, numberColor: COLOR.grass_ID, nameColor: COLOR.grass_name, icon: TYPE_ICON.grass, image: Grookey };
   break;
  case "bug":
   colorPalette = { background: COLOR.bug_card, numberColor: COLOR.bug_ID, nameColor: COLOR.bug_name, icon: TYPE_ICON.bug };
   break;
  case "electric":
   colorPalette = { background: COLOR.electric_card, numberColor: COLOR.electric_ID, nameColor: COLOR.electric_name, icon: TYPE_ICON.electric };
   break;
  case "fairy":
   colorPalette = { background: COLOR.fairy_card, numberColor: COLOR.fairy_ID, nameColor: COLOR.fairy_name, icon: TYPE_ICON.fairy };
   break;
  case "psychic":
   colorPalette = { background: COLOR.psychic_card, numberColor: COLOR.psychic_ID, nameColor: COLOR.psychic_name, icon: TYPE_ICON.psychic };
   break;
  case "fighting":
   colorPalette = { background: COLOR.fighting_card, numberColor: COLOR.fighting_ID, nameColor: COLOR.fighting_name, icon: TYPE_ICON.fighting };
   break;
  case "rock":
   colorPalette = { background: COLOR.rock_card, numberColor: COLOR.rock_ID, nameColor: COLOR.rock_name, icon: TYPE_ICON.rock };
   break;
  case "ground":
   colorPalette = { background: COLOR.ground_card, numberColor: COLOR.ground_ID, nameColor: COLOR.ground_name, icon: TYPE_ICON.ground };
   break;
  case "flying":
   colorPalette = { background: COLOR.flying_card, numberColor: COLOR.flying_ID, nameColor: COLOR.flying_name, icon: TYPE_ICON.flying };
   break;
  case "ghost":
   colorPalette = { background: COLOR.ghost_card, numberColor: COLOR.ghost_ID, nameColor: COLOR.ghost_name, icon: TYPE_ICON.ghost };
   break;
  case "ice":
   colorPalette = { background: COLOR.ice_card, numberColor: COLOR.ice_ID, nameColor: COLOR.ice_name, icon: TYPE_ICON.ice };
   break;
  case "dark":
   colorPalette = { background: COLOR.dark_card, numberColor: COLOR.dark_ID, nameColor: COLOR.dark_name, icon: TYPE_ICON.dark };
   break;
  case "dragon":
   colorPalette = { background: COLOR.dragon_card, numberColor: COLOR.dragon_ID, nameColor: COLOR.dragon_name, icon: TYPE_ICON.dragon };
   break;
  case "poison":
   colorPalette = { background: COLOR.poison_card, numberColor: COLOR.poison_ID, nameColor: COLOR.poison_name, icon: TYPE_ICON.poison };
   break;
  case "steel":
   colorPalette = { background: COLOR.steel_card, numberColor: COLOR.steel_ID, nameColor: COLOR.steel_name, icon: TYPE_ICON.steel };
   break;
  default:
   colorPalette = { background: COLOR.normal_card, numberColor: COLOR.normal_ID, nameColor: COLOR.normal_name, icon: TYPE_ICON.normal };
   break;
 }
 return colorPalette;
};

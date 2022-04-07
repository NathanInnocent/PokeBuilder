import { COLOR } from "../../Constants";
//Icons
import grassIcon from "../../Assets/Images/Icons/Grass_Type.png";
import fireIcon from "../../Assets/Images/Icons/Fire_Type.png";
import waterIcon from "../../Assets/Images/Icons/Water_Type.png";
import bugIcon from "../../Assets/Images/Icons/Bug_Type.png";
import electricIcon from "../../Assets/Images/Icons/Electric_Type.png";
import fairyIcon from "../../Assets/Images/Icons/Fairy_Type.png";
import psychicIcon from "../../Assets/Images/Icons/Psychic_Type.png";
import fightingIcon from "../../Assets/Images/Icons/Fighting_Type.png";
import rockIcon from "../../Assets/Images/Icons/Rock_Type.png";
import groundIcon from "../../Assets/Images/Icons/Ground_Type.png";
import flyingIcon from "../../Assets/Images/Icons/Flying_Type.png";
import ghostIcon from "../../Assets/Images/Icons/Ghost_Type.png";
import iceIcon from "../../Assets/Images/Icons/Ice_Type.png";
import darkIcon from "../../Assets/Images/Icons/Dark_Type.png";
import dragonIcon from "../../Assets/Images/Icons/Dragon_Type.png";
import poisonIcon from "../../Assets/Images/Icons/Poison_Type.png";
import steelIcon from "../../Assets/Images/Icons/Steel_Type.png";
import normalIcon from "../../Assets/Images/Icons/Normal_Type.png";
//Pokemons
import Grookey from "../../Assets/Images/Test/Grookey.png";
import Charmander from "../../Assets/Images/Test/Charmander.png";
import Ratatta from "../../Assets/Images/Test/Ratatta.png";

let colorPalette = { background: "", ID: "", name: "", icon: "" };

export const getPokemonTypeInformation = (type) => {
 switch (type) {
  case "normal":
   colorPalette = { background: COLOR.normal_card, numberColor: COLOR.normal_ID, nameColor: COLOR.normal_name, icon: normalIcon, image: Ratatta };
   break;
  case "fire":
   colorPalette = { background: COLOR.fire_card, numberColor: COLOR.fire_ID, nameColor: COLOR.fire_name, icon: fireIcon, image: Charmander };
   break;
  case "water":
   colorPalette = { background: COLOR.water_card, numberColor: COLOR.water_ID, nameColor: COLOR.water_name, icon: waterIcon };
   break;
  case "grass":
   colorPalette = { background: COLOR.grass_card, numberColor: COLOR.grass_ID, nameColor: COLOR.grass_name, icon: grassIcon, image: Grookey };
   break;
  case "bug":
   colorPalette = { background: COLOR.bug_card, numberColor: COLOR.bug_ID, nameColor: COLOR.bug_name, icon: bugIcon };
   break;
  case "electric":
   colorPalette = { background: COLOR.electric_card, numberColor: COLOR.electric_ID, nameColor: COLOR.electric_name, icon: electricIcon };
   break;
  case "fairy":
   colorPalette = { background: COLOR.fairy_card, numberColor: COLOR.fairy_ID, nameColor: COLOR.fairy_name, icon: fairyIcon };
   break;
  case "psychic":
   colorPalette = { background: COLOR.psychic_card, numberColor: COLOR.psychic_ID, nameColor: COLOR.psychic_name, icon: psychicIcon };
   break;
  case "fighting":
   colorPalette = { background: COLOR.fighting_card, numberColor: COLOR.fighting_ID, nameColor: COLOR.fighting_name, icon: fightingIcon };
   break;
  case "rock":
   colorPalette = { background: COLOR.rock_card, numberColor: COLOR.rock_ID, nameColor: COLOR.rock_name, icon: rockIcon };
   break;
  case "ground":
   colorPalette = { background: COLOR.ground_card, numberColor: COLOR.ground_ID, nameColor: COLOR.ground_name, icon: groundIcon };
   break;
  case "flying":
   colorPalette = { background: COLOR.flying_card, numberColor: COLOR.flying_ID, nameColor: COLOR.flying_name, icon: flyingIcon };
   break;
  case "ghost":
   colorPalette = { background: COLOR.ghost_card, numberColor: COLOR.ghost_ID, nameColor: COLOR.ghost_name, icon: ghostIcon };
   break;
  case "ice":
   colorPalette = { background: COLOR.ice_card, numberColor: COLOR.ice_ID, nameColor: COLOR.ice_name, icon: iceIcon };
   break;
  case "dark":
   colorPalette = { background: COLOR.dark_card, numberColor: COLOR.dark_ID, nameColor: COLOR.dark_name, icon: darkIcon };
   break;
  case "dragon":
   colorPalette = { background: COLOR.dragon_card, numberColor: COLOR.dragon_ID, nameColor: COLOR.dragon_name, icon: dragonIcon };
   break;
  case "poison":
   colorPalette = { background: COLOR.poison_card, numberColor: COLOR.poison_ID, nameColor: COLOR.poison_name, icon: poisonIcon };
   break;
  case "steel":
   colorPalette = { background: COLOR.steel_card, numberColor: COLOR.steel_ID, nameColor: COLOR.steel_name, icon: steelIcon };
   break;
  default:
   colorPalette = { background: COLOR.normal_card, numberColor: COLOR.normal_ID, nameColor: COLOR.normal_name, icon: normalIcon };
   break;
 }
 return colorPalette;
};

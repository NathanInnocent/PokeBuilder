import { COLOR } from "../../Constants";
import { TYPE_ICON } from "../../Helpers/Icons";

let colorPalette = { backgroundColor: "", ID: "", name: "" };
let typeIcon = { icon: "" };

export const getColorPallate = (type) => {
 switch (type) {
  case "normal":
   colorPalette = { backgroundColor: COLOR.normal_card, numberColor: COLOR.normal_ID, nameColor: COLOR.normal_name };
   break;
  case "fire":
   colorPalette = { backgroundColor: COLOR.fire_card, numberColor: COLOR.fire_ID, nameColor: COLOR.fire_name };
   break;
  case "water":
   colorPalette = { backgroundColor: COLOR.water_card, numberColor: COLOR.water_ID, nameColor: COLOR.water_name };
   break;
  case "grass":
   colorPalette = { backgroundColor: COLOR.grass_card, numberColor: COLOR.grass_ID, nameColor: COLOR.grass_name };
   break;
  case "bug":
   colorPalette = { backgroundColor: COLOR.bug_card, numberColor: COLOR.bug_ID, nameColor: COLOR.bug_name };
   break;
  case "electric":
   colorPalette = { backgroundColor: COLOR.electric_card, numberColor: COLOR.electric_ID, nameColor: COLOR.electric_name };
   break;
  case "fairy":
   colorPalette = { backgroundColor: COLOR.fairy_card, numberColor: COLOR.fairy_ID, nameColor: COLOR.fairy_name };
   break;
  case "psychic":
   colorPalette = { backgroundColor: COLOR.psychic_card, numberColor: COLOR.psychic_ID, nameColor: COLOR.psychic_name };
   break;
  case "fighting":
   colorPalette = { backgroundColor: COLOR.fighting_card, numberColor: COLOR.fighting_ID, nameColor: COLOR.fighting_name };
   break;
  case "rock":
   colorPalette = { backgroundColor: COLOR.rock_card, numberColor: COLOR.rock_ID, nameColor: COLOR.rock_name };
   break;
  case "ground":
   colorPalette = { backgroundColor: COLOR.ground_card, numberColor: COLOR.ground_ID, nameColor: COLOR.ground_name };
   break;
  case "flying":
   colorPalette = { backgroundColor: COLOR.flying_card, numberColor: COLOR.flying_ID, nameColor: COLOR.flying_name };
   break;
  case "ghost":
   colorPalette = { backgroundColor: COLOR.ghost_card, numberColor: COLOR.ghost_ID, nameColor: COLOR.ghost_name };
   break;
  case "ice":
   colorPalette = { backgroundColor: COLOR.ice_card, numberColor: COLOR.ice_ID, nameColor: COLOR.ice_name };
   break;
  case "dark":
   colorPalette = { backgroundColor: COLOR.dark_card, numberColor: COLOR.dark_ID, nameColor: COLOR.dark_name };
   break;
  case "dragon":
   colorPalette = { backgroundColor: COLOR.dragon_card, numberColor: COLOR.dragon_ID, nameColor: COLOR.dragon_name };
   break;
  case "poison":
   colorPalette = { backgroundColor: COLOR.poison_card, numberColor: COLOR.poison_ID, nameColor: COLOR.poison_name };
   break;
  case "steel":
   colorPalette = { backgroundColor: COLOR.steel_card, numberColor: COLOR.steel_ID, nameColor: COLOR.steel_name };
   break;
  default:
   colorPalette = { backgroundColor: COLOR.normal_card, numberColor: COLOR.normal_ID, nameColor: COLOR.normal_name };
   break;
 }
 return colorPalette;
};

export const getTypeIcon = (type) => {
 switch (type) {
  case "normal":
   typeIcon = { icon: TYPE_ICON.normal };
   break;
  case "fire":
   typeIcon = { icon: TYPE_ICON.fire };
   break;
  case "water":
   typeIcon = { icon: TYPE_ICON.water };
   break;
  case "grass":
   typeIcon = { icon: TYPE_ICON.grass };
   break;
  case "bug":
   typeIcon = { icon: TYPE_ICON.bug };
   break;
  case "electric":
   typeIcon = { icon: TYPE_ICON.electric };
   break;
  case "fairy":
   typeIcon = { icon: TYPE_ICON.fairy };
   break;
  case "psychic":
   typeIcon = { icon: TYPE_ICON.psychic };
   break;
  case "fighting":
   typeIcon = { icon: TYPE_ICON.fighting };
   break;
  case "rock":
   typeIcon = { icon: TYPE_ICON.rock };
   break;
  case "ground":
   typeIcon = { icon: TYPE_ICON.ground };
   break;
  case "flying":
   typeIcon = { icon: TYPE_ICON.flying };
   break;
  case "ghost":
   typeIcon = { icon: TYPE_ICON.ghost };
   break;
  case "ice":
   typeIcon = { icon: TYPE_ICON.ice };
   break;
  case "dark":
   typeIcon = { icon: TYPE_ICON.dark };
   break;
  case "dragon":
   typeIcon = { icon: TYPE_ICON.dragon };
   break;
  case "poison":
   typeIcon = { icon: TYPE_ICON.poison };
   break;
  case "steel":
   typeIcon = { icon: TYPE_ICON.steel };
   break;
  default:
   typeIcon = { icon: TYPE_ICON.normal };
   break;
 }
 return typeIcon;
};

export const convertPokemonId = (number) => {
 // id 5 => return 005
 //id 15 => return 015
 // id 100+ => return 100
 if (number < 10) return `00${number}`;
 else if (number < 100 && number >= 10) return `0${number}`;
 else return number;
};

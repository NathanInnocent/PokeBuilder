import { GENERATION } from "../../Helpers/Icons";
let smallImage = { img: "" };

export const getGenerationImage = (generation) => {
 switch (generation) {
  case "Gen 1":
   smallImage = { img: GENERATION.one };
   break;
  case "Gen 2":
   smallImage = { img: GENERATION.two };
   break;
  case "Gen 3":
   smallImage = { img: GENERATION.three };
   break;
  case "Gen 4":
   smallImage = { img: GENERATION.four };
   break;
  case "Gen 5":
   smallImage = { img: GENERATION.five };
   break;
  case "Gen 6":
   smallImage = { img: GENERATION.six };
   break;
  case "Gen 7":
   smallImage = { img: GENERATION.seven };
   break;
  case "Gen 8":
   smallImage = { img: GENERATION.eight };
   break;

  default:
   smallImage = { img: "" };
   break;
 }
 return smallImage;
};

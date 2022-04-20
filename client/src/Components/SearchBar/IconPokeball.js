import { ICON } from "../../Helpers/Icons";
import { Icon } from "../PokemonCard/styling";

export const PokeballIcon = ({ backButtonDisplay }) => {
 // Only shown if back button display is none
 return (
  <>
   <Icon src={ICON.pokeball} style={{ border: "none", top: "0px", borderRadius: "0", width: "70px", height: "70px", display: `${backButtonDisplay === "none" ? "block" : "none"}` }} />
  </>
 );
};

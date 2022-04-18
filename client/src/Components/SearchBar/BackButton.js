import { ICON } from "../../Helpers/Icons";
import { Icon } from "../PokemonCard/styling";
import { useNavigate } from "react-router-dom";

export const BackButton = ({ displayValue, route }) => {
 let navigate = useNavigate();

 //  If someone forgets to specify value, make the button visible
 if (displayValue === undefined) displayValue = "block";

 //  If someone forgets to specify route, make it go to /pokedex
 if (route === undefined) route = "/pokedex";

 const returnToPage = () => {
  navigate(`${route}`);
 };

 return (
  <>
   <Icon onClick={returnToPage} src={ICON.backArrow} style={{ top: "0px", borderRadius: "0", cursor: "pointer", width: "60px", height: "60px", display: `${displayValue}` }} />
  </>
 );
};

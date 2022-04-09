import { ICON } from "../../Helpers/Icons";
import { Icon } from "../PokemonCard/styling";
import { useNavigate } from "react-router-dom";

export const BackButton = ({ displayValue, route }) => {
 let navigate = useNavigate();

 //  If someone forgets to specify value, make the button visible
 if (displayValue === undefined) displayValue = "block";

 //  If someone forgets to specify route, make it go to homepage
 if (route === undefined) route = "/home";

 const returnToHomepage = () => {
  navigate(`${route}`);
 };

 return (
  <>
   <Icon onClick={returnToHomepage} src={ICON.backArrow} style={{ top: "0px", borderRadius: "0", cursor: "pointer", width: "60px", height: "40px", display: `${displayValue}` }} />
  </>
 );
};

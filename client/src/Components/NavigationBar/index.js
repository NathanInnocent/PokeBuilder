import { Link } from "react-router-dom";

export const NavigationBar = () => {
 return (
  <>
   <div>
    <Link to="/">Home</Link>
    <Link to="/home">Pokedex</Link>
    <Link to="/teams">Teams</Link>
   </div>
  </>
 );
};

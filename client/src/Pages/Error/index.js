import { useEffect } from "react";
import snorlax from "../../Assets/Gifs/Snorlax_Sleeping.gif";

export const ErrorPage = () => {
 //Change body color to match pokemon type

 useEffect(() => {
  window.scrollTo(0, 0);
  document.body.style.backgroundColor = "white";
 }, []);

 return (
   <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "200px" }}>
    <h2>An error has occured, please contact support if problem persists</h2>
    <img src={snorlax} alt="snorlax sleeping" />
   </div>
 );
};

import { useState } from "react";
import { Input } from "../../Auth/Form/Components/FormStyles";
import { ICON } from "../../Helpers/Icons";

export const Search = () => {
 const [placeHolderText, setPlaceHolderText] = useState("Search");

 const hidePlaceHolderText = () => {
  setPlaceHolderText("");
 };

 const showPlaceHolderText = () => {
  setPlaceHolderText("Search");
 };

 return (
  <>
   <Input
    onBlur={showPlaceHolderText}
    onFocus={hidePlaceHolderText}
    placeholder={placeHolderText}
    style={{
     background: `url(${ICON.magnifyingGlass}) no-repeat`,
     backgroundPosition: "98% center",
     backgroundSize: "27px 27px",
     maxWidth: "80%",
     backgroundColor: "white",
     margin: "50px 0px",
    }}
   />
  </>
 );
};

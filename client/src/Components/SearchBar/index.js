import { BackButton } from "./BackButton";
import { PokeballIcon } from "./IconPokeball";
import { Search } from "./Search";

export const SearchBar = ({ displayButton, backNavigation }) => {
 return (
  <>
   <div
    style={{
     position: "relative",
     display: "flex",
     alignItems: "center",
     gap: "50px",
     paddingTop: "40px",
    }}
   >
    <PokeballIcon backButtonDisplay={displayButton} />
    <BackButton displayValue={displayButton} route={backNavigation} />
    <Search />
   </div>
  </>
 );
};

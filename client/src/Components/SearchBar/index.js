import { BackButton } from "./BackButton";
import { PokeballIcon } from "./IconPokeball";
import { Search } from "./Search";

export const SearchBar = ({ displayButton, backNavigation }) => {
 return (
  <div
   style={{
    display: "flex",
    alignItems: "center",
    gap: "50px",
   }}
  >
   <PokeballIcon backButtonDisplay={displayButton} />
   <BackButton displayValue={displayButton} route={backNavigation} />
   <Search />
  </div>
 );
};

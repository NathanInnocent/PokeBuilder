import { useContext, useEffect } from "react";
import { UserAuthenticationForm } from "./Auth/Form";
import { PokemonCard } from "./Components/PokemonCard";
import { PokemonDataContext } from "./Context/PokemonDataContext";
import { Homepage } from "./Pages";

import { SearchFilterPage } from "./Pages/MoreFilters";
import { SinglePokemonPage } from "./Pages/SinglePokemon";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FilteredPokemonPage } from "./Pages/FilteredPokemon";

function App() {
 const { shownPokemons, getAllPokemon, allPokemonData } = useContext(PokemonDataContext);

 //  On mount fetch data
 useEffect(() => {
  getAllPokemon();
 }, []);

 return (
  <>
   {/* Only show app if we have all pokemon data  */}
   {shownPokemons.length > 0 && allPokemonData.length >= 1126 && (
    <Router>
     <Routes>
      <Route path="/" element={<UserAuthenticationForm />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/pokemon/filter" element={<SearchFilterPage />} />
      <Route path="/pokemon/filter/:criteria" element={<FilteredPokemonPage />} />
      <Route path="/pokemon/:searchedPokemon" element={<SinglePokemonPage />} />
      <Route path="*" element={<div>There was an error</div>} />
     </Routes>
    </Router>
   )}
   {/* Loading animation */}
   {allPokemonData.length < 1126 && <>Loading...</>}
  </>
 );
}

export default App;

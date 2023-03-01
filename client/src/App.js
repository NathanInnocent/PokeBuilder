import { useContext, useEffect, Fragment } from "react";
import { UserAuthenticationForm } from "./Auth/Form";
import { PokemonDataContext } from "./Context/PokemonDataContext";
import { PokedexPage } from "./Pages";
import { SearchFilterPage } from "./Pages/MoreFilters";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FilteredPokemonPage } from "./Pages/FilteredPokemon";
import { SinglePokemonPage } from "./Pages/SinglePokemon";
import { NavigationBar } from "./Components/NavigationBar";
import { PostedTeamsPage } from "./Pages/PostedTeams";
import { ErrorPage } from "./Pages/Error";
import { Loading } from "./Components/LoadingPage";
import { HomePage } from "./Pages/HomePage";

function App() {
 const { shownPokemons, getAllPokemon, allPokemonData } = useContext(PokemonDataContext);

 //  On mount fetch data
 useEffect(() => {
  getAllPokemon();
 }, []);

 return (
  <Fragment>
   {/* Only show app if we have all pokemon data  */}
   {shownPokemons.length > 0 && allPokemonData.length >= 1126 && (
    <Fragment>
     <Router>
      <NavigationBar />
      <Routes>
       <Route path="/" element={<UserAuthenticationForm />} />
       <Route path="/home" element={<HomePage />} />
       <Route path="/pokedex" element={<PokedexPage />} />
       <Route path="/pokemon/filter" element={<SearchFilterPage />} />
       <Route path="/pokemon/filter/:criteria" element={<FilteredPokemonPage />} />
       <Route path="/pokemon/:searchedPokemon" element={<SinglePokemonPage />} />
       <Route path="/teams" element={<PostedTeamsPage />} />
       <Route path="*" element={<ErrorPage />} />
      </Routes>
     </Router>
    </Fragment>
   )}
   {/* Loading animation */}
   {allPokemonData.length < 1126 && <Loading />}
  </Fragment>
 );
}

export default App;

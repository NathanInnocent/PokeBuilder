import { useContext, useEffect } from "react";
import { UserAuthenticationForm } from "./Auth/Form";
import { PokemonCard } from "./Components/PokemonCard";
import { PokemonDataContext } from "./Context/PokemonDataContext";
import { Homepage } from "./Pages";

import { SearchFilterPage } from "./Pages/SearchFilter";
import { SinglePokemonPage } from "./Pages/SinglePokemon";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 const { pokemonData, getAllPokemon } = useContext(PokemonDataContext);

 console.log(pokemonData);

 //  On mount fetch data
 useEffect(() => {
  getAllPokemon();
 }, []);

 return (
  <>
   {pokemonData.length >= 20 && (
    <Router>
     <Routes>
      <Route path="/" element={<UserAuthenticationForm />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/pokemon/:searchedPokemon" element={<SinglePokemonPage />} />
      <Route path="*" element={<div>There was an error</div>} />
     </Routes>
    </Router>
   )}
  </>
  // <>
  //  {/* If fetching is still awaiting */}
  //  {pokemonData.length === 0 && <div>loading...</div>}
  //  {/* If fetching is done */}
  //  {pokemonData.length >= 20 && (
  //   <div className="App">
  //    <header className="App-header">
  //     {/* <UserAuthenticationForm /> */}
  //     {/* <PokemonCard /> */}
  //     {/* <SearchFilterPage /> */}
  //     {/* <Homepage /> */}
  //     <SinglePokemonPage />
  //    </header>
  //   </div>
  //  )}
  // </>
 );
}

export default App;

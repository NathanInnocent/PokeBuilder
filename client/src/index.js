import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CurrentTeamProvider } from "./Context/CurrentPokemonTeamContext";
import { CurrentUserProvider } from "./Context/CurrentUserContext";
import { PokemonDataProvider } from "./Context/PokemonDataContext";
import GlobalStyle from "./Helpers/GlobalStyles";

const root = createRoot(document.getElementById("root"));

root.render(
 <PokemonDataProvider>
  <CurrentUserProvider>
   <CurrentTeamProvider>
    <GlobalStyle />
    <App />
   </CurrentTeamProvider>
  </CurrentUserProvider>
 </PokemonDataProvider>
);

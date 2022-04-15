import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CurrentTeamContext } from "./Context/CurrentPokemonTeamContext";
import { PokemonDataProvider } from "./Context/PokemonDataContext";
import GlobalStyle from "./Helpers/GlobalStyles";

const root = createRoot(document.getElementById("root"));

root.render(
 <PokemonDataProvider>
  <CurrentTeamContext>
   <GlobalStyle />
   <App />
  </CurrentTeamContext>
 </PokemonDataProvider>
);

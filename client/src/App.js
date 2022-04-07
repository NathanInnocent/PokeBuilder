import { UserAuthenticationForm } from "./Auth/Form";
import { PokemonCard } from "./Components/PokemonCard";
import GlobalStyle from "./Helpers/GlobalStyles";

import { SearchFilterPage } from "./Pages/SearchFilter";

function App() {
 return (
  <>
   <GlobalStyle />
   <div className="App">
    <header className="App-header">
     <UserAuthenticationForm />
     <PokemonCard />
     <SearchFilterPage />
    </header>
   </div>
  </>
 );
}

export default App;

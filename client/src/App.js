import { UserAuthenticationForm } from "./Auth/Form";
import { PokemonCard } from "./Components/PokemonCard";
import GlobalStyle from "./Helpers/GlobalStyles";

function App() {
 return (
  <>
   <GlobalStyle />
   <div className="App">
    <header className="App-header">
     <PokemonCard />
    </header>
   </div>
  </>
 );
}

export default App;

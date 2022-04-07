import GlobalStyle from "./Helpers/GlobalStyles";
import { SearchFilterPage } from "./Pages/SearchFilter";

function App() {
 return (
  <>
   <GlobalStyle />
   <div className="App">
    <header className="App-header">
     <SearchFilterPage />
    </header>
   </div>
  </>
 );
}

export default App;

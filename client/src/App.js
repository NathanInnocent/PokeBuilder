import { UserAuthenticationForm } from "./Auth/Form";
import GlobalStyle from "./Helpers/GlobalStyles";

function App() {
 return (
  <>
   <GlobalStyle />
   <div className="App">
    <header className="App-header">
     <UserAuthenticationForm />
    </header>
   </div>
  </>
 );
}

export default App;

import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../Context/CurrentUserContext";
import { HomeNav, PokedexNav, SignInNav, SignOutNav, TeamNav, NavigationContainer, NavigationDivContainer } from "./navigationStyles";

export const NavigationBar = () => {
 const location = useLocation();
 const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
 const [locationPath, setLocationPath] = useState(null);

 useEffect(() => {
  setLocationPath(location.pathname);
 }, [location.pathname]);

 return (
  <>
   {/* Hide navbar on sign in page */}
   {location.pathname !== "/" && (
    <NavigationContainer>
     {/* Home button */}
     <HomeNav to="/home" active={locationPath === "/home" ? "true" : null}>
      Home
     </HomeNav>

     {/* Pokedex button */}
     <PokedexNav to="/pokedex" active={locationPath === "/pokedex" ? "true" : null}>
      Pokedex
     </PokedexNav>

     {/* Team button */}
     <TeamNav to="/teams" active={locationPath === "/teams" ? "true" : null}>
      Community Teams
     </TeamNav>

     {/* Sign in */}
     {currentUser === null && <SignInNav to="/">Sign In</SignInNav>}

     {/* Log Out */}
     {currentUser && <SignOutNav onClick={() => setCurrentUser(null)}> Sign out</SignOutNav>}
    </NavigationContainer>
   )}
  </>
 );
};

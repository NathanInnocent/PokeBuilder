import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../../Context/CurrentUserContext";
import { HomePng, PokedexPng, SignInPng, SignOutPng, TeamsPng } from "./navigationStyles";

export const NavigationBar = () => {
 const location = useLocation();
 const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

 return (
  <>
   {/* Hide navbar on sign in page */}
   {location.pathname !== "/" && (
    <Container>
     {/* Home Page */}
     <LinkContainer to="/home" className={({ isActive }) => (isActive ? "active" : "inactive")}>
      <HomePng />
      Home
     </LinkContainer>
     {/* Pokedex Page */}
     <LinkContainer to="/pokedex">
      <PokedexPng />
      Pokedex
     </LinkContainer>
     {/* Teams page */}
     <LinkContainer to="/teams">
      <TeamsPng />
      Teams
     </LinkContainer>

     {/* Sign in */}
     {!currentUser && (
      <LinkContainer to="/">
       <SignInPng />
       Sign in
      </LinkContainer>
     )}

     {/* Log Out */}
     {currentUser && (
      <DivContainer>
       <SignOutPng onClick={() => setCurrentUser(null)} />
       Sign out
      </DivContainer>
     )}
    </Container>
   )}
  </>
 );
};

const Container = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 align-items: center;
 color: black;
 font-size: 1.5em;
 font-weight: bold;
 padding: 10px;
 border-radius: 25px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
 background: gray;
 margin: 30px 30px;
`;

const LinkContainer = styled(NavLink)`
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 text-decoration: none;
 color: black;
 font-size: 1.5em;
 transition: all 0.2s ease-in-out;

 &:hover {
  background: #8a8a8a;
  color: red;
 }

 &.active {
  background: #8a8a8a;
  color: red;
 }
`;

const DivContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 color: black;
 font-size: 1.5em;
 transition: all 0.2s ease-in-out;
 cursor: pointer;

 &:hover {
  background: #8a8a8a;
  color: red;
 }
`;

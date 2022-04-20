import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NAVBAR } from "../../Helpers/Icons";

export const HomeNav = styled(NavLink)`
 display: flex;
 justify-content: center;
 align-items: center;
 display: relative;
 text-decoration: none;
 color: ${(props) => (props.active ? "hsl(217, 53%, 48%)" : "black")};
 font-size: 1.5em;
 transition: all 0.2s ease-in-out;
 pointer-events: all;

 ::before {
  content: "";
  display: inline-block;
  position: relative;
  top: 0px;
  left: -5px;
  width: 80px;
  height: 80px;
  background-image: url(${(props) => (props.active ? NAVBAR.activeHome : NAVBAR.inactiveHome)});
  background-size: 100%;
  background-repeat: no-repeat;
  object-fit: contain;
  z-index: 5;
  transition: all 0.2s ease-in-out;
 }

 &:hover,
 &:focus {
  outline: none;
  background: #8a8a8a;
  color: hsl(217, 53%, 48%);

  ::before {
   background-image: url("${NAVBAR.activeHome}");
  }
 }
`;

export const SignInNav = styled(NavLink)`
 display: flex;
 justify-content: center;
 align-items: center;
 display: relative;
 text-decoration: none;
 color: ${(props) => (props.active ? "hsl(217, 53%, 48%)" : "black")};
 font-size: 1.5em;
 transition: all 0.2s ease-in-out;
 pointer-events: all;

 ::before {
  content: "";
  display: inline-block;
  position: relative;
  top: 0px;
  left: -5px;
  width: 80px;
  height: 80px;
  background-image: url(${(props) => (props.active ? NAVBAR.activeSignIn : NAVBAR.inactiveSignIn)});
  background-size: 100%;
  background-repeat: no-repeat;
  object-fit: contain;
  transition: all 0.2s ease-in-out;
 }

 &:hover,
 &:focus {
  outline: none;
  background: #8a8a8a;
  color: hsl(217, 53%, 48%);

  ::before {
   background-image: url("${NAVBAR.activeSignIn}");
  }
 }
`;

export const TeamNav = styled(NavLink)`
 display: flex;
 justify-content: center;
 align-items: center;
 display: relative;
 text-decoration: none;
 color: ${(props) => (props.active ? "red" : "black")};
 font-size: 1.5em;
 transition: all 0.2s ease-in-out;
 pointer-events: all;

 ::before {
  content: "";
  display: inline-block;
  position: relative;
  top: 0px;
  left: -5px;
  width: 80px;
  height: 80px;
  background-image: url(${(props) => (props.active ? NAVBAR.activeTeam : NAVBAR.inactiveTeam)});
  background-size: 100%;
  background-repeat: no-repeat;
  object-fit: contain;
  transition: all 0.2s ease-in-out;
 }

 &:hover,
 &:focus {
  outline: none;
  background: #8a8a8a;
  color: red;

  ::before {
   background-image: url("${NAVBAR.activeTeam}");
  }
 }
`;

export const PokedexNav = styled(NavLink)`
 display: flex;
 justify-content: center;
 align-items: center;
 display: relative;
 text-decoration: none;
 color: ${(props) => (props.active ? "hsl(46, 90%, 65%)" : "black")};
 font-size: 1.5em;
 transition: all 0.2s ease-in-out;
 pointer-events: all;

 ::before {
  content: "";
  display: inline-block;
  position: relative;
  top: 0px;
  left: -5px;
  width: 80px;
  height: 80px;
  background-image: url(${(props) => (props.active ? NAVBAR.activePokedex : NAVBAR.inactivePokedex)});
  background-size: 100%;
  background-repeat: no-repeat;
  object-fit: contain;
  transition: all 0.2s ease-in-out;
 }

 &:hover,
 &:focus {
  outline: none;
  background: #8a8a8a;
  color: hsl(46, 90%, 65%);

  ::before {
   background-image: url("${NAVBAR.activePokedex}");
  }
 }
`;

export const SignOutNav = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 display: relative;
 text-decoration: none;
 color: ${(props) => (props.active ? "red" : "black")};
 font-size: 1.5em;
 transition: all 0.2s ease-in-out;
 cursor: pointer;

 ::before {
  content: "";
  display: inline-block;
  position: relative;
  top: 0px;
  left: -5px;
  width: 80px;
  height: 80px;
  background-image: url(${(props) => (props.active ? NAVBAR.activeLogout : NAVBAR.inactiveLogout)});
  background-size: 100%;
  background-repeat: no-repeat;
  object-fit: contain;
  transition: all 0.2s ease-in-out;
 }

 &:hover,
 &:focus {
  outline: none;
  background: #8a8a8a;
  color: red;

  ::before {
   background-image: url("${NAVBAR.activeLogout}");
  }
 }
`;

export const NavigationContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 align-items: center;
 position: relative;
 color: black;
 font-size: 1.5em;
 font-weight: bold;
 padding: 10px;
 border-radius: 25px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
 background: gray;
 margin: 30px 30px;
 transition: all 0.2s ease-in-out;
`;

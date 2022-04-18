import styled from "styled-components";
import { NAVBAR } from "../../Helpers/Icons";

export const HomePng = styled.div`
 background-image: url("${NAVBAR.inactiveHome}");
 background-size: 100%;
 background-repeat: no-repeat;
 object-fit: contain;
 width: 80px;
 height: 80px;
 transition: all 0.2s ease-in-out;

 &:hover {
  background-image: url("${NAVBAR.activeHome}");
 }
`;

export const SignInPng = styled.div`
 background-image: url("${NAVBAR.inactiveSignIn}");
 background-size: 100%;
 background-repeat: no-repeat;
 border: none;
 object-fit: contain;
 width: 80px;
 height: 80px;
 transition: all 0.2s ease-in-out;
 border: 0;
 border: none;
 outline: none;

 &:hover {
  background-image: url("${NAVBAR.activeSignIn}");
 }
`;

export const TeamsPng = styled.div`
 background-image: url("${NAVBAR.inactiveTeam}");
 background-size: 100%;
 background-repeat: no-repeat;
 object-fit: contain;
 width: 80px;
 height: 80px;
 transition: all 0.2s ease-in-out;

 &:hover {
  background-image: url("${NAVBAR.activeTeam}");
 }
`;
export const PokedexPng = styled.div`
 background-image: url("${NAVBAR.inactivePokedex}");
 background-size: 100%;
 background-repeat: no-repeat;
 object-fit: contain;
 width: 80px;
 height: 80px;
 transition: all 0.2s ease-in-out;

 &:hover {
  background-image: url("${NAVBAR.activePokedex}");
 }
`;

export const SignOutPng = styled.div`
 background-image: url("${NAVBAR.inactiveLogout}");
 background-size: 100%;
 background-repeat: no-repeat;
 object-fit: contain;
 width: 80px;
 height: 80px;
 transition: all 0.2s ease-in-out;

 &:hover {
  background-image: url("${NAVBAR.activeLogout}");
 }
`;

import styled from "styled-components";
import { pokeballOutline } from "../../Helpers/Icons";

export const Page = styled.div`
 position: relative;
`;

export const PokemonName = styled.h2`
 display: block;
 font-weight: bold;
 font-size: 2.5em;
`;

export const PokemonId = styled.div`
 position: relative;
 height: 170px;
 top: -76px;
 left: 0;
 font-weight: bold;
 font-size: 13em;
`;

export const Section = styled.section`
 z-index: 0;
`;

export const TypeLabel = styled.div`
 width: 80px;
 border-radius: 25px;
 text-transform: uppercase;
 text-align: center;
 color: white;
`;

export const FlexHorizontalContainer = styled.div`
 margin: 40px 0;
 display: flex;
 justify-content: center;
 gap: 10px;
`;

export const FlexVerticalContainer = styled.div`
 display: flex;
 flex-direction: column;
 margin: 40px 0;
`;

export const SectionHorisontalFlex = styled.section`
 display: flex;
 flex-direction: column;
`;

export const Content = styled.div`
 max-width: 1000px;
 margin: auto;
`;

export const ButtonTeam = styled.button`
 position: relative;
 cursor: pointer;
 margin: auto;
`;

export const StatValue = styled.p`
 display: block;
 font-weight: bold;
 font-size: 1.5em;
 color: black;
`;

export const StatLabel = styled.p`
 display: block;
 font-size: 1.5em;
 color: gray;
 text-transform: capitalize;
`;

export const Container = styled.div`
 flex: 1;
`;

export const PokemonImage = styled.img`
 position: relative;
 width: 350px;
 height: 315px;
 top: 30px;
 z-index: 10;
`;

export const ImageContainerDiv = styled.div`
 position: relative;
 width: 300px;
 height: 315px;
 margin: none;

 &::before {
  content: "";
  position: absolute;
  opacity: 0.8;
  background-image: url("${pokeballOutline}");
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -11;
 }
`;

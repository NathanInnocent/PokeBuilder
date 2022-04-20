import { useEffect } from "react";
import styled from "styled-components";
import { UTILS } from "../../Helpers/Icons";
import { Content } from "../SinglePokemon/styling";
import multiplePokemon from "../../Assets/Images/Background/MultiplePokemons.jpg";
import underwaterCity from "../../Assets/Images/Background/UnderWaterCity.jpg";
import city from "../../Assets/Images/Background/City.jpg";
import welcome from "../../Assets/Images/Utils/Welcome.png";
import { PokemonTeam } from "../../Components/PokemonTeam";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
 useEffect(() => {
  window.scrollTo(0, 0);
  // document.body.style.background = `hsl(120deg, 10%, 50%)`;
 }, []);

 return (
  <>
   <Page>
    <Welcome />
    <Content>
     <section style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <PokemonTeam pokemon={["", "", "", "", "", ""]} />
      <GetStartedButton to="/pokedex">Get started</GetStartedButton>
     </section>
    </Content>
   </Page>
  </>
 );
};

const Page = styled.div`
 position: relative;
 width: 100%;
 height: 100%;
`;

const Welcome = styled.div`
 position: relative;
 width: 200px;
 height: 200px;
 margin: auto;
 pointer-events: none;
 background-image: url(${welcome});
 background-position: center;
 background-repeat: no-repeat;
 background-size: contain;
 transform: scale(5);
`;

const GetStartedButton = styled(NavLink)`
 text-decoration: none;
 color: white;
 font-size: 1.5em;
 transition: all 0.2s ease-in-out;
 pointer-events: all;
 margin: auto;
 margin-top: 10px;
 width: 20%;
 text-align: center;
 background: #8a8a8a;
 border-radius: 25px;
 padding: 10px;
 border: none;
 cursor: pointer;
 outline: none;

 &:hover,
 &:focus {
  outline: none;
  background: hsl(217deg, 53%, 48%);
 }
`;

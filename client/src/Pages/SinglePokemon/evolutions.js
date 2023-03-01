import { useContext } from "react";
import styled from "styled-components";
import { SmallPokemonIcon } from "../../Components/PokemonTeam/Card/pickedPokemon";
import { PokemonDataContext } from "../../Context/PokemonDataContext";
import { CurrentPokemonContext } from "./context";
import { Fragment } from "react";

export const Evolutions = () => {
 const { allPokemonData } = useContext(PokemonDataContext);
 const { evolutionChainDetail } = useContext(CurrentPokemonContext);

 return (
  <Fragment>
   {/* Make sure that the evolution chain is not 1 => would mean that there is only 1 form of the pokemon */}
   {Array.isArray(evolutionChainDetail) && evolutionChainDetail.length > 1 && (
    <div>
     <div>Evolution Chain</div>
     <RoundContainer style={{ display: "flex", justifyContent: "space-evenly" }}>
      {evolutionChainDetail.map((possibleEvolution) => {
       let currentPokemon = possibleEvolution.name;
       let contextData = allPokemonData.filter((data) => data.name === currentPokemon)[0];
       return <SmallPokemonIcon key={currentPokemon} pokemon={contextData} style={{ flex: "1" }} />;
      })}
     </RoundContainer>
    </div>
   )}
  </Fragment>
 );
};

const RoundContainer = styled.div`
 text-transform: capitalize;
 text-align: left;
 border-radius: 25px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
 background: gray;
 padding: 2% 3%;
 margin: auto;
 transition: all 1s ease-in-out;
 z-index: 5;
`;

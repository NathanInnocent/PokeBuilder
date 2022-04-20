import { useContext } from "react";
import { CurrentPokemonContext } from "./context";
import { Container, FlexHorizontalContainer, StatLabel, StatValue } from "./styling";

export const Physique = () => {
 const { currentPokemon, speciesDetails } = useContext(CurrentPokemonContext);

 //	The weight of this Pokémon in hectograms. 1 hectogram => 0.220462 lbs
 const weight = (currentPokemon.weight / 4.536).toFixed(2);
 // The height of this Pokémon in decimetres. 1 decimeter => 0.1m
 const height = (currentPokemon.height / 10).toFixed(2);

 const { species } = speciesDetails;

 return (
  <FlexHorizontalContainer style={{ textAlign: "center" }}>
   {/* Species */}
   <Container style={{ borderRight: "1px solid gray" }}>
    <StatValue>{species}</StatValue>
   </Container>

   {/* Weight */}
   <Container style={{ borderRight: "1px solid gray" }}>
    <StatValue>{weight} lbs.</StatValue>
    <StatLabel>Weight</StatLabel>
   </Container>

   {/* Height */}
   <Container>
    <StatValue>{height} m</StatValue>
    <StatLabel>Height</StatLabel>
   </Container>
  </FlexHorizontalContainer>
 );
};

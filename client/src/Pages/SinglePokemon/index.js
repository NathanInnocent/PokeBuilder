import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { convertPokemonId, getColorPallate } from "../../Components/PokemonCard/typeLogic";
import { PokemonDataContext } from "../../Context/PokemonDataContext";
import { pokeballOutline } from "../../Helpers/Icons";
import { useFetch } from "../../Hooks/useFetch";

export const SinglePokemonPage = () => {
 const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
 };
 const { pokemonData } = useContext(PokemonDataContext);
 const currentlyViewedPokemon = pokemonData.filter((pokemonDataInsideContext) => pokemonDataInsideContext.name === "pidgeotto")[0];

 //  Destructuring Information
 const { abilities, forms, height, id, name, sprites, stats, types, weight } = currentlyViewedPokemon;
 const primaryType = types[0].type.name;
 const { backgroundColor, numberColor, nameColor } = getColorPallate(primaryType);
 const displayedPokemonId = convertPokemonId(id);
 const capitalizedPokemonName = capitalizeFirstLetter(name);

 //Image has to be dynamic
 const image = sprites.other[`official-artwork`][`front_default`];

 const [pokemonAdditionInformation, setpokemonAdditionInformation] = useState(null);
 //  pokemonAdditionInformation.hasOwnProperty("genera") => BOOL

 //{species:"", description: ""}
 const [pokemonDescription, setPokemonDescription] = useState(null);

 //  Fetch current pokemon description
 useFetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`, setpokemonAdditionInformation);

 // Set pokemon english description
 useEffect(() => {
  if (pokemonAdditionInformation === null) return;
  else {
   let species = pokemonAdditionInformation.genera.filter((object) => object.language.name === "en")[0].genus;
   //  Gives a version for each game || remove the [0] after optimizing generation
   let description = pokemonAdditionInformation.flavor_text_entries.filter((object) => object.language.name === "en")[0].flavor_text;
   let tempState = { species, description };
   setPokemonDescription(tempState);
  }
 }, [pokemonAdditionInformation]);

 return (
  <Page>
   {/* Pokemon Name && IdNumber && Image && Team Button*/}
   <Section style={{ backgroundColor: `${backgroundColor}` }}>
    <Content>
     <PokemonName style={{ color: `${nameColor}`, textAlign: "center" }}>{capitalizedPokemonName}</PokemonName>
     <PokemonId style={{ textAlign: "center", color: `${nameColor}` }}>{displayedPokemonId}</PokemonId>
     {/* Add to team button */}
     <ButtonTeam>Add to team</ButtonTeam>
     {/* image section */}
     <ImageContainerDiv style={{ zIndex: "1", margin: "auto" }}>
      <PokemonImage src={image} alt={`${name} png`} />
     </ImageContainerDiv>
    </Content>
   </Section>

   {/* Only shows when fetching is done */}
   {/* Pokemon Type || Stats || Evolution Chain */}
   {pokemonDescription !== null && (
    <Section style={{ padding: "5px 20px 5px 20px", backgroundColor: "white", borderRadius: "25px 25px 0 0", position: "relative", top: "-16px" }}>
     <Content>
      {/* Type Tags*/}
      <FlexHorizontalContainer>
       {types.map((availableType, index) => {
        // Get color schema for each available type
        const { numberColor } = getColorPallate(availableType.type.name);

        return (
         <TypeLabel key={index} style={{ backgroundColor: `${numberColor}` }}>
          {availableType.type.name}
         </TypeLabel>
        );
       })}
      </FlexHorizontalContainer>

      {/* Species | Weight | Height  */}
      <FlexHorizontalContainer style={{ textAlign: "center" }}>
       {/* Species */}
       <Container style={{ borderRight: "1px solid gray" }}>
        <StatValue>{pokemonDescription.species}</StatValue>
       </Container>

       {/* Weight */}
       <Container style={{ borderRight: "1px solid gray" }}>
        <StatValue>{weight} lbs.</StatValue>
        <StatLabel>Weight</StatLabel>
       </Container>

       {/* Height */}
       <Container>
        <StatValue>{height}'</StatValue>
        <StatLabel>Height</StatLabel>
       </Container>
      </FlexHorizontalContainer>

      {/* Pokemon description */}
      <div style={{ whiteSpace: "normal" }}>{pokemonDescription.description}</div>

      {/* Evolution Chain */}
      <div>
       <div>Evolves from</div>
      </div>
     </Content>
    </Section>
   )}
  </Page>
 );
};

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

export const SectionHorisontalFlex = styled.section`
 display: flex;
 flex-direction: column;
`;

export const Content = styled.div`
 max-width: 1000px;
 margin: auto;
`;

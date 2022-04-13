import { useContext } from "react";
import { SearchBar } from "../../Components/SearchBar";
import { CurrentPokemonTeamContext } from "../../Context/CurrentPokemonTeamContext";
import { Section, Content, PokemonName, PokemonId, ButtonTeam, ImageContainerDiv, PokemonImage } from "./styling";

export const SectionOne = ({ backgroundColor, nameColor, capitalizedPokemonName, numberColor, displayedPokemonId, image, name, pokemon }) => {
 const { addPokemonToTeam, removePokemonFromTeam } = useContext(CurrentPokemonTeamContext);

 return (
  <>
   <Section style={{ backgroundColor: `${backgroundColor}` }}>
    <Content>
     <SearchBar backNavigation="/home" />
     <PokemonName style={{ color: `${nameColor}`, textAlign: "center" }}>{capitalizedPokemonName}</PokemonName>
     <PokemonId style={{ textAlign: "center", color: `${numberColor}` }}>{displayedPokemonId}</PokemonId>
     {/* Add to team button */}
     <ButtonTeam onClick={() => addPokemonToTeam(pokemon)}>Add to team</ButtonTeam>
     <ButtonTeam onClick={() => removePokemonFromTeam(pokemon)}>Remove from team</ButtonTeam>
     {/* image section */}
     <ImageContainerDiv style={{ zIndex: "1", margin: "auto" }}>
      <PokemonImage src={image} alt={`${name} png`} />
     </ImageContainerDiv>
    </Content>
   </Section>
  </>
 );
};

import { useContext } from "react";
import { getColorPallate } from "../../../Components/PokemonCard/typeLogic";
import { PokemonTeam } from "../../../Components/PokemonTeam";
import { SearchBar } from "../../../Components/SearchBar";
import { CurrentPokemonContext } from "../context";
import { Section, Content } from "../styling";
import { ImageUI } from "./ImageUI";

export const TopHalfOfPage = () => {
 const {
  currentPokemon: { name, types },
 } = useContext(CurrentPokemonContext);

 const { backgroundColor } = getColorPallate(types[0].type.name);

 return (
  <>
   <Section style={{ backgroundColor: `${backgroundColor}` }}>
    <Content>
     <SearchBar backNavigation="/home" />
     <PokemonTeam />
     {/* Pokemon Name || ID number || Button && Images */}
     <ImageUI />
    </Content>
   </Section>
  </>
 );
};

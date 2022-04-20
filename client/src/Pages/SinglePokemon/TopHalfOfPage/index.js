import { useContext, useEffect } from "react";
import { getColorPallate } from "../../../Components/PokemonCard/typeLogic";
import { PokemonTeam } from "../../../Components/PokemonTeam";
import { PostTeamForm } from "../../../Components/PokemonTeam/PostTeamForm";
import { SearchBar } from "../../../Components/SearchBar";
import { CurrentPokemonTeamContext } from "../../../Context/CurrentPokemonTeamContext";
import { CurrentPokemonContext } from "../context";
import { Section, Content } from "../styling";
import { ImageUI } from "./ImageUI";

export const TopHalfOfPage = () => {
 const {
  currentPokemon: { types },
 } = useContext(CurrentPokemonContext);
 const { currentPokemonTeam } = useContext(CurrentPokemonTeamContext);
 const { currentPokemon } = useContext(CurrentPokemonContext);

 const { backgroundColor } = getColorPallate(types[0].type.name);

 //Change body color to match pokemon type
 useEffect(() => {
  document.body.style.backgroundColor = backgroundColor;
 }, [currentPokemon]);

 //Snap to top of page
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (
  <>
   <Section style={{ backgroundColor: `${backgroundColor}` }}>
    <Content>
     <SearchBar backNavigation="/pokedex" />
     <PokemonTeam pokemon={currentPokemonTeam} />
     <PostTeamForm />
     {/* Pokemon Name || ID number || Button && Images */}
     <ImageUI />
    </Content>
   </Section>
  </>
 );
};

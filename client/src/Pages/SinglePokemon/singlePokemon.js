import { useContext, useEffect } from "react";
import { PokemonDataContext } from "../../Context/PokemonDataContext";
import { useParams } from "react-router-dom";
import { Page, Section, Content } from "./styling";
import { Abilities } from "./abilities";
import { Type } from "./type";
import { Physique } from "./physique";
import { Evolutions } from "./evolutions";
import { Stats } from "./stats";
import { CurrentPokemonContext } from "./context";
import { TopHalfOfPage } from "./TopHalfOfPage";
import { TypeRelationStats } from "./typeRelations";

export const SinglePokemon = () => {
 let { searchedPokemon } = useParams();
 const { allPokemonData } = useContext(PokemonDataContext);

 const { statsDetail, setStatsDetail, speciesDetails, setSpeciesDetail, setEvolutionChainDetail, currentPokemon, setCurrentPokemon, setAbilityEffect, setTypeRelations, typeRelations } =
  useContext(CurrentPokemonContext);

 //======================== Fetches ========================//
 //================ Gain Pokemon Species ================//
 //  Get Species, description, catch rate, gender ratio
 const fetchPokemonData = async (name) => {
  const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${name}`;

  const response = await fetch(pokemonSpeciesUrl);
  const data = await response.json();
  let species = data.genera.filter((object) => object.language.name === "en")[0].genus;
  let description = data.flavor_text_entries.filter((object) => object.language.name === "en")[0].flavor_text;

  let femaleRate = data.gender_rate;
  let genderFemaleRatio = 12.5 * femaleRate;
  let genderMaleRatio = 12.5 * (8 - femaleRate);

  //number
  let captureRate = Math.round((100 / 255) * data.capture_rate);
  let tempState = { species, description, genderFemaleRatio, genderMaleRatio, captureRate };
  setSpeciesDetail(tempState);

  fetchEvolutionChain(data.evolution_chain.url);
 };

 //================ Gain Pokemon Evolution chain ================//
 // Get all posible evolutions
 const fetchEvolutionChain = async (url) => {
  // Url is given by the fetchSpeciesData
  const response = await fetch(url);
  const data = await response.json();

  const basePokemon = data.chain;
  const evolutions = new Map(); //to fill with all evolutions of base in correct order: ;
  evolutions.set(basePokemon.species.name, basePokemon); //
  let currPokemon = basePokemon; //Ex. Bulbusaur

  while (currPokemon.evolves_to.length) {
   //Save evolution of current Pokemen
   let evolution = currPokemon.evolves_to[0]; // Bulbusaur > Ivysaur > Venusaur
   //Add evolution to array
   evolutions.set(evolution.species.name, evolution); //
   //Set new current pokement
   currPokemon = evolution;
  }
  //Convert map into array and setting state
  setEvolutionChainDetail(Array.from(evolutions, ([name, value]) => ({ name, value })));
 };

 //================ Gain Pokemon Abilities ================//
 const fetchAbility = async (receivedAbilityObj) => {
  let { is_hidden, ability } = receivedAbilityObj;

  const url = ability.url;
  const name = ability.name;
  const response = await fetch(url);
  const data = await response.json();
  let englishData = data.effect_entries.filter((data) => data.language.name === "en")[0];
  let abilityObject = { name, effect: englishData.short_effect, is_hidden };
  setAbilityEffect((prevState) => [...prevState, abilityObject]);
  return;
 };

 const fetchTypeRelations = async (type) => {
  const url = `https://pokeapi.co/api/v2/type/${type}`;
  const response = await fetch(url);
  const data = await response.json();
  setTypeRelations((prevState) => [...prevState, data]);
  return;
 };

 //================ USE EFFECTS ================//
 // Change pokemon whenever search pokemon changes
 useEffect(() => {
  setCurrentPokemon(allPokemonData.filter((pokemonDataInsideContext) => pokemonDataInsideContext.name === searchedPokemon)[0]);
 }, [searchedPokemon]);

 // FETCH POKEMON STATS || whenever we have a new current pokemon
 useEffect(() => {
  if (currentPokemon != null) {
   fetchPokemonData(currentPokemon.name);

   let tempStatsState = { ...statsDetail };

   currentPokemon.stats.map((singleStat) => {
    switch (singleStat.stat.name) {
     case "hp":
      tempStatsState.hp = singleStat["base_stat"];
      break;
     case "attack":
      tempStatsState.attack = singleStat["base_stat"];
      break;
     case "defense":
      tempStatsState.defense = singleStat["base_stat"];
      break;
     case "speed":
      tempStatsState.speed = singleStat["base_stat"];
      break;
     case "special-attack":
      tempStatsState.specialAttack = singleStat["base_stat"];
      break;
     case "special-defense":
      tempStatsState.specialDefense = singleStat["base_stat"];
      break;
     default:
      break;
    }
    return setStatsDetail(tempStatsState);
   });
   //Resets ability effect
   setAbilityEffect([]);
   currentPokemon.abilities.forEach((element) => {
    //  push to abilities array => state
    fetchAbility(element);
   });
   //Resets type relations
   setTypeRelations([]);

   currentPokemon.types.forEach((element) => {
    //  push to abilities array => state
    fetchTypeRelations(element.type.name);
   });
  }
 }, [currentPokemon]);

 return (
  <>
   {currentPokemon == null && <div>Fetching data...</div>}
   {currentPokemon != null && (
    <Page>
     {/* Pokemon Name && IdNumber && Image && Button to add pokemon on team && SearchBar*/}
     <TopHalfOfPage />

     {/* Pokemon Type || Stats || Evolution Chain */}
     {speciesDetails !== null && (
      <Section style={{ padding: "5px 20px 5px 20px", backgroundColor: "white", borderRadius: "25px 25px 0 0", position: "relative", top: "-16px" }}>
       <Content>
        {/* Component Type || shows pokemons types*/}
        <Type />

        {/*Component showing Species | Weight | Height */}
        <Physique />

        {/* Pokemon description */}
        <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>{speciesDetails.description}</div>

        {/* Component showing abilities */}
        <Abilities />

        {/* Type relation */}
        <TypeRelationStats />

        {/* If there is data */}
        <Stats />

        {/* Evolution Chain */}
        <Evolutions />
       </Content>
      </Section>
     )}
    </Page>
   )}
  </>
 );
};

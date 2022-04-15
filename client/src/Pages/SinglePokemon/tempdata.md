import { useContext, useEffect, useState } from "react";
import { convertPokemonId, getColorPallate } from "../../Components/PokemonCard/typeLogic";
import { PokemonDataContext } from "../../Context/PokemonDataContext";
import { useParams } from "react-router-dom";
import { Page, Section, Content } from "./styling";
import { SectionOne } from "./sectionOne";
import { Abilities } from "./abilities";
import { Type } from "./type";
import { Physique } from "./physique";
import { Evolutions } from "./evolutions";
import { Stats } from "./stats";

export const SinglePokemonPage = () => {
 let { searchedPokemon } = useParams();
 const { allPokemonData } = useContext(PokemonDataContext);

 //==================== States ====================//

 //Contains information about pokemon evolution
 const [evolutionChainDetail, setEvolutionChainDetail] = useState(null);
 console.log("Evolution", evolutionChainDetail);

 //Contains information about pokemon species {species:"", description: ""} && more
 const [speciesDetails, setSpeciesDetail] = useState(null);

 //================ Pokemon Stats ================//
 const [statsDetail, setStatsDetail] = useState({ hp: "", attack: "", defense: "", speed: "", specialAttack: "", specialDefense: "" });
 const [currentPokemon, setCurrentPokemon] = useState(null);
 const [primaryType, setPrimaryType] = useState(null);
 const [colorPallate, setColorPallate] = useState(null);
 const [pokemonImage, setPokemonImage] = useState(null);
 const [pokemonBAJKBDKA, setPokemonBAJKBDKA] = useState(null);

 useEffect(() => {
  setCurrentPokemon(allPokemonData.filter((pokemonDataInsideContext) => pokemonDataInsideContext.name === searchedPokemon)[0]);
 }, [searchedPokemon]);

 //  ======================= Fetch data on mount ======================
 useEffect(() => {
  //==================== Constants from current pokemon ====================//
  let { id, name, sprites, stats, types } = currentPokemon;

  let primaryType = types[0].type.name;
  setPrimaryType(primaryType);
  let pallate = getColorPallate(primaryType);
  let { backgroundColor, nameColor, numberColor } = pallate;
  setColorPallate({ backgroundColor, nameColor, numberColor });

  let displayedPokemonId = convertPokemonId(id);
  let capitalizedPokemonName = capitalizeFirstLetter(name);

  let image = sprites.other[`official-artwork`][`front_default`];
  setPokemonImage(image);

  //================ Gain Pokemon Stats ================//
  let tempStatsState = statsDetail;

  stats.forEach((singleStat) => {
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
  //================ Pokemon Fetching ================//
  const fetchPokemonData = async () => {
   const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${name}`;

   //================ Gain Pokemon Species ================//
   //  Get Species, description, catch rate, gender ratio
   const fetchSpeciesData = async () => {
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
   const fetchAbility = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    let en_Description = data.effect_entries.filter((data) => data.language.name === "en")[0];
   };
   currentPokemon.abilities.forEach((element) => {
    fetchAbility(element.ability.url);
   });

   //Start the chain of fetching all data
   await fetchSpeciesData();
   // fetchAbilityEffect()
  };

  fetchPokemonData();
 }, [currentPokemon]);

 const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
 };

 //============  RENDER =============//
 return (
  <>
   {currentPokemon === null && <div>Fetching data...</div>}
   {currentPokemon !== null && (
    <Page>
     <div>THE HP VALUE IS {statsDetail.hp}</div>
     {/* Pokemon Name && IdNumber && Image && Button to add pokemon on team && SearchBar*/}
     <SectionOne
      backgroundColor={colorPallate.backgroundColor}
      nameColor={colorPallate.nameColor}
      displayedPokemonId={convertPokemonId(currentPokemon.id)}
      numberColor={colorPallate.numberColor}
      image={pokemonImage}
      capitalizedPokemonName={currentPokemon.name}
      name={currentPokemon.name}
      pokemon={currentPokemon}
     />

     {/* Only shows when fetching is done */}
     {/* Pokemon Type || Stats || Evolution Chain */}
     {speciesDetails !== null && (
      <Section style={{ padding: "5px 20px 5px 20px", backgroundColor: "white", borderRadius: "25px 25px 0 0", position: "relative", top: "-16px" }}>
       <Content>
        {/* Component Type || shows pokemons types*/}
        <Type data={currentPokemon.types} />

        {/*Component showing Species | Weight | Height */}
        <Physique weight={(currentPokemon.weight / 4.536).toFixed(2)} height={(currentPokemon.height / 10).toFixed(2)} species={speciesDetails.species} />

        {/* Pokemon description */}
        <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>{speciesDetails.description}</div>

        {/* Component showing abilities */}
        <Abilities data={currentPokemon.abilities} />

        {/* Evolution Chain */}
        {/* If there is data */}

        <Stats stats={statsDetail} type={primaryType} />

        <Evolutions data={evolutionChainDetail} />
       </Content>
      </Section>
     )}
    </Page>
   )}
  </>
 );
};

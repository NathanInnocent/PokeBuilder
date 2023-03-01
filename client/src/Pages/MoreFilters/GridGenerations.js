import { Button, Text } from "./styling";
import { Icon } from "../../Components/PokemonCard/styling";
import { useContext, useState, Fragment } from "react";
import { getGenerationImage } from "./GenerationPictureLogic";
import { getColorPallate } from "../../Components/PokemonCard/typeLogic";
import { PokemonDataContext } from "../../Context/PokemonDataContext";
import { useNavigate } from "react-router-dom";

export const GridGenerations = ({ columns, handleSearch }) => {
 const [pokemonGenerationList, setPokemonGenerationList] = useState(["Gen 1", "Gen 2", "Gen 3", "Gen 4", "Gen 5", "Gen 6", "Gen 7", "Gen 8"]);
 //  Optimized way of doing it
 //  const pokemonTypeList = [];
 //  const numberOfGenerations = 8;
 //  const tempState = [...pokemonGenerationList];
 //  for (let i = 0; i <= numberOfGenerations; i++) {
 //   tempState.push(`Gen ${i}`);
 //  }

 let navigate = useNavigate();

 const { setShownPokemons, setViewedGeneration } = useContext(PokemonDataContext);

 const changeGenerations = async (generationId) => {
  setShownPokemons([]);
  const initUrl = `https://pokeapi.co/api/v2/generation/${generationId}/`;
  const response = await fetch(initUrl);
  const data = await response.json();

  const getPokemonInformation = async (result) => {
   result.forEach(async (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
    const data = await fetch(url);
    const pokemonFetchData = await data.json();

    setShownPokemons((currentInformation) => [...currentInformation, pokemonFetchData].sort((pokemonA, pokemonB) => (pokemonA.id > pokemonB.id ? 1 : -1)));
   });
  };

  await getPokemonInformation(data.pokemon_species);
  setViewedGeneration(`Generation ${generationId}`);
  navigate("/pokedex");
 };

 return (
  <Fragment>
   <h2>Sort by Generation</h2>
   <div style={{ display: "grid", gridTemplateColumns: `${columns}`, gap: "10px" }}>
    {pokemonGenerationList.map((generation, index) => {
     const { backgroundColor, numberColor } = getColorPallate(generation);
     const { img } = getGenerationImage(generation);
     return (
      <Button value={index + 1} onClick={() => changeGenerations(index + 1)} key={index} style={{ backgroundColor: `${backgroundColor}` }}>
       <Text style={{ color: `${numberColor}`, textTransform: "capitalize" }}>{generation}</Text>
       <Icon disabled value={index + 1} src={img} alt={`${generation}_icon`} style={{ width: "100px", height: "50px", top: "0", borderRadius: "0", zIndex: 0 }} />
      </Button>
     );
    })}
   </div>
  </Fragment>
 );
};

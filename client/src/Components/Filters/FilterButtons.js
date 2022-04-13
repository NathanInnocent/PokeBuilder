import { useContext } from "react";
import { PokemonDataContext } from "../../Context/PokemonDataContext";
import { Button } from "./MoreFiltersButton";

export const FilterButtons = () => {
 const { shownPokemons, setShownPokemons } = useContext(PokemonDataContext);

 const sortAlphabetically = () => {
  const sampleData = [...shownPokemons].sort((pokemonA, pokemonB) => (pokemonA.name > pokemonB.name ? 1 : -1));

  setShownPokemons(sampleData);
 };

 const sortReverseAlphabetically = () => {
  const sampleData = [...shownPokemons].sort((pokemonA, pokemonB) => (pokemonA.name > pokemonB.name ? -1 : 1));

  setShownPokemons(sampleData);
 };

 const sortHeaviest = () => {
  const sampleData = [...shownPokemons].sort((pokemonA, pokemonB) => (pokemonA.weight > pokemonB.weight ? -1 : 1));

  setShownPokemons(sampleData);
 };

 const sortLightest = () => {
  const sampleData = [...shownPokemons].sort((pokemonA, pokemonB) => (pokemonA.weight > pokemonB.weight ? 1 : -1));

  setShownPokemons(sampleData);
 };

 const sortTallest = () => {
  const sampleData = [...shownPokemons].sort((pokemonA, pokemonB) => (pokemonA.height > pokemonB.height ? -1 : 1));

  setShownPokemons(sampleData);
 };

 const sortShortest = () => {
  const sampleData = [...shownPokemons].sort((pokemonA, pokemonB) => (pokemonA.height > pokemonB.height ? 1 : -1));

  setShownPokemons(sampleData);
 };

 //Should be a toggle
 const sortID = () => {
  const sampleData = [...shownPokemons].sort((pokemonA, pokemonB) => (pokemonA.id > pokemonB.id ? 1 : -1));

  setShownPokemons(sampleData);
 };

 return (
  <>
   <Button onClick={sortAlphabetically}>A-Z</Button>
   <Button onClick={sortReverseAlphabetically}>Z-A</Button>
   <Button onClick={sortHeaviest}>Heaviest-Lightest</Button>
   <Button onClick={sortLightest}>Lightest-Heaviest</Button>
   <Button onClick={sortTallest}>Tallest-Shortest</Button>
   <Button onClick={sortShortest}>Shortest-Tallest</Button>
   <Button onClick={sortID}>Id</Button>
  </>
 );
};

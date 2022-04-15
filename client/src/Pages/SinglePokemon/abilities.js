import { useContext, useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import { CurrentPokemonContext } from "./context";
import { FlexVerticalContainer } from "./styling";

export const Abilities = () => {
 const { currentPokemon } = useContext(CurrentPokemonContext);
 const { abilities } = currentPokemon;

 const fetchAbilityEffect = async (url) => {
  const initUrl = `${url}`;
  const response = await fetch(initUrl);
  const data = await response.json();
  let englishData = data.effect_entries.filter((data) => data.language.name === "en");
 };

 return (
  <FlexVerticalContainer>
   <p>Ability</p>
   {abilities.map((abilityObject, index) => {
    let isHidden = abilityObject.is_hidden;
    let name = abilityObject.ability.name;
    let abilityEffect = fetchAbilityEffect(abilityObject.ability.url);

    return <div key={index}>{name}</div>;
   })}
  </FlexVerticalContainer>
 );
};

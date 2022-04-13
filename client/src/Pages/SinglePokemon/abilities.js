import { useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import { FlexVerticalContainer } from "./styling";

export const Abilities = ({ data }) => {
 const [abilityEffect, setAbilityEffect] = useState([]);
 console.log("abilities", abilityEffect);

 const fetchAbilityEffect = async (url) => {
  const initUrl = `${url}`;
  const response = await fetch(initUrl);
  const data = await response.json();

  let englishData = data.effect_entries.filter((data) => data.language.name === "en");
 };

 return (
  <FlexVerticalContainer>
   <p>Ability</p>
   {data.map((abilityObject, index) => {
    let isHidden = abilityObject.is_hidden;
    let name = abilityObject.ability.name;
    let abilityEffect = fetchAbilityEffect(abilityObject.ability.url);

    return <div key={index}>{name}</div>;
   })}
  </FlexVerticalContainer>
 );
};

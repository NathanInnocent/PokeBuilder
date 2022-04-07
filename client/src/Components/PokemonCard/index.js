import { useState } from "react";

import { Icon, ID, Image, Name, SmallPokemonCard } from "./styling";
import { getPokemonTypeInformation } from "./typeLogic";
import { pokemonSampleData } from "./Test";

export const PokemonCard = (/* { type, name, number } */) => {
 const [pokemon, setPokemon] = useState(pokemonSampleData);

 return (
  <>
   {pokemon.map((pokemonReceived, index) => {
    const { type, pokemonName, number } = pokemonReceived;
    const { background, numberColor, nameColor, icon, image } = getPokemonTypeInformation(type);
    console.log(getPokemonTypeInformation(type));
    console.log(background);
    console.log(pokemonName);

    return (
     <SmallPokemonCard key={index} style={{ backgroundColor: `${background}` }}>
      <ID style={{ color: `${numberColor}` }}>{number}</ID>
      <Name style={{ color: `${nameColor}` }}>{pokemonName}</Name>
      <Icon src={icon} alt={`${type} icon`} />
      <Image src={image} alt={`${pokemonName}`} />
     </SmallPokemonCard>
    );
   })}
  </>
 );
};

{
 /* <SmallPokemonCard style={{ backgroundColor: PokemonType.background }}>
<ID style={{ flex: "1", color: PokemonType.ID }}>{number}</ID>
<Name style={{ flex: "1", color: PokemonType.name }}>{name}</Name>
<Icon src={PokemonType.icon} alt={`${type}_icon`} />
<Image src={name} alt={`${name} picture`} />
</SmallPokemonCard> */
}

{
 /* <SmallPokemonCard background={background}>
    <ID>{number}</ID>
    <Name>{pokemonName}</Name>
    <Icon src={icon} alt={`${type}_icon`} />
    <Image src={name} alt={`${name}_picture`} />
   </SmallPokemonCard> */
}

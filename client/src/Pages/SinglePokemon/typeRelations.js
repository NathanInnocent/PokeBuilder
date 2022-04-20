import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "../../Components/LoadingSpinner";
import { getColorPallate } from "../../Components/PokemonCard/typeLogic";
import { CurrentPokemonContext } from "./context";
import { TypeLabel } from "./styling";

export const TypeRelationStats = () => {
 const { typeRelations } = useContext(CurrentPokemonContext);
 console.log("typeRelation", typeRelations);

 const typeMap = { weakAgaints: [], strongAgaints: [], immuneTo: [], noEffectTo: [], doubleDamageTo: [], halfDamageTo: [] };

 typeRelations.forEach((typeObj) => {
  const { damage_relations, name } = typeObj;
  const { double_damage_from, double_damage_to, half_damage_from, half_damage_to, no_damage_from, no_damage_to } = damage_relations;

  //Weakness
  Object.values(double_damage_from).forEach((type) => {
   typeMap.weakAgaints.push(type.name);
  });

  //Resistance
  Object.values(half_damage_from).forEach((type) => {
   typeMap.strongAgaints.push(type.name);
  });

  //Immunity
  Object.values(no_damage_from).forEach((type) => {
   typeMap.immuneTo.push(type.name);
  });

  //No effect
  Object.values(no_damage_to).forEach((type) => {
   typeMap.noEffectTo.push(type.name);
  });

  //Effective
  Object.values(double_damage_to).forEach((type) => {
   typeMap.doubleDamageTo.push(type.name);
  });

  //Not effective
  Object.values(half_damage_to).forEach((type) => {
   typeMap.halfDamageTo.push(type.name);
  });

  //Has 0 effect if there is no x2 dmg or 1/2 dmg
  typeMap.doubleDamageTo.forEach((doubleDmg) => {
   typeMap.halfDamageTo.forEach((halfDmg) => {
    typeMap.noEffectTo.forEach((noDmg) => {
     if (noDmg === doubleDmg || noDmg === halfDmg) {
      typeMap.noEffectTo.filter((item) => item !== noDmg);
     }
    });
   });
  });

  // Logic to remove strenghts of one type & weaknesses of another -> poison x2 dmg to grass & grass 1/2 dmg to poison cancels out
  typeMap.weakAgaints.forEach((weakness) =>
   typeMap.strongAgaints.forEach((resistances) => {
    if (weakness === resistances) {
     typeMap.strongAgaints.splice(typeMap.strongAgaints.indexOf(resistances), 1);
     typeMap.weakAgaints.splice(typeMap.weakAgaints.indexOf(weakness), 1);
    }
   })
  );

  // same logic as about for dmg againts
  typeMap.doubleDamageTo.forEach((veryEffective) =>
   typeMap.halfDamageTo.forEach((notEffective) => {
    if (veryEffective === notEffective) {
     typeMap.halfDamageTo.splice(typeMap.halfDamageTo.indexOf(notEffective), 1);
     typeMap.doubleDamageTo.splice(typeMap.doubleDamageTo.indexOf(veryEffective), 1);
    }
   })
  );
 });

 //no_damage_to	        A list of types this type has no effect on                || Useless against type / no dmg against
 //half_damage_to	      A list of types this type is not very effect against.     || Not very effective against type
 //double_damage_to 	  A list of types this type is very effect against.         || Very effective against type

 //no_damage_from	      A list of types that have no effect on this type.         || Immune to type
 //half_damage_from	    A list of types that are not very effect on this type.    || Resistant to type
 //double_damage_from	  A list of types that are very effect on this type.        || Weak to type

 //Bdivbasaur ie.
 //expected weakness: Fire, Psychic, Flying, ice

 //Grass
 //double_damage_from:
 //  0: {name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/'}
 // 1: {name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/'} THIS
 // 2: {name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/'}
 // 3: {name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/'}
 // 4: {name: 'ice', url: 'https://pokeapi.co/api/v2/type/15/'}

 // half_damage_from:
 // 0: {name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/'}
 // 1: {name: 'water', url: 'https://pokeapi.co/api/v2/type/11/'}
 // 2: {name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/'}
 // 3: {name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/'}

 //Poison
 //  double_damage_from: Array(2)
 //  0: {name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/'}
 //  1: {name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/'}

 //  half_damage_from: Array(5)
 // 0: {name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/'}
 // 1: {name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/'} THIS
 // 2: {name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/'}
 // 3: {name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/'}
 // 4: {name: 'fairy', url: 'https://pokeapi.co/api/v2/type/18/'}

 //===================== END OF USE EFFECTS ================//
 //  double_damage_from: Array(2)
 // 0: {name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/'}
 // 3: {name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/'}
 // 4: {name: 'ice', url: 'https://pokeapi.co/api/v2/type/15/'}
 // 6: {name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/'}

 // half_damage_from: Resistant to
 // 1: {name: 'water', url: 'https://pokeapi.co/api/v2/type/11/'}
 // 3: {name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/'}
 // 4: {name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/'}
 // 7: {name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/'}
 // 8: {name: 'fairy', url: 'https://pokeapi.co/api/v2/type/18/'}

 //Step 1 - Get the types of the current pokemon
 //Step 2 - For same key values, add the data => ie poison double_damage_from + grass double_damage_from => 1 object
 //Step 3 - If value inside double_damage_from is present in half_damage_from, remove it from both
 //Step 4 - remaider is pokemon type relation

 return (
  <>
   <></>
   {typeRelations.lenght === 0 && <LoadingSpinner />}
   {/* display relations */}

   {typeRelations.lenght !== 0 &&
    [typeMap].map((typeRelation) => {
     return (
      <>
       <div className="type-relation-container">
        <div className="type-relation-container__left">
         <h2>Strong Against</h2>
         <div style={{ display: "flex", gap: "30px" }}>
          {typeRelation.strongAgaints.map((typeName, index) => {
           const { numberColor } = getColorPallate(typeName);

           return (
            <TypeLabel key={index} style={{ backgroundColor: `${numberColor}` }}>
             {typeName}
            </TypeLabel>
           );
          })}
         </div>
        </div>
        <div className="type-relation-container__right">
         <h2>Weak Against</h2>
         <div style={{ display: "flex", gap: "30px" }}>
          {typeRelation.weakAgaints.map((weakAgainst) => {
           const { numberColor } = getColorPallate(weakAgainst);

           return (
            <TypeLabel key={weakAgainst} style={{ backgroundColor: `${numberColor}` }}>
             {weakAgainst}
            </TypeLabel>
           );
          })}
         </div>
        </div>
        {Object.values(typeRelation.immuneTo).lenght !== 0 && (
         <div>
          <h2>Immune To</h2>
          <div style={{ display: "flex", gap: "30px" }}>
           {typeRelation.immuneTo.map((noDamageAgainst) => {
            const { numberColor } = getColorPallate(noDamageAgainst);
            return (
             <TypeLabel key={noDamageAgainst} style={{ backgroundColor: `${numberColor}` }}>
              {noDamageAgainst}
             </TypeLabel>
            );
           })}
          </div>
         </div>
        )}
       </div>
      </>
     );
    })}
  </>
 );
};

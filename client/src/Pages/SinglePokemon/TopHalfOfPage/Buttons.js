import { useContext } from "react";
import { ErrorMessage } from "../../../Auth/Form/Components/FormStyles";
import { CurrentPokemonTeamContext } from "../../../Context/CurrentPokemonTeamContext";
import { CurrentPokemonContext } from "../context";
import { ButtonTeam } from "../styling";

export const AddAndRemoveTeamButtons = () => {
 const { currentPokemon } = useContext(CurrentPokemonContext);
 const { addPokemonToTeam, removePokemonFromTeam, currentPokemonTeam } = useContext(CurrentPokemonTeamContext);

 //bool
 const isPokemonInsideTeam = currentPokemonTeam.some((currentTeam) => currentTeam.name === currentPokemon.name);
 const isPokemonTeamFull = currentPokemonTeam.every((currentTeam) => Object.keys(currentTeam).length !== 0);

 return (
  <>
   {/* Show add button if pokemon not on team  and team is not full*/}
   {!isPokemonInsideTeam && isPokemonTeamFull === false && (
    <ButtonTeam outline="5px solid rgba(81, 203, 238, 1)" onClick={() => addPokemonToTeam(currentPokemon)}>
     Add to team
    </ButtonTeam>
   )}
   {isPokemonInsideTeam && (
    <ButtonTeam outline="5px solid red" onClick={() => removePokemonFromTeam(currentPokemon)}>
     Remove from team
    </ButtonTeam>
   )}
   {isPokemonTeamFull === true && <ErrorMessage style={{ width: "15%", marginTop: "10px" }}>Current team is full</ErrorMessage>}
  </>
 );
};

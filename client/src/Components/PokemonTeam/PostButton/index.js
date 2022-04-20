import { useContext, useState } from "react";
import { CurrentPokemonTeamContext } from "../../../Context/CurrentPokemonTeamContext";
import { Button } from "../../Filters/MoreFiltersButton";
import { LoadingSpinner } from "../../LoadingSpinner";
export const PostTeamButton = ({ setServerResponse, teamName }) => {
 const { postPokemonTeam } = useContext(CurrentPokemonTeamContext);
 //state to disable the button
 const [buttonDisabled, setButtonDisabled] = useState(false);

 return (
  <>
   <Button disabled={buttonDisabled} style={{ margin: "auto", marginTop: "20px" }} onClick={() => postPokemonTeam(setServerResponse, teamName, setButtonDisabled)}>
    {buttonDisabled === true ? <LoadingSpinner /> : "Post Team"}
   </Button>
  </>
 );
};

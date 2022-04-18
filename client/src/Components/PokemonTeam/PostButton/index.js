import { useContext } from "react";
import { CurrentPokemonTeamContext } from "../../../Context/CurrentPokemonTeamContext";
import { Button } from "../../Filters/MoreFiltersButton";
export const PostTeamButton = ({ setServerResponse, teamName }) => {
 const { postPokemonTeam } = useContext(CurrentPokemonTeamContext);

 return (
  <>
   <Button style={{ margin: "auto", marginTop: "20px" }} onClick={() => postPokemonTeam(setServerResponse, teamName)}>
    Post Team
   </Button>
  </>
 );
};

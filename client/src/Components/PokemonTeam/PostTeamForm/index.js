import { useContext, useState } from "react";
import { ErrorMessage, Form, Input, Label } from "../../../Auth/Form/Components/FormStyles";
import { CurrentPokemonTeamContext } from "../../../Context/CurrentPokemonTeamContext";
import { PostTeamButton } from "../PostButton";

export const PostTeamForm = () => {
 const { currentPokemonTeam } = useContext(CurrentPokemonTeamContext);
 const [teamName, setTeamName] = useState("");
 const updateTeamName = (e) => {
  setTeamName(e.target.value);
 };
 const [serverResponse, setServerResponse] = useState(null);

 let isTeamComplete = currentPokemonTeam.every((pokemon) => Object.keys(pokemon).length !== 0);

 return (
  <>
   {isTeamComplete && (
    <Form
     style={{ marginBottom: "20px", background: "hsl(0deg, 0%, 30%)" }}
     onSubmit={(e) => {
      e.preventDefault();
     }}
    >
     <Label style={{ fontSize: "1.5rem" }}>Please choose a team name</Label>
     <Input type="text" name="name" placeholder="Team Name" value={teamName} onInput={(e) => updateTeamName(e)} />
     <PostTeamButton setServerResponse={setServerResponse} teamName={teamName} />
    </Form>
   )}
   {serverResponse && (
    <ErrorMessage style={{ backgroundColor: `${serverResponse.status === 200 ? "hsl(147deg, 83%, 34%)" : "hsl(0, 100%, 50%, 0.5)"}`, marginBottom: "20px" }}>{serverResponse.message}</ErrorMessage>
   )}
  </>
 );
};

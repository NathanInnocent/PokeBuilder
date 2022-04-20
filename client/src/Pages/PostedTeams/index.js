import { useEffect, useState } from "react";
import styled from "styled-components";
import { Loading } from "../../Components/LoadingPage";
import { PokemonTeam } from "../../Components/PokemonTeam";

export const PostedTeamsPage = () => {
 const [fetchedPostedTeams, setFetchedPostedTeams] = useState(null);

 const fetchPostedTeams = async () => {
  await fetch(`http://localhost:4000/api/pokemon-team`, {
   headers: {
    "Content-Type": "application/json",
   },
   method: "GET",
  })
   .then((res) => res.json())
   .then((data) => {
    if (data.status >= 200 && data.status <= 299) {
     //{ status: 200, message: "Account created successfully!" }
     setFetchedPostedTeams(data.data);
     return data;
    } else {
     throw data;
    }
   })
   .catch((error) => {
    //A user already has that username, please choose another one.
    return error;
   });
 };

 //Fetch data from backend on mount
 useEffect(() => {
  document.body.style.backgroundColor = "white";
  fetchPostedTeams();
 }, []);

 return (
  <>
   {!fetchedPostedTeams && <Loading />}
   <div>
    {fetchedPostedTeams &&
     fetchedPostedTeams.map((postedTeam) => {
      const { team, username, teamName } = postedTeam;
      return (
       <>
        <TeamContainer>
         <div style={{ display: "flex", justifyContent: "space-between", textTransform: "capitalize", fontSize: "1.1em" }}>
          <div>{teamName}</div>
          <div>Posted by {username}</div>
         </div>
         <PokemonTeam pokemon={team} />
        </TeamContainer>
       </>
      );
     })}
   </div>
  </>
 );
};

const TeamContainer = styled.div`
 position: relative;
 width: 750px;
 border-radius: 25px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
 background: hsl(0deg, 0%, 30%);
 padding: 2% 3%;
 color: #fff;
 font-weight: bold;
 margin: auto;
 transition: all 1s ease-in-out;
 z-index: 5;
 margin-bottom: 50px;
`;

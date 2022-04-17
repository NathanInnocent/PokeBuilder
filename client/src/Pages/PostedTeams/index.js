import { useEffect, useState } from "react";
import { PokemonTeam } from "../../Components/PokemonTeam";

export const PostedTeamsPage = () => {
 const [fetchedPostedTeams, setFetchedPostedTeams] = useState(null);
 console.log(fetchedPostedTeams);

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
     console.log(data);
     setFetchedPostedTeams(data.data);
     return data;
    } else {
     throw data;
    }
   })
   .catch((error) => {
    //A user already has that username, please choose another one.
    console.log(error);
    return error;
   });
 };

 //Fetch data from backend on mount
 useEffect(() => {
  fetchPostedTeams();
 }, []);

 return (
  <>
   <div>
    <>Posted teams</>
    {fetchedPostedTeams &&
     fetchedPostedTeams.map((postedTeam) => {
      const { team, username } = postedTeam;
      return (
       <>
        <div>Posted by {username}</div>
        <PokemonTeam pokemon={team} />
       </>
      );
     })}
   </div>
  </>
 );
};

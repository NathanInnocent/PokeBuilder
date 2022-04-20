import { GIFS } from "../../Helpers/Icons";

export const Loading = () => {
 return (
  <>
   <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "200px" }}>
    <h2>loading...</h2>
    <img src={GIFS.togepi} alt="loading" />
   </div>
  </>
 );
};

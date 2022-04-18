import { GIFS } from "../../Helpers/Icons";

export const Loading = () => {
 return (
  <>
   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
    <div>loading...</div>
    <img src={GIFS.togepi} alt="loading" />
   </div>
  </>
 );
};

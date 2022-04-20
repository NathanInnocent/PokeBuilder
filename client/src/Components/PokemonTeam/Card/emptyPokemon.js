import { ImageContainerDiv } from "../../../Pages/SinglePokemon/styling";
import { pokemonSilouhette } from "../../../Helpers/Icons";
export const EmptyPokemon = () => {
 return (
  <div>
   <ImageContainerDiv style={{ zIndex: "1", width: "100px", height: "100px" }}>
    <img src={pokemonSilouhette} alt={`pokemon silouhette png`} />
   </ImageContainerDiv>
   <p style={{ textAlign: "center" }}>???</p>
  </div>
 );
};

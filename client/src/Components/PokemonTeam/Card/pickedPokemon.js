import { useNavigate } from "react-router-dom";
import { ImageContainerDiv } from "../../../Pages/SinglePokemon/styling";

export const SmallPokemonIcon = ({ pokemon }) => {
 let navigate = useNavigate();
 const { sprites, name } = pokemon;
 const image = sprites.other[`official-artwork`][`front_default`];

 return (
  <>
   <ImageContainerDiv
    onClick={() => {
     navigate(`/pokemon/${name}`);
    }}
    style={{ zIndex: "1", width: "100px", height: "100px", cursor: "pointer" }}
   >
    <img src={image} alt={`${name} png`} />
   </ImageContainerDiv>
  </>
 );
};

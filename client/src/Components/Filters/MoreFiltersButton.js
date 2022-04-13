import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ICON } from "../../Helpers/Icons";

export const MoreFilters = () => {
 let navigate = useNavigate();

 //  On click navigates to filterPage
 const goToFilterPage = () => {
  navigate("/pokemon/filter");
 };

 return (
  <>
   <Button
    onClick={goToFilterPage}
    style={{
     position: "relative",
     width: "200px",
     background: `url(${ICON.filter}) no-repeat`,
     backgroundPosition: "90% center",
     backgroundSize: "27px 27px",
     backgroundColor: "white",
    }}
   >
    More Filters
   </Button>
  </>
 );
};

export const Button = styled.button`
 color: #8a8a8a;
 display: block;
 width: 200px;
 height: 44px;
 padding: 5px 5%;
 border: 1px solid #ccc;
 -moz-border-radius: 27px;
 -webkit-border-radius: 27px;
 border-radius: 27px;
 padding: 0px;
 -moz-background-clip: padding;
 -webkit-background-clip: padding-box;
 background-clip: padding-box;
 background-color: #fff;
 font-family: "HelveticaNeue", "Arial", sans-serif;
 font-size: 105%;
 letter-spacing: 0.8px;
 cursor: pointer;

 &:hover {
  outline: 3px solid rgba(81, 203, 238, 1);
 }
`;

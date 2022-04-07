import styled from "styled-components";
import { TYPE_ICON } from "../../Helpers/Icons";

export const SearchFilterPage = () => {
 return (
  <>
   {/* First Container */}
   <div>
    <h1>Search by type</h1>
    <button style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "200px", borderRadius: "30px", border: "none" }}>
     <p>Normal</p>
     <img src={TYPE_ICON.normal} style={{ width: "50px" }} />
    </button>
   </div>
  </>
 );
};

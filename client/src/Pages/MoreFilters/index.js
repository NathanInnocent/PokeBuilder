import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SearchBar } from "../../Components/SearchBar";
import { Content } from "../SinglePokemon/styling";
import { GridGenerations } from "./GridGenerations";
import { GridTypes } from "./GridTypes";

export const SearchFilterPage = () => {
 let navigate = useNavigate();

 const searchByFilter = (searchCriteria) => {
  navigate(`/pokemon/filter/${searchCriteria}`);
 };

 return (
  <>
   {/* Container */}
   <Page>
    <SearchBar />
    <Content style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "10px" }}>
     <GridTypes columns="repeat(4, 1fr)" handleSearch={searchByFilter} />
     <GridGenerations columns="repeat(4, 1fr)" />
     {/* Grid end */}
    </Content>
   </Page>
  </>
 );
};

const Page = styled(Content)``;

import { useContext } from "react";
import styled from "styled-components";
import { CurrentPokemonContext } from "./context";
import { FlexVerticalContainer } from "./styling";
import { Fragment } from "react";

export const Abilities = () => {
 const { abilityEffect } = useContext(CurrentPokemonContext);
 return (
  <Fragment>
   {abilityEffect && (
    <FlexVerticalContainer>
     <Table>
      <Tr>
       <th style={{ width: "12%" }}>Ability</th>
       <th style={{ width: "70%", paddingLeft: "20px" }}>Effect</th>
       <th>Hidden Ability</th>
      </Tr>
      {abilityEffect.map((ability, index) => {
       const { name, effect, is_hidden } = ability;
       return (
        <Fragment>
         <Tr key={index}>
          <td>{name}</td>
          <td style={{ paddingLeft: "20px" }}>{effect}</td>
          <td>{is_hidden ? "Yes" : "No"}</td>
         </Tr>
        </Fragment>
       );
      })}
     </Table>
    </FlexVerticalContainer>
   )}
  </Fragment>
 );
};

const Table = styled.table`
 text-transform: capitalize;
 text-align: left;
 border-radius: 25px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
 padding: 2% 3%;
 margin: auto;
 transition: all 1s ease-in-out;
 z-index: 5;
`;

const Tr = styled.tr`
 &:hover {
  background-color: #ddd;
 }
`;

import styled from "styled-components";

export const SmallPokemonCard = styled.div`
 position: relative;
 display: flex;
 flex-direction: column;
 height: 200px;
 width: 350px;
 border-radius: 25px;
 border: 1px solid black;
 overflow: hidden;
 padding: 0 10px;
 margin: 20px;
 cursor: pointer;
`;

export const Icon = styled.img`
 position: relative;
 width: 30px;
 height: 30px;
 top: -10px;
 border-radius: 50%;
 z-index: 2;
`;

export const Image = styled.img`
 position: absolute;
 width: 200px;
 height: 215px;
 right: 0;
 z-index: 1;
`;

export const ID = styled.h1`
 position: relative;
 top: 10px;
 flex: 1;
 font-weight: bold;
 font-size: 4.75em;
 z-index: 2;
`;

export const Name = styled.h2`
 position: relative;
 top: -15px;
 flex: 1;
 font-weight: bold;
 font-size: 2em;
 z-index: 2;
`;

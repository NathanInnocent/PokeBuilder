import styled, { keyframes } from "styled-components";
import { loadingspin } from "../../Helpers/Icons";

export const LoadingSpinner = () => {
 return (
   <Spinner src={loadingspin} alt="loading" />
 );
};

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

const Spinner = styled.img`
 width: 30px;
 height: 30px;
 animation: ${rotate} 1s infinite linear;
 margin: auto;
`;

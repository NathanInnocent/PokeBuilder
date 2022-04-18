import styled from "styled-components";

export const Form = styled.form`
 position: relative;
 width: 650px;
 border-radius: 25px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
 padding: 2% 3%;
 color: #fff;
 font-weight: bold;
 margin: 0 auto auto auto;
 transition: all 1s ease-in-out;
 z-index: 5;
`;
export const Background = styled.div`
 width: 100vw;
 height: 100vh;
 background-repeat: no-repeat;
 background-size: cover;
 display: flex;
 flex-direction: column;
`;
export const Section = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 height: 30px;
 border-bottom: 2px solid black;
 margin-bottom: 10px;
`;

export const FormTitle = styled.h1`
 font-size: 1.5em;
 text-align: center;
`;

export const Button = styled.button`
 width: 130px;
 color: white;
 margin: auto;
 color: black;
 height: 44px;
 padding: 5px 5%;
 border: 1px solid #ccc;
 border-radius: 25px;
 background-clip: padding-box;
 background-color: #fff;
 font-size: 1em;
 margin: 10px;
 cursor: pointer;
 &:hover {
  box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
  border: 3px solid #00d7c3;
 }
 :focus {
  outline: none;
  box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
  border: 3px solid #00d7c3;
 }
`;

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 height: 100%;
 margin: 5px 10px;
 gap: 10px;
`;

export const SubTitle = styled.div`
 font-size: 1em;
 margin-bottom: 5px;
 border-bottom: 2px solid black;
 margin-bottom: 10px;
`;

export const Select = styled.select`
 color: #8a8a8a;
 display: block;
 width: 90%;
 height: 44px;
 padding: 5px 5%;
 border: 1px solid #ccc;
 -moz-border-radius: 27px;
 -webkit-border-radius: 27px;
 border-radius: 27px;
 -moz-background-clip: padding;
 -webkit-background-clip: padding-box;
 background-clip: padding-box;
 background-color: #fff;
 font-family: "HelveticaNeue", "Arial", sans-serif;
 font-size: 105%;
 letter-spacing: 0.8px;
 margin-bottom: 10px;

 &:focus {
  outline: 3px solid rgba(81, 203, 238, 1);
 }
`;

export const ErrorMessage = styled.div`
 background-color: hsl(0, 100%, 50%, 0.5);
 padding: 5px 10px;
 color: white;
 border-radius: 25px;
 font-size: 1em;
 margin-bottom: 5px;
 margin-left: 5px;
`;

export const Label = styled.div`
 font-size: 1em;
 margin-bottom: 5px;
 margin-left: 10px;
`;

export const InputContainer = styled.div`
 position: relative;
`;

export const Input = styled.input`
 color: #8a8a8a;
 display: block;
 width: 100%;
 height: 44px;
 padding: 5px 5%;
 border: 1px solid #ccc;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
 -moz-border-radius: 27px;
 -webkit-border-radius: 27px;
 border-radius: 27px;
 -moz-background-clip: padding;
 -webkit-background-clip: padding-box;
 background-clip: padding-box;
 background-color: #fff;
 font-family: "HelveticaNeue", "Arial", sans-serif;
 font-size: 105%;
 letter-spacing: 0.8px;

 &:focus {
  outline: 3px solid rgba(81, 203, 238, 1);
 }
`;

export const ProgressBarContainer = styled.div`
 width: 80%;
 height: 2rem;
 border-radius: 2rem;
 position: relative;
 overflow: hidden;
 transition: all 0.5s;
 will-change: transform;
 box-shadow: 0 0 5px #e76f51;
 margin: 10px auto auto auto;
`;

export const ProgressBar = styled.div`
 position: absolute;
 height: 100%;
 width: 100%;
 content: "";
 background-color: #e76f51;
 top: 0;
 bottom: 0;
 left: -100%;
 border-radius: inherit;
 display: flex;
 justify-content: center;
 align-items: center;
 color: white;
 font-family: sans-serif;
 transition: all 0.5s ease-in-out;
`;

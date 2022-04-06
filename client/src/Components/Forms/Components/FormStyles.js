import styled from "styled-components";

export const Form = styled.form`
  border: 5px solid black;
  border-radius: 2%;
  background-color: hsl(40, 10%, 94%);
  height: 100%;
  padding-bottom: 20px;
  width: 650px;
  font-weight: bold;
  margin: 50px auto auto auto;
  transition: all 1s ease-in-out;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-size: 1.5em;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  display: block;
  width: 130px;
  color: white;
  box-shadow: 5px 5px 5px #eee;
  margin: auto;
  color: #8a8a8a;
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
  margin: 10px;
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
  color: red;
  font-size: 1em;
  margin-bottom: 5px;
  margin-left: 10px;
`;

export const Label = styled.div`
  font-size: 1em;
  margin-bottom: 5px;
  margin-left: 10px;
`;

export const InputContainer = styled.div``;

export const Input = styled.input`
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

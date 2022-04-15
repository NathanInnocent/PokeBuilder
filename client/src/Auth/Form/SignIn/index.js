import { useState } from "react";
// import { FormStepOneValidation } from "./Logic/ValidateStep1";
import { Form, Button, Container, ErrorMessage, Input, InputContainer, FormTitle } from "../Components/FormStyles";
import { hidePlaceHolderText, showPlaceHolderText } from "../Logic/PlaceholderText";
import { updateUserInformation } from "../Logic/UpdateInput";
import { validateInputs } from "../Logic/Validation";
import { useNavigate } from "react-router-dom";

export const SignInForm = ({ formStep, setFormStep }) => {
 let navigate = useNavigate();

 // State to store user Information
 const [loginUserInformation, setLoginUserInformation] = useState({
  username: "",
  password: "",
 });

 // Error message
 const [errorMessage, setErrorMessage] = useState({
  username: "",
  password: "",
 });

 const [serverResponseMessage, setserverResponseMessage] = useState("");

 // Place holder states for this form
 const [placeHolderText, setPlaceHolderText] = useState({ username: "Username", password: "Password" });

 return (
  <Form
   onSubmit={(ev) => {
    ev.preventDefault();
    console.log("Signing in");
    fetch(`http://localhost:4000/login`, {
     headers: {
      "Content-Type": "application/json",
     },
     method: "GET",
    })
     .then((response) => console.log(response))
     .catch((error) => console.log(error));
   }}
  >
   <Container>
    <FormTitle>Sign In</FormTitle>
    {/* Username */}
    <InputContainer>
     <Input
      value={loginUserInformation.username}
      placeholder={placeHolderText.username}
      name="username"
      type="text"
      onBlur={(object) => {
       validateInputs(object, setErrorMessage, errorMessage, formStep);
       showPlaceHolderText(object, setPlaceHolderText, placeHolderText, formStep);
      }}
      onFocus={(object) => hidePlaceHolderText(object, setPlaceHolderText, placeHolderText)}
      onChange={(object) => updateUserInformation(object, setLoginUserInformation, loginUserInformation)}
      autoComplete="none"
     />
     {errorMessage.username && <ErrorMessage>{errorMessage.username}</ErrorMessage>}
    </InputContainer>
    {/* Password */}
    <InputContainer>
     <Input
      value={loginUserInformation.password}
      placeholder={placeHolderText.password}
      name="password"
      type="password"
      onBlur={(object) => {
       validateInputs(object, setErrorMessage, errorMessage, formStep);
       showPlaceHolderText(object, setPlaceHolderText, placeHolderText, formStep);
      }}
      onFocus={(object) => hidePlaceHolderText(object, setPlaceHolderText, placeHolderText)}
      onChange={(object) => updateUserInformation(object, setLoginUserInformation, loginUserInformation)}
      autoComplete="none"
     />
     {errorMessage.password && <ErrorMessage>{errorMessage.password}</ErrorMessage>}
    </InputContainer>
    {/* Button to login */}
    <div style={{ display: "flex", justifyContent: "space-between" }}>
     <Button
      onClick={() => {
       setFormStep("register");
      }}
     >
      Register
     </Button>
     <Button
      onClick={() => {
       navigate("/home");
      }}
     >
      Login
     </Button>
    </div>
   </Container>
  </Form>
 );
};

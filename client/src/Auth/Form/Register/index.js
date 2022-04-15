import { useEffect, useState } from "react";
// import { FormStepOneValidation } from "./Logic/ValidateStep1";
import { Form, Button, Container, ErrorMessage, Input, InputContainer, FormTitle } from "../Components/FormStyles";
import { hidePlaceHolderText, showPlaceHolderText } from "../Logic/PlaceholderText";
import { updateUserInformation } from "../Logic/UpdateInput";
import { validateInputs } from "../Logic/Validation";

export const RegisterForm = ({ formStep, setFormStep }) => {
 // State to store user Information
 const [registerUserInformation, setRegisterUserInformation] = useState({
  username: "",
  password: "",
  confirmPassword: "",
 });

 // Error message
 const [errorMessage, setErrorMessage] = useState({
  username: "",
  password: "",
  confirmPassword: "",
 });

 console.log({ registerUserInformation, errorMessage });
 const [serverResponseMessage, setserverResponseMessage] = useState("");

 // Place holder states
 const [placeHolderText, setPlaceHolderText] = useState({ username: "Pick a username", password: "Pick a password", confirmPassword: "Confirm password" });

 const handleBlur = (object) => {
  validateInputs(object, setErrorMessage, errorMessage, formStep);
  showPlaceHolderText(object, setPlaceHolderText, placeHolderText, formStep);
 };
 const data = "hi";

 return (
  <Form
   onSubmit={(ev) => {
    ev.preventDefault();
    fetch(`http://localhost:4000/register`, {
     headers: {
      "Content-Type": "application/json",
     },
     method: "POST",
     body: JSON.stringify({ username: registerUserInformation[`username`], password: registerUserInformation[`password`] }),
    })
     .then((response) => console.log(response))
     .catch((error) => console.log(error));
    /* .then((res) => res.json())
     .then((data) => {
      if (data.status >= 200 && data.status <= 299) {
       setFormStep(200);
       return data;
      } else {
       throw data.message;
      }
     })
     .catch((error) => {
      console.log(error);
     }); */
   }}
  >
   <Container>
    <FormTitle>Registration</FormTitle>
    {/* Username */}
    <InputContainer>
     <Input
      value={registerUserInformation.username}
      placeholder={placeHolderText.username}
      name="username"
      type="text"
      onBlur={(object) => {
       showPlaceHolderText(object, setPlaceHolderText, placeHolderText, formStep);
       validateInputs(object, setErrorMessage, errorMessage, formStep);
      }}
      onFocus={(object) => hidePlaceHolderText(object, setPlaceHolderText, placeHolderText)}
      onChange={(object) => updateUserInformation(object, setRegisterUserInformation, registerUserInformation)}
      autoComplete="none"
     />
     {errorMessage.username && <ErrorMessage>{errorMessage.username}</ErrorMessage>}
    </InputContainer>

    {/* Password */}
    <InputContainer>
     <Input
      value={registerUserInformation.password}
      placeholder={placeHolderText.password}
      name="password"
      type="password"
      //===== Error handling && Placeholder text Start
      onBlur={(object) => handleBlur(object)}
      onFocus={(object) => hidePlaceHolderText(object, setPlaceHolderText, placeHolderText)}
      //===== Error handling && Placeholder text End

      //===== Update user information
      onChange={(object) => updateUserInformation(object, setRegisterUserInformation, registerUserInformation)}
      autoComplete="none"
     />
     {errorMessage.password && <ErrorMessage>{errorMessage.password}</ErrorMessage>}
    </InputContainer>

    {/* Confirm password */}
    <InputContainer>
     <Input
      value={registerUserInformation.confirmPassword}
      placeholder={placeHolderText.confirmPassword}
      name="confirmPassword"
      type="password"
      //===== Error handling && Placeholder text Start
      onBlur={(object) => handleBlur(object)}
      onFocus={(object) => hidePlaceHolderText(object, setPlaceHolderText, placeHolderText)}
      //===== Error handling && Placeholder text End

      //===== Update user information
      onInput={(object) => updateUserInformation(object, setRegisterUserInformation, registerUserInformation)}
      autoComplete="none"
     />
     {errorMessage.confirmPassword && <ErrorMessage>{errorMessage.confirmPassword}</ErrorMessage>}
    </InputContainer>

    {/* Button to register */}
    <div style={{ display: "flex", justifyContent: "space-between" }}>
     <Button onClick={() => setFormStep("signIn")}>Back</Button>
     {/* Go to homepage on click */}
     <Button type="submit">Confirm</Button>
    </div>
   </Container>
  </Form>
 );
};

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../../../Components/LoadingSpinner";
import { CurrentUserContext } from "../../../Context/CurrentUserContext";
import { Form, Button, Container, ErrorMessage, Input, InputContainer, FormTitle } from "../Components/FormStyles";
import { hidePlaceHolderText, showPlaceHolderText } from "../Logic/PlaceholderText";
import { registerAccount } from "../Logic/Submit";
import { updateUserInformation } from "../Logic/UpdateInput";
import { validateInputs, validateNoEmptyInput } from "../Logic/Validation";

export const RegisterForm = ({ formStep, setFormStep }) => {
 const { setCurrentUser } = useContext(CurrentUserContext);

 let navigate = useNavigate();

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

 const [serverResponseMessage, setserverResponseMessage] = useState("");

 // Place holder states
 const [placeHolderText, setPlaceHolderText] = useState({ username: "Pick a username", password: "Pick a password", confirmPassword: "Confirm password" });

 //state to disable the button
 const [buttonDisabled, setButtonDisabled] = useState(false);

 return (
  <Form
   onSubmit={(ev) => {
    ev.preventDefault();
    setButtonDisabled(true);
    setserverResponseMessage("");
    registerAccount(registerUserInformation, errorMessage).then((response) => {
     const { status, message } = response;
     if (status >= 200 && status <= 299) {
      const { username } = registerUserInformation;
      setCurrentUser({ user: username });
      setButtonDisabled(false);
      setserverResponseMessage("");
      navigate("/home");
     } else {
      setButtonDisabled(false);
      setserverResponseMessage(message);
     }
    });
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
      //When user clicks input
      onFocus={(object) => {
       //Hide placeholder text
       hidePlaceHolderText(object, setPlaceHolderText, placeHolderText);
      }}
      //When user clicks elsewhere
      onBlur={(object) => {
       //Show placeholder text
       showPlaceHolderText(object, setPlaceHolderText, placeHolderText, formStep);
       //Check if input is empty
       validateNoEmptyInput(object, setErrorMessage, errorMessage);
      }}
      //When user types
      onInput={(object) => {
       //update state
       updateUserInformation(object, setRegisterUserInformation, registerUserInformation);
       //Validate input
       validateInputs(object, setErrorMessage, errorMessage, registerUserInformation);
      }}
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
      onFocus={(object) => {
       hidePlaceHolderText(object, setPlaceHolderText, placeHolderText);
      }}
      onBlur={(object) => {
       showPlaceHolderText(object, setPlaceHolderText, placeHolderText, formStep);
       validateNoEmptyInput(object, setErrorMessage, errorMessage);
      }}
      onInput={(object) => {
       updateUserInformation(object, setRegisterUserInformation, registerUserInformation);
       validateInputs(object, setErrorMessage, errorMessage, registerUserInformation);
      }}
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
      onFocus={(object) => {
       hidePlaceHolderText(object, setPlaceHolderText, placeHolderText);
      }}
      onBlur={(object) => {
       showPlaceHolderText(object, setPlaceHolderText, placeHolderText, formStep);
       validateNoEmptyInput(object, setErrorMessage, errorMessage);
      }}
      onInput={(object) => {
       updateUserInformation(object, setRegisterUserInformation, registerUserInformation);
       validateInputs(object, setErrorMessage, errorMessage, registerUserInformation);
      }}
      autoComplete="none"
     />
     {errorMessage.confirmPassword && <ErrorMessage>{errorMessage.confirmPassword}</ErrorMessage>}
    </InputContainer>
    {serverResponseMessage && <ErrorMessage>{serverResponseMessage}</ErrorMessage>}
    {/* Button to register */}
    <div style={{ display: "flex", justifyContent: "space-between" }}>
     <Button onClick={() => setFormStep("signIn")}>Back</Button>
     {/* Go to homepage on click */}
     <Button type="submit" disabled={buttonDisabled}>
      {buttonDisabled === true ? <LoadingSpinner /> : "Register"}
     </Button>
    </div>
   </Container>
  </Form>
 );
};

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../../Context/CurrentUserContext";
import { Form, Button, Container, ErrorMessage, Input, InputContainer, FormTitle } from "../Components/FormStyles";
import { hidePlaceHolderText, showPlaceHolderText } from "../Logic/PlaceholderText";
import { registerAccount } from "../Logic/Submit";
import { updateUserInformation } from "../Logic/UpdateInput";
import { validateInputs } from "../Logic/Validation";

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

 console.log({ registerUserInformation, errorMessage });
 const [serverResponseMessage, setserverResponseMessage] = useState("");

 // Place holder states
 const [placeHolderText, setPlaceHolderText] = useState({ username: "Pick a username", password: "Pick a password", confirmPassword: "Confirm password" });

 const handleValidation = (value) => {
  validateInputs(value, setErrorMessage, errorMessage, registerUserInformation);
  showPlaceHolderText(value, setPlaceHolderText, placeHolderText, formStep);
 };

 const handleInputUpdate = (value) => {
  updateUserInformation(value, setRegisterUserInformation, registerUserInformation);
 };

 return (
  <Form
   onSubmit={(ev) => {
    ev.preventDefault();
    setserverResponseMessage("");
    registerAccount(registerUserInformation, errorMessage).then((response) => {
     const { status, message } = response;
     if (status >= 200 && status <= 299) {
      const { username } = registerUserInformation;
      setCurrentUser({ user: username });
      setserverResponseMessage("");
      navigate("/home");
     } else {
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
      onFocus={(object) => hidePlaceHolderText(object, setPlaceHolderText, placeHolderText)}
      onInput={(object) => {
       handleValidation(object);
       handleInputUpdate(object);
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
      onFocus={(object) => hidePlaceHolderText(object, setPlaceHolderText, placeHolderText)}
      //===== Update user information
      onInput={(object) => {
       handleValidation(object);
       handleInputUpdate(object);
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
      onFocus={(object) => hidePlaceHolderText(object, setPlaceHolderText, placeHolderText)}
      //===== Update user information
      onInput={(object) => {
       handleValidation(object);
       handleInputUpdate(object);
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
     <Button type="submit">Confirm</Button>
    </div>
   </Container>
  </Form>
 );
};

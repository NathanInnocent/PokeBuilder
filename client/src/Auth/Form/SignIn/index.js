import { useContext, useState } from "react";
// import { FormStepOneValidation } from "./Logic/ValidateStep1";
import { Form, Button, Container, ErrorMessage, Input, InputContainer, FormTitle } from "../Components/FormStyles";
import { hidePlaceHolderText, showPlaceHolderText } from "../Logic/PlaceholderText";
import { updateUserInformation } from "../Logic/UpdateInput";
import { validateInputs, validateNoEmptyInput } from "../Logic/Validation";
import { NavLink, useNavigate } from "react-router-dom";
import { loginAccount } from "../Logic/Submit";
import { CurrentUserContext } from "../../../Context/CurrentUserContext";
import { LoadingSpinner } from "../../../Components/LoadingSpinner";

export const SignInForm = ({ formStep, setFormStep }) => {
 const { setCurrentUser } = useContext(CurrentUserContext);

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

 //state to disable the button
 const [buttonDisabled, setButtonDisabled] = useState(false);

 return (
  <Form
   onSubmit={(ev) => {
    ev.preventDefault();
    setserverResponseMessage("");
    setButtonDisabled(true);
    loginAccount(loginUserInformation, errorMessage).then((response) => {
     const { status, message } = response;
     if (status >= 200 && status <= 299) {
      const { username } = loginUserInformation;
      setButtonDisabled(false);
      setCurrentUser({ user: username });
      navigate("/home");
     } else {
      setButtonDisabled(false);
      setserverResponseMessage(message);
     }
    });
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
      onFocus={(object) => {
       hidePlaceHolderText(object, setPlaceHolderText, placeHolderText);
      }}
      onBlur={(object) => {
       showPlaceHolderText(object, setPlaceHolderText, placeHolderText, formStep);
       validateNoEmptyInput(object, setErrorMessage, errorMessage);
      }}
      onInput={(object) => {
       updateUserInformation(object, setLoginUserInformation, loginUserInformation);
       validateInputs(object, setErrorMessage, errorMessage, setLoginUserInformation);
      }}
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
      onFocus={(object) => {
       hidePlaceHolderText(object, setPlaceHolderText, placeHolderText);
      }}
      onBlur={(object) => {
       showPlaceHolderText(object, setPlaceHolderText, placeHolderText, formStep);
       validateNoEmptyInput(object, setErrorMessage, errorMessage);
      }}
      onInput={(object) => {
       updateUserInformation(object, setLoginUserInformation, loginUserInformation);
       validateInputs(object, setErrorMessage, errorMessage, setLoginUserInformation);
      }}
      autoComplete="none"
     />
     {errorMessage.password && <ErrorMessage>{errorMessage.password}</ErrorMessage>}
    </InputContainer>
    {/* Only show div if there's a server error message */}
    {serverResponseMessage && <ErrorMessage>{serverResponseMessage}</ErrorMessage>}
    {/* Button to login */}
    <div style={{ display: "flex", justifyContent: "space-between" }}>
     <Button
      onClick={() => {
       setFormStep("register");
      }}
     >
      Register
     </Button>
     <Button type="submit" disabled={buttonDisabled}>
      {buttonDisabled === true ? <LoadingSpinner /> : "Login"}
     </Button>
    </div>
    <NavLink to="/home" style={{ color: "white" }}>
     Continue without an account
    </NavLink>
   </Container>
  </Form>
 );
};

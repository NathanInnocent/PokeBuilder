import { useContext, useState } from "react";
// import { FormStepOneValidation } from "./Logic/ValidateStep1";
import { Form, Button, Container, ErrorMessage, Input, InputContainer, FormTitle } from "../Components/FormStyles";
import { hidePlaceHolderText, showPlaceHolderText } from "../Logic/PlaceholderText";
import { updateUserInformation } from "../Logic/UpdateInput";
import { validateInputs } from "../Logic/Validation";
import { useNavigate } from "react-router-dom";
import { loginAccount } from "../Logic/Submit";
import { CurrentUserContext } from "../../../Context/CurrentUserContext";

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

 const handleValidation = (value) => {
  validateInputs(value, setErrorMessage, errorMessage, loginUserInformation);
  showPlaceHolderText(value, setPlaceHolderText, placeHolderText, formStep);
 };

 const handleInputUpdate = (value) => {
  updateUserInformation(value, setLoginUserInformation, loginUserInformation);
 };

 return (
  <Form
   onSubmit={(ev) => {
    ev.preventDefault();

    loginAccount(loginUserInformation, errorMessage).then((response) => {
     const { status, message } = response;
     if (status >= 200 && status <= 299) {
      const { username } = loginUserInformation;
      console.log(response);
      setCurrentUser({ user: username });
      navigate("/home");
     } else {
      console.log(response);
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
      value={loginUserInformation.password}
      placeholder={placeHolderText.password}
      name="password"
      type="password"
      onFocus={(object) => hidePlaceHolderText(object, setPlaceHolderText, placeHolderText)}
      onInput={(object) => {
       handleValidation(object);
       handleInputUpdate(object);
      }}
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
     <Button type="submit">Login</Button>
    </div>
   </Container>
  </Form>
 );
};

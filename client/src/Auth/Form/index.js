import { useState } from "react";
import { Background, Container } from "./Components/FormStyles";
import { RegisterForm } from "./Register";
import { SignInForm } from "./SignIn";

// List of background images
import underwaterLugiaBackground from "../../Assets/Images/Background/UnderwaterLugia.jpg";
import underwaterCityBackground from "../../Assets/Images/Background/UnderWaterCity.jpg";
import cityBackground from "../../Assets/Images/Background/City.jpg";
import multiplePokemons from "../../Assets/Images/Background/MultiplePokemons.jpg";
import { TITLE } from "../../Helpers/Icons";

export const UserAuthenticationForm = () => {
 //Form order: Sign in(1) -> Sign Up(2) -> Confirm Sign up(3) -> || Error Login || Error Sign up )

 //Form steps
 const [formStep, setFormStep] = useState("signIn");

 return (
  <Background style={{ backgroundImage: `url(${underwaterLugiaBackground})`, position: "relative" }}>
   {/* PokeBuilderLogo */}
   <img src={TITLE.app} style={{ height: "25%", margin: "auto auto 10px auto" }} alt="logo" />

   {formStep === "signIn" && <SignInForm formStep={formStep} setFormStep={setFormStep} />}
   {formStep === "register" && <RegisterForm formStep={formStep} setFormStep={setFormStep} />}
  </Background>
 );
};

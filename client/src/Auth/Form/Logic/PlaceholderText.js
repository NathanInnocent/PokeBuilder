export const hidePlaceHolderText = (input, setState, state) => {
 const name = input.target.name;

 setState({ ...state, [name]: "" });
};

export const showPlaceHolderText = (input, setState, state, formStep) => {
 const name = input.target.name;
 let placeHolderText = "";
 // Sign in form
 if (name === "username" && formStep === "signIn") placeHolderText = "Username";
 else if (name === "password" && formStep === "signIn") placeHolderText = "Password";
 // Register Form
 else if (name === "username" && formStep === "register") placeHolderText = "Pick a username";
 else if (name === "password" && formStep === "register") placeHolderText = "Pick a password";
 else if (name === "confirmPassword" && formStep === "register") placeHolderText = "Confirm password";

 setState({ ...state, [name]: placeHolderText });
};

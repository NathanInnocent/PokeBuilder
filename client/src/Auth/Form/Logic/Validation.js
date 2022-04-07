//Only accepts numbers && letters
const regex = /[^A-Za-z0-9]/;

export const validateInputs = (input, setState, state, formStep, user) => {
 const name = input.target.name;
 const value = input.target.value;

 // ============================= Sign in form validation =================================== //
 if (formStep === "signIn") {
  // ============== Username edge cases ============== //
  if (name === "test" && value === "") {
   setState({
    ...state,
    [name]: "Please enter a username",
   });
  } else if (name === "username" && Number(value)) {
   setState({
    ...state,
    [name]: "Your username should not only be numbers!",
   });
  } else if (name === "username" && regex.test(value)) {
   setState({
    ...state,
    [name]: "Please do not include special characters",
   });
  } else if (name === "username" && value.length <= 2) {
   setState({ ...state, [name]: "Please enter a username with at least 3 characters" });
  } else if (name === "username" && value.length >= 16) {
   setState({ ...state, [name]: "Please enter a username with at less than 16 characters" });
  } else if (name === "username" && value.length <= 15) {
   setState({ ...state, [name]: "" });
  }

  // ============== Password edge cases ============== //
  if (name === "password" && value === "") {
   setState({ ...state, [name]: "Please enter your password" });
  } else if (name === "password" && value.length <= 2) {
   setState({ ...state, [name]: "Please enter a password with at least 3 characters" });
  } else if (name === "password" && !regex.test(value)) {
   setState({ ...state, [name]: "Please enter at least 1 special character" });
  } else if (name === "password" && regex.test(value)) {
   setState({ ...state, [name]: "" });
  }
 }
 // ============================= Register form validation =================================== //
 if (formStep === "register") {
  // ============== Username edge cases ============== //
  if (name === "username" && value === "") {
   //  console.log("Inside the case: value is", value, ` name is`, name, "the state is", state, "the setState is", setState);

   console.log({
    ...state,
    [name]: "Please enter a username",
   });
   setState((state) => ({
    ...state,
    [name]: "Please enter a username",
   }));

   //  console.log("After the setState", state);
  } else if (name === "username" && Number(value)) {
   setState({
    ...state,
    [name]: "Your username should not only be numbers!",
   });
  } else if (name === "username" && regex.test(value)) {
   setState({
    ...state,
    [name]: "Please do not include special characters",
   });
  } else if (name === "username" && value.length <= 2) {
   setState({ ...state, [name]: "Please enter a username with at least 3 characters" });
  } else if (name === "username" && value.length >= 16) {
   setState({ ...state, [name]: "Please enter a username with at less than 16 characters" });
  } else if (name === "username" && value.length <= 15) {
   setState({ ...state, [name]: "" });
  }

  // ============== Password edge cases ============== //
  else if (name === "password" && value === "") {
   setState((state) => ({ ...state, [name]: "Please enter your password" }));
  } else if (name === "password" && value.length <= 2) {
   setState({ ...state, [name]: "Please enter a password with at least 3 characters" });
  } else if (name === "password" && !regex.test(value)) {
   setState({ ...state, [name]: "Please enter at least 1 special character" });
  } else if (name === "password" && regex.test(value)) {
   setState({ ...state, [name]: "" });
  }

  // ============== Confirm Password edge cases ============== //
  else if (name === "confirmPassword" && value === "") {
   setState((state) => ({ ...state, [name]: "Please enter your password" }));
  } else if (name === "confirmPassword" && value.length <= 2) {
   setState({ ...state, [name]: "Please enter a password with at least 3 characters" });
  } else if (name === "confirmPassword" && !regex.test(value)) {
   setState({ ...state, [name]: "Please enter at least 1 special character" });
  } else if (name === "confirmPassword" && value !== user.password) {
   setState({ ...state, [name]: "Passwords do not match" });
  } else if (name === "confirmPassword" && value === user.password) {
   setState({ ...state, [name]: "" });
  }
 }
};

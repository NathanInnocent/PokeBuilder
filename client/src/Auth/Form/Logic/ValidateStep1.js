export const FormStepOneValidation = (input, setData, data) => {
  const name = input.target.name;
  const value = input.target.value;
  // stackoverflow
  const phoneRegex = /^[-+]?[0-9]+$/;
  // StackOverflow: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // ============== Country edge cases ============== //
  if (name === "country" && value === "") {
    setData({
      ...data,
      [name]: "Please select a country",
    });
  } else if (name === "country" && value !== "") {
    setData({ ...data, [name]: "" });
  }
  // ============== Full Name edge cases ============== //
  if (name === "fullName" && value === "") {
    setData({
      ...data,
      [name]: "Please enter a name",
    });
  } else if (name === "fullName" && Number(value)) {
    setData({
      ...data,
      [name]: "A name should not have any numbers!",
    });
  } else if (name === "fullName" && value !== "") {
    setData({ ...data, [name]: "" });
  }
  // ============== Phone number edge cases ==============//
  if (name === "phoneNumber" && value === "") {
    setData({
      ...data,
      [name]: "Please enter a phone number",
    });
  } else if (name === "phoneNumber" && isNaN(value)) {
    setData({
      ...data,
      [name]: "Please enter numbers only. Format is XXX-XXX-XXXX",
    });
  } else if (name === "phoneNumber" && value.length < 10) {
    setData({
      ...data,
      [name]: "Input should be at least 10 numbers long",
    });
  } else if (name === "phoneNumber" && value.length > 15) {
    setData({
      ...data,
      [name]: "Please enter a valid phone number",
    });
  } else if (name === "phoneNumber" && value.match(phoneRegex)) {
    setData({ ...data, [name]: "" });
  }
  // ============== Address edge cases ============== //
  if (name === "address" && value === "") {
    setData({
      ...data,
      [name]: "Please enter a valid address",
    });
  } else if (name === "address" && Number(value)) {
    setData({
      ...data,
      [name]: "Please do not include any numbers in street address",
    });
  } else if (name === "address" && value.length > 3) {
    setData({
      ...data,
      [name]: "",
    });
  }
  // ============== Address number edge cases ============== //
  if (name === "addressNumber" && value === "") {
    setData({
      ...data,
      [name]: "Please enter a valid address number",
    });
  } else if (name === "addressNumber" && isNaN(value)) {
    setData({
      ...data,
      [name]: "Please enter numbers only",
    });
  } else if (name === "addressNumber" && Number(value)) {
    setData({
      ...data,
      [name]: "",
    });
  }
  // ============== Email edge cases ============== //
  if (name === "email" && value === "") {
    setData({
      ...data,
      [name]: "Please enter an email",
    });
  } else if (name === "email" && !emailRegex.test(value)) {
    setData({
      ...data,
      [name]: "Please enter a valid email",
    });
  } else if (name === "email" && emailRegex.test(value)) {
    setData({
      ...data,
      [name]: "",
    });
  }
  // ============== Territory edge cases ============== //
  if (name === "territory" && value === "") {
    setData({
      ...data,
      [name]: "Please select a province/territory",
    });
  } else if (name === "territory" && value !== "") {
    setData({ ...data, [name]: "" });
  }
  // ============== Postal code edge cases ============== //
  if (name === "postalCode" && value === "") {
    setData({
      ...data,
      [name]: "Please enter a postal code",
    });
  } else if (name === "postalCode" && value !== "") {
    setData({ ...data, [name]: "" });
  }
};

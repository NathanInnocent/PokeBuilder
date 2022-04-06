export const FormStepTwoValidation = (input, setData, data) => {
  const name = input.target.name;
  const value = input.target.value;

  // ============== Card number edge cases ============== //
  if (name === "creditCard" && value === "") {
    setData({
      ...data,
      [name]: "Please enter a card number",
    });
  } else if (name === "creditCard" && isNaN(value)) {
    setData({
      ...data,
      [name]: "Please only enter numbers",
    });
  } else if (name === "creditCard" && value.length < 16) {
    setData({
      ...data,
      [name]: "Please enter a valid card number, it should have 16 digits",
    });
  } else if (name === "creditCard" && value.length > 16) {
    setData({
      ...data,
      [name]: "Please enter a valid card number, it should have 16 digits",
    });
  } else if (name === "creditCard" && value.length === 16) {
    setData({
      ...data,
      [name]: "",
    });
  }
  // ============== Card name edge cases ============== //
  if (name === "creditCardName" && value === "") {
    setData({
      ...data,
      [name]: "Please enter a card name",
    });
  } else if (name === "creditCardName" && Number(value)) {
    setData({
      ...data,
      [name]: "Please enter a valid card name, it should not be a number",
    });
  } else if (name === "creditCardName" && isNaN) {
    setData({
      ...data,
      [name]: "",
    });
  }
  // ============== Expiration month edge cases ============== //
  if (name === "expirationMonth" && value === "") {
    setData({
      ...data,
      [name]: "Please enter a month",
    });
  } else if (name === "expirationMonth" && value !== "") {
    setData({
      ...data,
      [name]: "",
    });
  }
  // ============== Expiration Year edge cases ============== //
  if (name === "expirationYear" && value === "") {
    setData({ ...data, [name]: "Please enter a year" });
  } else if (name === "expirationYear" && isNaN(value)) {
    setData({ ...data, [name]: "Please enter numbers only" });
  } else if (name === "expirationYear" && value.length !== 4) {
    setData({
      ...data,
      [name]: "Please enter a valid year in this format: XXXX",
    });
  } else if (name === "expirationYear" && value.length === 4) {
    setData({ ...data, [name]: "" });
  }

  // ============== CVV edge cases ============== //
  if (name === "cvv" && value === "") {
    setData({
      ...data,
      [name]: "Please enter a CVV",
    });
  } else if (name === "cvv" && isNaN(value)) {
    setData({
      ...data,
      [name]: "Please enter a valid CVV, it should only contain numbers",
    });
  } else if (name === "cvv" && (value.length < 3 || value.length > 4)) {
    setData({
      ...data,
      [name]: "Please enter a valid CVV, it should have 3 or 4 digits",
    });
  } else if (name === "cvv" && (value.length === 3 || value.length === 4)) {
    setData({
      ...data,
      [name]: "",
    });
  }
};

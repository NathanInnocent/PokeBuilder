import { useState, useEffect } from "react";
import { FormStepTwoValidation } from "./Logic/ValidateStep2";

import {
  Button,
  Container,
  ErrorMessage,
  Input,
  InputContainer,
  Label,
  Section,
  Select,
  Title,
} from "./Components/FormStyles";

export const PaymentDetail = ({
  userInformation,
  handleOnChange,
  setFormStep,
  formStep,
  errorMessage,
  setErrorMessage,
}) => {
  const [validUserInformation, setvalidUserInformation] = useState(false);

  useEffect(() => {
    if (
      // ============================================= Temp
      userInformation.creditCard !== "" &&
      userInformation.creditCardName !== "" &&
      userInformation.cvv !== "" &&
      userInformation.expirationMonth !== "" &&
      userInformation.expirationYear !== "" &&
      // Check if there are no error messages
      errorMessage.creditCard === "" &&
      errorMessage.creditCardName === "" &&
      errorMessage.cvv === "" &&
      errorMessage.expirationMonth === "" &&
      errorMessage.expirationYear === ""
    ) {
      setvalidUserInformation(true);
    } else {
      setvalidUserInformation(false);
    }
  }, [userInformation, errorMessage]);

  // Use moment instead of hardcoded months
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Container>
      <div>
        <Title>Payment Details</Title>
        {/* Credit Card */}
        <InputContainer>
          <Label>Card number</Label>
          <Input
            value={userInformation.creditCard}
            name="creditCard"
            type="text"
            onBlur={(e) =>
              FormStepTwoValidation(e, setErrorMessage, errorMessage)
            }
            onChange={(ev) => handleOnChange(ev)}
            autoComplete="off"
            required
          />
          <ErrorMessage>{errorMessage.creditCard}</ErrorMessage>
        </InputContainer>
        {/* Credit Card name */}
        <InputContainer>
          <Label>Card Name</Label>
          <Input
            value={userInformation.creditCardName}
            name="creditCardName"
            type="text"
            onBlur={(e) =>
              FormStepTwoValidation(e, setErrorMessage, errorMessage)
            }
            onChange={(ev) => handleOnChange(ev)}
            autoComplete="off"
            required
          />
          <ErrorMessage>{errorMessage.creditCardName}</ErrorMessage>
        </InputContainer>

        {/* Flex container */}
        <Section
          style={{
            justifyContent: "space-between",
            borderBottom: "none",
            alignItems: "initial",
            marginBottom: "30px",
          }}
        >
          {/* Input Month */}
          <InputContainer style={{ width: "30%" }}>
            <Label>Expiration</Label>
            <Select
              value={userInformation.expirationMonth}
              name="expirationMonth"
              onChange={(ev) => handleOnChange(ev)}
              style={{ width: "70%" }}
              onBlur={(e) =>
                FormStepTwoValidation(e, setErrorMessage, errorMessage)
              }
              autoComplete="off"
              required
            >
              <option value="" selected disabled>
                Month
              </option>
              {/* Make each month an option */}
              {monthNames.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </Select>
            <ErrorMessage>{errorMessage.expirationMonth}</ErrorMessage>
          </InputContainer>
          {/* Input Year */}
          <InputContainer>
            <Label>Year</Label>
            <Input
              value={userInformation.expirationYear}
              name="expirationYear"
              onChange={(ev) => handleOnChange(ev)}
              style={{ width: "40%", textAlign: "center" }}
              onBlur={(e) =>
                FormStepTwoValidation(e, setErrorMessage, errorMessage)
              }
              autoComplete="off"
              type="text"
              placeholder="xxxx"
              required
            />
            <ErrorMessage>{errorMessage.expirationYear}</ErrorMessage>
          </InputContainer>
          {/* CCV */}
          <InputContainer>
            <Label>CVV</Label>
            <Input
              value={userInformation.cvv}
              name="cvv"
              type="text"
              onBlur={(e) =>
                FormStepTwoValidation(e, setErrorMessage, errorMessage)
              }
              onChange={(ev) => handleOnChange(ev)}
              autoComplete="off"
              style={{ width: "40%", textAlign: "center" }}
              required
            />
            <ErrorMessage>{errorMessage.cvv}</ErrorMessage>
          </InputContainer>
        </Section>
      </div>
      {/* Button to go to back a page */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          margin: "40px 0px",
          justifyContent: "space-around",
        }}
      >
        <Button
          style={{
            cursor: "pointer",
            backgroundColor: "hsl(204, 8%, 76%)",
            color: "white",
          }}
          onClick={() => {
            setFormStep(formStep - 1);
          }}
        >
          Back
        </Button>
        {/* Button to go to next page */}
        <Button
          style={{
            cursor: `${validUserInformation === true ? "pointer" : "initial"}`,
            backgroundColor: `${
              validUserInformation === true
                ? "hsl(208, 100%, 51%)"
                : "hsl(208, 100%, 81%)"
            }`,
            color: `${validUserInformation === true ? "white" : "#8a8a8a"}`,
          }}
          onClick={() => {
            if (validUserInformation === true) {
              setFormStep(formStep + 1);
            }
          }}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

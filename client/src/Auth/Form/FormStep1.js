import { useState, useEffect } from "react";
import { FormStepOneValidation } from "./Logic/ValidateStep1";
import {
  Button,
  Container,
  ErrorMessage,
  Input,
  InputContainer,
  Label,
  Select,
  Title,
} from "./Components/FormStyles";

export const ShippingAddress = ({
  userInformation,
  countryList,
  handleOnChange,
  territoryList,
  setFormStep,
  formStep,
  errorMessage,
  setErrorMessage,
}) => {
  // State boolean for form next
  const [validUserInformation, setvalidUserInformation] = useState(false);

  // Form validation function
  useEffect(() => {
    if (
      // ============================================= Temp
      userInformation.country !== "" &&
      userInformation.address !== "" &&
      userInformation.postalCode !== "" &&
      userInformation.territory !== "" &&
      userInformation.addressNumber !== "" &&
      userInformation.fullName !== "" &&
      userInformation.email !== "" &&
      userInformation.phoneNumber !== "" &&
      // Check if there are no error messages
      errorMessage.phoneNumber === "" &&
      errorMessage.fullName === "" &&
      errorMessage.email === "" &&
      errorMessage.country === "" &&
      errorMessage.address === "" &&
      errorMessage.postalCode === "" &&
      errorMessage.territory === "" &&
      errorMessage.addressNumber === ""
    ) {
      setvalidUserInformation(true);
    } else setvalidUserInformation(false);
  }, [userInformation, errorMessage]);

  return (
    <Container>
      <Title>Shipping Detail</Title>
      {/* Country Section */}
      <InputContainer>
        <Label>Country/Region</Label>
        <Select
          value={userInformation?.country}
          name="country"
          onChange={(ev) => handleOnChange(ev)}
          onBlur={(e) =>
            FormStepOneValidation(e, setErrorMessage, errorMessage)
          }
          autoComplete="on"
          required
        >
          <option value="" selected disabled>
            Select a Country/Region
          </option>
          {countryList?.map((country, i) => (
            <option key={i} value={country.name}>
              {country.name}
            </option>
          ))}
        </Select>
        <ErrorMessage>{errorMessage.country}</ErrorMessage>
      </InputContainer>
      {/* Full name */}
      <InputContainer>
        <Label>Full name</Label>
        <Input
          value={userInformation.fullName}
          name="fullName"
          type="text"
          category="ShippingAddress"
          onBlur={(e) =>
            FormStepOneValidation(e, setErrorMessage, errorMessage)
          }
          onChange={(ev) => handleOnChange(ev)}
          autoComplete="none"
          required
        />
        <ErrorMessage>{errorMessage.fullName}</ErrorMessage>
      </InputContainer>
      {/* Phone number */}
      <InputContainer>
        <Label>Phone number</Label>
        <Input
          value={userInformation.phoneNumber}
          name="phoneNumber"
          type="tel"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          placeholder="123-456-7890"
          onChange={(ev) => handleOnChange(ev)}
          onBlur={(ev) =>
            FormStepOneValidation(ev, setErrorMessage, errorMessage)
          }
          autoComplete="none"
          required
        />
        <ErrorMessage>{errorMessage.phoneNumber}</ErrorMessage>
      </InputContainer>
      {/* Address street name */}
      <InputContainer>
        <Label>Street Name</Label>
        <Input
          value={userInformation.address}
          name="address"
          type="text"
          placeholder="Street address or P.O. box"
          onChange={(ev) => handleOnChange(ev)}
          onBlur={(ev) =>
            FormStepOneValidation(ev, setErrorMessage, errorMessage)
          }
          autoComplete="none"
          required
        />
        {/* ADD SPACING */}
        <ErrorMessage>{errorMessage.address}</ErrorMessage>
        <Label>Address Number</Label>
        {/* Address house number */}
        <Input
          value={userInformation.addressNumber}
          name="addressNumber"
          type="text"
          placeholder="Apt, Suite, Unit, Building"
          onChange={(ev) => handleOnChange(ev)}
          onBlur={(ev) =>
            FormStepOneValidation(ev, setErrorMessage, errorMessage)
          }
          autoComplete="none"
          required
        />
        <ErrorMessage>{errorMessage.addressNumber}</ErrorMessage>
      </InputContainer>
      {/* Email address */}
      <InputContainer>
        <Label>Email</Label>
        <Input
          value={userInformation.email}
          name="email"
          type="email"
          onChange={(ev) => handleOnChange(ev)}
          onBlur={(ev) =>
            FormStepOneValidation(ev, setErrorMessage, errorMessage)
          }
          autoComplete="none"
          required
        />
        <ErrorMessage>{errorMessage.email}</ErrorMessage>
      </InputContainer>
      {/* Selected neither USA || Canada*/}
      {userInformation?.country !== "Canada" &&
        userInformation?.country !== "United States" && (
          <>
            <InputContainer>
              <Label>Province/Territory</Label>
              <Input
                value={userInformation.territory}
                name="territory"
                type="text"
                onChange={(ev) => handleOnChange(ev)}
                onBlur={(ev) =>
                  FormStepOneValidation(ev, setErrorMessage, errorMessage)
                }
                autoComplete="none"
                required
              />
              <ErrorMessage>{errorMessage.territory}</ErrorMessage>
            </InputContainer>
            <InputContainer>
              <Label>Postal code</Label>
              <Input
                value={userInformation.postalCode}
                name="postalCode"
                type="text"
                onChange={(ev) => handleOnChange(ev)}
                style={{ width: "25%", textAlign: "center" }}
                onBlur={(ev) =>
                  FormStepOneValidation(ev, setErrorMessage, errorMessage)
                }
                autoComplete="none"
                required
              />
              <ErrorMessage>{errorMessage.postalCode}</ErrorMessage>
            </InputContainer>
          </>
        )}
      {/* Selected  Canada*/}
      {userInformation?.country === "Canada" && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <InputContainer>
            <Label>Province</Label>
            <Select
              value={userInformation.territory}
              name="territory"
              onChange={(e) => handleOnChange(e)}
              style={{ width: "100%" }}
              onBlur={(e) =>
                FormStepOneValidation(e, setErrorMessage, errorMessage)
              }
              autoComplete="none"
              required
            >
              <option value="" selected disabled>
                Provinces
              </option>
              {/* List out all provinces */}
              {territoryList[1].states.map((provinces, i) => (
                <option key={i} value={provinces.name}>
                  {provinces.name}
                </option>
              ))}
            </Select>
            <ErrorMessage>{errorMessage.territory}</ErrorMessage>
          </InputContainer>
          {/* Postal Code*/}
          <InputContainer>
            <Label>Postal code</Label>
            <Input
              value={userInformation.postalCode}
              name="postalCode"
              type="text"
              onChange={(ev) => handleOnChange(ev)}
              style={{ width: "50%", textAlign: "center" }}
              onBlur={(ev) =>
                FormStepOneValidation(ev, setErrorMessage, errorMessage)
              }
              autoComplete="none"
              required
            />
            <ErrorMessage>{errorMessage.postalCode}</ErrorMessage>
          </InputContainer>
        </div>
      )}
      {/* Selected  USA*/}
      {userInformation?.country === "United States" && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InputContainer>
            <Label>States</Label>
            <Select
              value={userInformation.territory}
              name="territory"
              onChange={(e) => handleOnChange(e)}
              style={{ width: "40%" }}
              onBlur={(ev) =>
                FormStepOneValidation(ev, setErrorMessage, errorMessage)
              }
              autoComplete="none"
              required
            >
              <option value="" selected disabled>
                States
              </option>
              {/* List out all provinces */}
              {territoryList[0].states.map((state, i) => (
                <option key={i} value={state.name}>
                  {state.name}
                </option>
              ))}
            </Select>
            <ErrorMessage>{errorMessage.territory}</ErrorMessage>
          </InputContainer>
          {/* Postal Code*/}
          <InputContainer>
            <Label>Postal code</Label>
            <Input
              value={userInformation.postalCode}
              name="postalCode"
              type="text"
              onblur={(ev) =>
                FormStepOneValidation(ev, setErrorMessage, errorMessage)
              }
              onChange={(ev) => handleOnChange(ev)}
              style={{ width: "120%", textAlign: "center" }}
              autoComplete="none"
              required
            />
            <ErrorMessage>{errorMessage.postalCode}</ErrorMessage>
          </InputContainer>
        </div>
      )}
      {/* Button to go to next page */}
      <Button
        disabled={validUserInformation === true ? false : true}
        style={{
          cursor: `${validUserInformation === true ? "pointer" : "initial"}`,
          backgroundColor: `${
            validUserInformation === true
              ? "hsl(208, 100%, 51%)"
              : "hsl(208, 100%, 81%)"
          }`,
          color: `${validUserInformation === true ? "white" : "#8a8a8a"}`,
          justifySelf: "end",
          marginLeft: "auto",
        }}
        onClick={() => {
          if (validUserInformation === true) {
            setFormStep(formStep + 1);
          }
        }}
      >
        Next
      </Button>
    </Container>
  );
};

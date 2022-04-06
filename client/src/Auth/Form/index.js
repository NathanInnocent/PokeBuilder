import { useState, useEffect, useContext } from "react";
import { ShippingAddress } from "./FormStep1";
import { PaymentDetail } from "./FormStep2";
import { ConfirmationDetail } from "./FormStep3";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import { OrderConfirmed } from "./OrderConfirmed";
import { OrderError } from "./OrderError";
import { ProcessingPurchase } from "./ProcessingPurchase";
import { Form, ProgressBar, ProgressBarContainer } from "./Components/FormStyles";
import { sumbitForm } from "./Logic/Submit";

export const CheckoutForm = () => {
 //Form order: ShippingAddress(1) -> PaymentDetail(2) -> ConfirmationDetail(3) -> OrderConfirmed("orderConfirmed") || Error("error")

 const { shoppingCart } = useContext(ShoppingCartContext);

 // Data that will be sent to the server
 const shoppingMap = {};

 shoppingCart.forEach((item) => {
  const { _id, name } = item;
  if (item._id in shoppingMap) {
   shoppingMap[_id].quantity += 1;
  } else {
   shoppingMap[_id] = {
    _id,
    quantity: 1,
    name: name,
    price: item.price.slice(1),
   };
  }
 });

 // State to store country list Information
 const [countryList, setCountryList] = useState(null);
 // State to store states/provinces
 const [territoryList, setTerritoryList] = useState(null);
 // State to store user Information
 const [userInformation, setUserInformation] = useState({
  // Form Step 1
  address: "",
  addressNumber: "",
  country: "",
  territory: "",
  fullName: "",
  email: "",
  postalCode: "",
  phoneNumber: "",

  //Form Step 2
  creditCard: "",
  creditCardName: "",
  cvv: "",
  expirationMonth: "",
  expirationYear: "",
 });
 // Loading state
 const [isLoading, setIsLoading] = useState(false);
 //Form steps
 const [formStep, setFormStep] = useState(1);

 //Progress bar
 const [maxFormStep, setMaxFormStep] = useState(3);

 //Default to -100 -> left -100%
 const [formProgress, setFormProgress] = useState(-100);

 // Error message
 const [errorMessage, setErrorMessage] = useState({
  // Form Step 1
  address: "",
  addressNumber: "",
  country: "",
  territory: "",
  fullName: "",
  email: "",
  postalCode: "",
  phoneNumber: "",
  //Form Step 2
  creditCard: "",
  creditCardName: "",
  cvv: "",
  expirationMonth: "",
  expirationYear: "",
 });

 const [serverResponseMessage, setserverResponseMessage] = useState("");

 useEffect(() => {
  //-100 is the default value
  //
  setFormProgress(-100 + (formStep / maxFormStep) * 100);
 }, [formStep]);

 // fetch country data from API
 useEffect(() => {
  setIsLoading(true);
  fetch("/api/get-country-data")
   .then((res) => {
    if (res.ok) {
     return res.json();
    }
    throw new Error("Something went wrong while retrieving data.");
   })
   .then((result) => {
    setCountryList(result.data[0].CountryList);
    setTerritoryList(result.data[0].Territories);
    setIsLoading(false);
   })
   .catch((error) => {
    setFormStep(400);
    setserverResponseMessage(error);
   });
 }, []);

 // Update form input value field
 const handleOnChange = (input) => {
  const name = input.target.name;
  const value = input.target.value;

  setUserInformation({ ...userInformation, [name]: value });
 };

 return (
  // If isLoading is true, show loading animation
  isLoading === true ? (
   <div>Fetching data...</div>
  ) : //If loading is false, BUT there are no items inside cart
  shoppingCart.length === 0 ? (
   <Form>
    <div
     style={{
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
     }}
    >
     There are no items inside your cart!
    </div>
   </Form>
  ) : (
   //If loading is false && there are item(s) inside cart
   <Form
    // Removes autofill
    autoComplete="new-password"
    onSubmit={(ev) => {
     ev.preventDefault();

     sumbitForm(shoppingCart, setFormStep, shoppingMap, setserverResponseMessage);
    }}
   >
    {/* Form step indicator*/}
    {formStep !== 200 && formStep !== 400 && formStep !== "processingPurchase" ? (
     // Show steps if formStep is not equal to confirmedOrder or errorOrder
     <ProgressBarContainer>
      <ProgressBar style={{ left: `${Math.round(formProgress)}%` }} />
     </ProgressBarContainer>
    ) : null}

    {/* Shipping detail*/}
    {formStep === 1 && (
     <ShippingAddress
      // Error handling
      handleOnChange={handleOnChange}
      // Error message
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
      // DropDown data
      countryList={countryList}
      territoryList={territoryList}
      // User input
      setUserInformation={setUserInformation}
      userInformation={userInformation}
      // Form step
      setFormStep={setFormStep}
      formStep={formStep}
     />
    )}
    {/* Payment Detail */}
    {formStep === 2 && (
     <PaymentDetail
      handleOnChange={handleOnChange}
      userInformation={userInformation}
      setUserInformation={setUserInformation}
      setFormStep={setFormStep}
      formStep={formStep}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
     />
    )}
    {/* Confirmation Detail */}
    {formStep === 3 && (
     <ConfirmationDetail
      handleOnChange={handleOnChange}
      userInformation={userInformation}
      setUserInformation={setUserInformation}
      setFormStep={setFormStep}
      formStep={formStep}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
      itemsInsideCart={Object.values(shoppingMap)}
     />
    )}
    {/* When order is confirmed */}
    {formStep === 200 && <OrderConfirmed userInformation={userInformation} itemsInsideCart={Object.values(shoppingMap)} />}
    {/* Error page */}
    {formStep === 400 && <OrderError message={serverResponseMessage} />}
    {/* Processing order */}
    {formStep === "processingPurchase" && <ProcessingPurchase />}
   </Form>
  )
 );
};

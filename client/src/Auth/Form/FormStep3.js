import styled from "styled-components";
import { Button, Container, SubTitle, Title } from "./Components/FormStyles";

export const ConfirmationDetail = ({
  userInformation,
  setFormStep,
  formStep,
  itemsInsideCart,
}) => {
  return (
    <Container>
      <Title>Please review your information</Title>
      {/* Shipping detail */}
      <div>
        <SubTitle style={{ fontSize: "1.4em", fontWeight: "bold" }}>
          Shipping Detail
        </SubTitle>
        <div style={{ marginBottom: "5px" }}>
          Name: {userInformation.fullName}
        </div>
        <div style={{ marginBottom: "5px" }}>
          Address:{" "}
          {`${userInformation.address} ${userInformation.addressNumber}`}
        </div>
        <div style={{ marginBottom: "5px" }}>
          Phone: {userInformation.phoneNumber}
        </div>
        <div style={{ marginBottom: "5px" }}>
          Postal code: {userInformation.postalCode}
        </div>
        <div style={{ marginBottom: "5px" }}>
          Email: {userInformation.email}
        </div>
        <div style={{ marginBottom: "5px" }}>
          Country: {userInformation.country}
        </div>
        <div>State/Province: {userInformation.territory}</div>
      </div>
      {/* Payment detail */}
      <div>
        <SubTitle style={{ fontSize: "1.4em", fontWeight: "bold" }}>
          Payment Detail
        </SubTitle>
        <div>
          Credit card: xx{String(userInformation.creditCard).substr(-2)}
        </div>
        <div>Credit card name: {userInformation.creditCardName}</div>
      </div>
      {/* Order detail */}
      <div>
        <SubTitle style={{ fontSize: "1.4em", fontWeight: "bold" }}>
          Order
        </SubTitle>
        {/* Custom made column... should of used Li && Ul */}
        <Table>
          <TableMainColumn style={{ flex: "1" }}>
            Product Name
            {itemsInsideCart.map((item, i) => (
              <TableElement key={i}>{`${item.name.split(" ")[0]} ${
                item.name.split(" ")[1]
              }...`}</TableElement>
            ))}
          </TableMainColumn>
          <TableSecondaryColumn>
            Price
            {itemsInsideCart.map((item, i) => (
              //Make flexbox Name| amount | cose
              <TableElement key={i}>${item.price}</TableElement>
            ))}
          </TableSecondaryColumn>
          <TableSecondaryColumn>
            Qty
            {itemsInsideCart.map((item, i) => (
              //Make flexbox Name| amount | cose
              <TableElement key={i}>x{item.quantity}</TableElement>
            ))}
          </TableSecondaryColumn>
          <TableSecondaryColumn>
            Subtotal
            {itemsInsideCart.map((item, i) => (
              //Make flexbox Name| amount | cose
              <TableElement key={i}>${item.price * item.quantity}</TableElement>
            ))}
            <TableElement style={{ fontSize: "1.1em" }}>
              Total: ${" "}
              {itemsInsideCart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </TableElement>
          </TableSecondaryColumn>
        </Table>
      </div>
      {/* Button to go to back a page */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
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
        {/* Button to submit */}
        <Button
          style={{
            cursor: "pointer",
            backgroundColor: "rgb(4,170,109)",
            color: "white",
          }}
          type="submit"
        >
          Confirm
        </Button>
      </div>
    </Container>
  );
};

const Table = styled.div`
  display: flex;
  font-weight: bold;
`;

const TableMainColumn = styled.div`
  flex: 1;
  font-size: 1.1em;
`;
const TableSecondaryColumn = styled.div`
  flex: 0.5;
  text-align: right;
  font-size: 1.1em;
`;

const TableElement = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  border-top: 1px solid black;
  font-size: 0.95em;
`;

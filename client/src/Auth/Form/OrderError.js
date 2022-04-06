import { Button, Container, SubTitle, Title } from "./Components/FormStyles";
import { useHistory } from "react-router-dom";

export const OrderError = ({ message }) => {
  let history = useHistory();
  return (
    <Container
      style={{
        height: "500px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title style={{ color: "red", borderBottom: "none" }}>
        There was an error with the order
      </Title>
      <SubTitle
        style={{ marginBottom: "5px", fontSize: "1.2em", borderBottom: "none" }}
      >
        {message}
      </SubTitle>
      <SubTitle
        style={{
          marginBottom: "5px",
          fontSize: "1.2em",
          borderBottom: "none",
          color: "red",
        }}
      >
        Please try again later
      </SubTitle>
      {/* Return to cart */}
      <Button
        style={{
          cursor: "pointer",
          backgroundColor: "hsl(204, 8%, 76%)",
          color: "white",
          width: "200px",
        }}
        onClick={() => history.push(`/agent-handler/cart`)}
      >
        Return to cart
      </Button>
    </Container>
  );
};

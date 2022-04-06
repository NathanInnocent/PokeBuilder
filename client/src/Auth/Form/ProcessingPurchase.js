import { Container, Title } from "./Components/FormStyles";

export const ProcessingPurchase = () => {
  return (
    <Container
      style={{
        height: "500px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title style={{ borderBottom: "none" }}>Processing Purchase...</Title>
    </Container>
  );
};

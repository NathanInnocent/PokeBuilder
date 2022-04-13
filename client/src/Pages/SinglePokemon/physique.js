import { Container, FlexHorizontalContainer, StatLabel, StatValue } from "./styling";

export const Physique = ({ weight, height, species }) => {
 return (
  <FlexHorizontalContainer style={{ textAlign: "center" }}>
   {/* Species */}
   <Container style={{ borderRight: "1px solid gray" }}>
    <StatValue>{species}</StatValue>
   </Container>

   {/* Weight */}
   <Container style={{ borderRight: "1px solid gray" }}>
    <StatValue>{weight} lbs.</StatValue>
    <StatLabel>Weight</StatLabel>
   </Container>

   {/* Height */}
   <Container>
    <StatValue>{height} m</StatValue>
    <StatLabel>Height</StatLabel>
   </Container>
  </FlexHorizontalContainer>
 );
};

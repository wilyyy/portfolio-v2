import styled from "styled-components";
import Button from "../Button";

export default function SuccessScreen({ changeStatus = () => {} }) {
   return (
      <Container>
         <h2>Message sent succesfully!</h2>
         <Button onButtonCLick={changeStatus}>Send Another!</Button>
      </Container>
   );
}

const Container = styled.div`
   width: 100%;
   height: 85%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
`;

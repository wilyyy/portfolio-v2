import styled from "styled-components";
import TypewritterText from "./TypewritterText";

const Preloader = () => {
   return (
      <Container>
         <Row>
            <Text color="green">william_laurel@alvarez</Text>
            <Text color="purple"> ~/: </Text>
         </Row>
         <TypewritterText text="portfolio is currently a work in progress" delay={40} />
         {/* <TypewritterText text="npm start willy-portfolio" delay={40} /> */}
      </Container>
   );
};

export default Preloader;

const Container = styled.div`
   width: 100%;
   height: 100%;
   background-color: #000;
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: "consolas";
`;

const Row = styled.p`
   display: flex;
`;

const Text = styled.p`
   color: ${(props) => props.color};
`;

import styled from "styled-components";
import { motion } from "framer-motion";

import TypewritterText from "./TypewritterText";
import { MediaQuery } from "../utils/MediaQuery";

const Preloader = () => {
   return (
      <Container
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ type: "tween", duration: 1 }}
      >
         <Row>
            <Text color="green">william_laurel@alvarez</Text>
            <Text color="purple"> ~/: </Text>
         </Row>
         <TypewritterText
            text="portfolio's mobile experience is a work in progress"
            delay={40}
         />
         {/* <TypewritterText text="npm start willy-portfolio" delay={40} /> */}
      </Container>
   );
};

export default Preloader;

const Container = styled(motion.div)`
   width: 100%;
   height: 100%;
   background-color: #000;
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: "consolas";

   @media ${MediaQuery.screenMobile} {
      padding: 5%;
      flex-direction: column;
      /* height: 100%;
      max-height: -webkit-fill-available;
      max-height: -moz-available; */
   }
`;

const Row = styled.p`
   display: flex;
`;

const Text = styled.p`
   color: ${(props) => props.color};
`;

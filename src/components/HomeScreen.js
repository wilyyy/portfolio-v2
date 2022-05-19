import styled from "styled-components";
import { motion } from "framer-motion";

import { useTheme } from "../utils/AppProvider";
import Header from "./Header/Header";
import LightSwitch from "./LightSwitch";
import BackgroundPatterns from "./BackgroundPatterns";
import Nav from "./Nav/Nav";

export default function HomeScreen() {
   const { theme } = useTheme();

   return (
      <Home
         initial="pageInitial"
         animate="pageAnimate"
         variants={{
            pageInitial: {
               opacity: 0,
            },
            pageAnimate: {
               opacity: 1,
               transition: { type: "tween", duration: 1 },
            },
         }}
      >
         <Header />
         <Placeholder>
            <LightSwitch />
         </Placeholder>
         <Footer>
            <Nav />
         </Footer>
         {theme === "dark" && <BackgroundPatterns />}
      </Home>
   );
}

const Home = styled(motion.div)`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
   overflow-y: hidden;
`;

const Placeholder = styled.div`
   width: 100%;
   height: 83%;
   position: relative;

   /* background: red; */
`;

const Footer = styled.div`
   width: 100%;
   height: 10%;
   display: flex;
   justify-content: center;
   align-items: center;
   background: red;
`;

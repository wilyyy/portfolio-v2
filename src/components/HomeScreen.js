import styled from "styled-components";
import { motion } from "framer-motion";

import { useTheme, useStatus } from "../utils/AppProvider";
import Header from "./Header/Header";
import LightSwitch from "./LightSwitch";
import BackgroundPatterns from "./BackgroundPatterns";
import Nav from "./Nav/Nav";
import ContentModal from "./ContentModals/ContentModal";
import Contact from "./Contact/Contact";
import Tools from "./Tools/Tools";
import About from "./About/About";
import CenterScreen from "./CenterScreen";

export default function HomeScreen() {
   const { theme } = useTheme();
   const { status } = useStatus();

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
         <Main>
            <Column>
               <Nav />
            </Column>
            <Center>
               {status === "work" && <ContentModal>Work</ContentModal>}
               {status === "info" && <About />}
               {status === "tools" && <Tools />}
               {status === "mail" && <Contact />}
               <CenterScreen />
            </Center>
            <Column right>
               <LightSwitch />
            </Column>
         </Main>

         {/* <Footer>
            <Nav />
         </Footer> */}
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
   overflow-x: hidden;
`;

const Main = styled.div`
   width: 100%;
   height: 93%;
   display: flex;
   position: relative;
`;

const Column = styled.div`
   width: 7%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   ${({ right }) =>
      right &&
      `
      align-items: flex-start;
      position: relative;
      top: 3%;
   `}
`;

const Center = styled.div`
   width: 86%;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
`;

// const Footer = styled.div`
//    width: 100%;
//    height: 10%;
//    display: flex;
//    justify-content: center;
//    align-items: center;
// `;

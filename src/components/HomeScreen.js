import styled from "styled-components";
import { motion } from "framer-motion";

import Header from "./Header/Header";
import LightSwitch from "./LightSwitch";

export default function HomeScreen() {
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
      </Home>
   );
}

const Home = styled(motion.div)`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Placeholder = styled.div`
   width: 100%;
   height: 93%;
   /* background: red; */
`;

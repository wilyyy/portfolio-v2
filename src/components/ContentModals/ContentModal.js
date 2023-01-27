import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { useTheme, useStatus } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import { ModalInit } from "@/src/utils/Animations";

export default function ContentModal({ children, flexDex = "column" }) {
   const { theme } = useTheme();
   const { status, setStatus } = useStatus();

   return (
      <AnimatePresence>
         <Container
            flexDex={flexDex}
            variants={ModalInit}
            initial="hidden"
            animate="visible"
            exit="exit"
            modal1_1={globalTheme[theme].modal1_1}
            modal1_2={globalTheme[theme].modal1_2}
            modal2_13={globalTheme[theme].modal2_13}
            modal2_2={globalTheme[theme].modal2_2}
            border={globalTheme[theme].border}
         >
            {children}
            <motion.h2
               whileHover={{ scale: 1.2 }}
               transition={{ type: "spring", stiffness: 500 }}
               className="close"
               onClick={() => setStatus("none")}
            >
               X
            </motion.h2>
         </Container>
      </AnimatePresence>
   );
}

const Container = styled(motion.div)`
   width: 80%;
   height: 90%;
   display: flex;
   flex-direction: ${(props) => props.flexDex};
   justify-content: space-between;
   border-radius: 19px;
   border: 1px solid ${(props) => props.border};
   background: linear-gradient(
         180deg,
         ${(props) => props.modal1_1},
         ${(props) => props.modal1_2} 85.42%
      ),
      linear-gradient(
         90.05deg,
         ${(props) => props.modal2_13} 0%,
         ${(props) => props.modal2_2} 44.42%,
         ${(props) => props.modal2_13} 102.76%
      );
   z-index: 2;
   position: relative;

   .close {
      position: absolute;
      z-index: 2;
      top: 1.5%;
      right: 3%;
      user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -o-user-select: none;
      cursor: pointer;
   }

   h3 {
      user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -o-user-select: none;
   }
`;

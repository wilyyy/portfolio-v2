import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import { ModalInit } from "@/src/utils/Animations";

export default function ContentModal({ children }) {
   const { theme } = useTheme();

   return (
      <AnimatePresence>
         <Container
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
            <Bottom>{children}</Bottom>
         </Container>
      </AnimatePresence>
   );
}

const Container = styled(motion.div)`
   width: 75%;
   height: 85%;
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
`;

const Bottom = styled.div``;

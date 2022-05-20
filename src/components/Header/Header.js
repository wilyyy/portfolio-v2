import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Github } from "@styled-icons/bootstrap/Github";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import { HoverZoom } from "@/src/utils/Animations";

import DateTime from "./DateTime";

export default function Header() {
   const { theme } = useTheme();

   return (
      <Container border={globalTheme[theme].border}>
         <Inner>
            <h5>willy-dev</h5>
            <DateTimeCont>
               <DateTime date />
               <p>&middot;</p>
               <DateTime time />
            </DateTimeCont>
            <SocialsCont color={globalTheme[theme].text}>
               <motion.a
                  whileHover={HoverZoom.hover}
                  whileTap={HoverZoom.tap}
                  transition={HoverZoom.transition}
                  href="https://github.com/wilyyy"
                  target="_blank"
               >
                  <Github />
               </motion.a>
               <motion.a
                  whileHover={HoverZoom.hover}
                  whileTap={HoverZoom.tap}
                  transition={HoverZoom.transition}
                  href="https://www.linkedin.com/in/william-alvarez-76b806149/"
                  target="_blank"
               >
                  <LinkedinSquare />
               </motion.a>
            </SocialsCont>
         </Inner>
      </Container>
   );
}

const Container = styled.div`
   width: 100%;
   height: 7%;
   border-bottom: 1px solid ${(props) => props.border};
   display: flex;
   justify-content: center;
   align-items: center;
   background: linear-gradient(
         180deg,
         rgba(0, 0, 0, 0) 29.81%,
         rgba(37, 43, 66, 0.2) 85.42%
      ),
      linear-gradient(90.05deg, rgba(0, 0, 0, 0.36) 0%, rgba(71, 83, 113, 0) 102.76%);
`;

const Inner = styled.div`
   width: 97%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const DateTimeCont = styled.div`
   width: 16%;
   display: flex;
   justify-content: space-between;
`;

const SocialsCont = styled.div`
   width: 5%;
   display: flex;
   justify-content: space-between;
   align-items: center;

   ${StyledIconBase} {
      width: 31px;
      height: 31px;
      color: ${(props) => props.color};
   }
`;

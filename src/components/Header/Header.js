import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Github } from "@styled-icons/bootstrap/Github";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";

import DateTime from "./DateTime";

export default function Header() {
   const { theme } = useTheme();

   return (
      <Container
         border={globalTheme[theme].border}
         gradient1={globalTheme[theme].gradient1}
         gradient2={globalTheme[theme].gradient2}
         gradient3={globalTheme[theme].gradient3}
         gradient4={globalTheme[theme].gradient4}
      >
         <Inner>
            <h5>willy-dev</h5>
            <DateTimeCont>
               <DateTime date />
               <p>&middot;</p>
               <DateTime time />
            </DateTimeCont>
            <SocialsCont color={globalTheme[theme].text}>
               <motion.a
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  href="https://github.com/wilyyy"
                  target="_blank"
               >
                  <Github />
               </motion.a>
               <motion.a
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 500 }}
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
         ${(props) => props.gradient1},
         ${(props) => props.gradient2}
      ),
      linear-gradient(
         90.05deg,
         ${(props) => props.gradient3} 0%,
         ${(props) => props.gradient4}
      );
`;

const Inner = styled.div`
   width: 97%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const DateTimeCont = styled.div`
   width: 19%;
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

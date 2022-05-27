import styled from "styled-components";
import { motion } from "framer-motion";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "../utils/ThemeConfig";

export default function Button({ src, text = "Button" }) {
   const { theme } = useTheme();

   return (
      <Container
         href={src}
         target="_blank"
         bg={
            theme === "dark"
               ? "linear-gradient(152.97deg, rgba(11, 15, 19, 0.83) 0%, rgba(30, 52, 72, 0.65) 100%)"
               : "#FAF8EB"
         }
         text={globalTheme[theme].text}
         border={globalTheme[theme].border}
         whileHover={{ scale: 1.1 }}
         transition={{ type: "spring", stiffness: 500 }}
         textShadow={globalTheme[theme].textShadow}
      >
         {text}
      </Container>
   );
}

const Container = styled(motion.a)`
   width: 100%;
   font-weight: 600;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 84px;
   background: ${(props) => props.bg};
   border: 1px solid ${(props) => props.border};
   font-size: 20px;
   color: ${(props) => props.text};
   border-radius: 16px;
   text-shadow: 0px 0px 10px ${(props) => props.textShadow};

   user-select: none;
   -moz-user-select: none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -o-user-select: none;
`;

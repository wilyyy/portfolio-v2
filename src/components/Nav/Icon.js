import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

import { HoverZoom } from "@/src/utils/Animations";
import { useTheme } from "@/src/utils/AppProvider";
import folderIconGlass from "@/public/folderIconGlass.svg";
import folderIconOutline from "@/public/folderIconOutline.svg";
import notepadIconGlass from "@/public/notepadIconGlass.svg";
import notepadIconOutline from "@/public/notepadIconOutline.svg";
import gearIconGlass from "@/public/gearIconGlass.svg";
import gearIconOutline from "@/public/gearIconOutline.svg";
import mailIconGlass from "@/public/mailIconGlass.svg";
import mailIconOutline from "@/public/mailIconOutline.svg";

export default function Icon({ folder, notepad, gear, mail, onButtonClick, isText }) {
   const { theme } = useTheme();

   return (
      <>
         {folder && (
            <Container
               whileHover={HoverZoom.hover}
               whileTap={HoverZoom.tap}
               onClick={onButtonClick}
               transition={HoverZoom.transition}
               height={isText ? "100px" : "auto"}
            >
               <Image
                  src={theme === "dark" ? folderIconGlass : folderIconOutline}
                  width="70"
                  height="58"
               />
               {isText && <p>Work</p>}
            </Container>
         )}

         {notepad && (
            <Container
               whileHover={HoverZoom.hover}
               whileTap={HoverZoom.tap}
               onClick={onButtonClick}
               transition={HoverZoom.transition}
               height={isText ? "100px" : "auto"}
            >
               <Image
                  src={theme === "dark" ? notepadIconGlass : notepadIconOutline}
                  width="55"
                  height="73"
               />
               {isText && <p>About</p>}
            </Container>
         )}

         {gear && (
            <Container
               whileHover={HoverZoom.hover}
               whileTap={HoverZoom.tap}
               onClick={onButtonClick}
               transition={HoverZoom.transition}
               height={isText ? "100px" : "auto"}
            >
               <Image
                  src={theme === "dark" ? gearIconGlass : gearIconOutline}
                  width="66"
                  height="66"
               />
               {isText && <p>Tools</p>}
            </Container>
         )}

         {mail && (
            <Container
               whileHover={HoverZoom.hover}
               whileTap={HoverZoom.tap}
               onClick={onButtonClick}
               transition={HoverZoom.transition}
               height={isText ? "100px" : "auto"}
            >
               <Image
                  src={theme === "dark" ? mailIconGlass : mailIconOutline}
                  width="75"
                  height="48"
               />
               {isText && <p>Contact</p>}
            </Container>
         )}
      </>
   );
}

const Container = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   width: auto;
   height: ${(props) => props.height};
   cursor: pointer;
`;

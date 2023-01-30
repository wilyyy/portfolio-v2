import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

import { useTheme } from "../utils/AppProvider";
import lightswitch_dark from "@/public/lightswitch_light.svg";
import lightswitch_outline from "@/public/lightswitch_outline.svg";

export default function LightSwitch() {
   const { theme, setTheme } = useTheme();

   return (
      <Container>
         <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 500 }}
            onClick={() => {
               setTheme(theme === "dark" ? "light" : "dark");
            }}
         >
            <Image
               src={theme === "dark" ? lightswitch_dark : lightswitch_outline}
               width={43}
               height={78}
            />
         </motion.div>

         <p>{theme === "dark" ? "Dark" : "Light"}</p>
      </Container>
   );
}

const Container = styled(motion.div)`
   width: 43px;
   height: 105px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
`;

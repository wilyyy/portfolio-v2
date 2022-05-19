import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

import BlobOne from "@/public/BlobOne.svg";
import BlobTwo from "@/public/BlobTwo.svg";
import BlobThree from "@/public/BlobThree.png";

export default function BackgroundPatterns() {
   const RandomScale = Math.floor(Math.random() * (1.4 - 0.9 + 1)) + 0.9;

   return (
      <Container>
         <motion.div
            animate={{
               scaleY: [1, RandomScale, RandomScale + 0.5, RandomScale - 0.5, 1],
               skew: [1, RandomScale, RandomScale + 0.5, RandomScale - 0.5, 1],
               rotate: [20, -150, 360, 20],
               y: ["0vh", "-20vh"],
               x: ["0vh", "-40vh"],
            }}
            transition={{
               yoyo: Infinity,
               duration: 3,
               ease: "linear",
            }}
            className="top"
         >
            <Image src={BlobOne} width={270} height={428} />
         </motion.div>
         <motion.div
            animate={{
               scaleY: [1, RandomScale, RandomScale + 0.5, RandomScale - 0.5, 1],
               skew: [1, RandomScale, RandomScale + 0.5, RandomScale - 0.5, 1],
               rotate: [20, -150, 360, 20],
               // y: ["0vh", "-20vh"],
               // x: ["0vh", "-40vh"],
            }}
            transition={{
               yoyo: Infinity,
               duration: 3,
               ease: "easeIn",
            }}
            className="right"
         >
            <Image src={BlobTwo} width={416} height={244} />
         </motion.div>
         <motion.div
            animate={{
               scaleY: [1, RandomScale, RandomScale + 0.5, RandomScale - 0.5, 1],
               skew: [1, RandomScale, RandomScale + 0.5, RandomScale - 0.5, 1],
               rotate: [20, -150, 360, 20],
               // y: ["0vh", "-20vh"],
               // x: ["0vh", "-40vh"],
            }}
            transition={{
               yoyo: Infinity,
               duration: 3,
               ease: "easeInOut",
            }}
            className="bottom"
         >
            <Image src={BlobThree} width={267} height={262} />
         </motion.div>
      </Container>
   );
}

const Container = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   z-index: -200;

   .top {
      position: absolute;
      left: 15%;
   }

   .right {
      position: absolute;
      bottom: 15%;
      right: 10%;
   }

   .bottom {
      position: absolute;
      left: 10%;
      bottom: 5%;
   }
`;

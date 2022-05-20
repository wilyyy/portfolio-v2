import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

import BlobOne from "@/public/BlobOne.svg";
import BlobTwo from "@/public/BlobTwo.svg";
import BlobThree from "@/public/BlobThree.png";

export default function BackgroundPatterns() {
   const RandomScale = Math.floor(Math.random() * (1.7 - 0.9 + 1)) + 0.9;

   return (
      <Container>
         <motion.div
            animate={{
               scaleY: [1, RandomScale, RandomScale + 0.8, RandomScale - 0.5, 1],
               // skew: [1, RandomScale, RandomScale + 0.5, RandomScale - 0.5, 1],
               rotate: [20, -150, 360, 20],
               y: ["0vh", "-20vh", "80vh", "70vh", "-80vh", "30vh", "0vh"],
               x: ["0vw", "-15vw", "-12vw", "80vw", "78vw", "40vw", "0vw"],
            }}
            transition={{
               yoyo: Infinity,
               duration: 100,
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
               y: ["0vh", "20vh", "-43vh", "40vh", "38vh", "-30vh"],
               x: ["0vw", "-35vw", "-60vw", "-58vw", "-10vw", "5vw"],
            }}
            transition={{
               yoyo: Infinity,
               duration: 100,
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
               y: ["0vh", "-75vh", "-72vh", "80vh"],
               x: ["0vw", "35vw", "85vw", "75vw"],
            }}
            transition={{
               yoyo: Infinity,
               duration: 150,
               ease: "easeInOut",
            }}
            className="bottom"
         >
            <Image src={BlobThree} width={267} height={262} />
         </motion.div>
      </Container>
   );
}

const Container = styled(motion.div)`
   width: 100%;
   height: 100%;
   position: absolute;
   z-index: -200;
   background: linear-gradient(66.04deg, #13151a 0.65%, #1a1d23 95.42%);

   .top {
      position: absolute;
      left: 15%;
   }

   .right {
      position: absolute;
      bottom: 30%;
      right: 10%;
   }

   .bottom {
      position: absolute;
      left: 10%;
      bottom: 5%;
   }
`;

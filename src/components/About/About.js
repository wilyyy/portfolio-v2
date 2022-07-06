import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import ContentModal from "../ContentModals/ContentModal";
import William from "@/public/williamdonu.png";
import WilliamBW from "@/public/williambw.png";

export default function About() {
   const { theme } = useTheme();

   return (
      <ContentModal flexDex="row">
         <Left border={globalTheme[theme].border}>
            <Top>
               <h2 className="title">My Story</h2>
            </Top>
            <Bottom>
               <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  href="#about-me"
               >
                  About Me
               </motion.h3>
               <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500 }}
               >
                  Experience
               </motion.h3>
               <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500 }}
               >
                  Education
               </motion.h3>
               <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500 }}
               >
                  Progression
               </motion.h3>
            </Bottom>
         </Left>
         <Right>
            <Top>
               <h2 className="title">Hiya, I&apos;m William!</h2>
            </Top>
            <Bottom>
               <Bio id="about-me">
                  <div className="text">
                     <p>
                        I&apos;m a developer and designer hybrid based in Vancouver, BC.
                        With my creations, I have the most fun when I can let my
                        imagination run wild and limit test unconventional ideas side by
                        side with current conventional processes, repeating this until an
                        ideal product is created.
                     </p>
                     <p>
                        Besides that, I enjoy dystopian or psychological novels,
                        documentaries about random topics, gaming and esports. Consumed by
                        lifelong wanderlust, I love to travel and explore the world to
                        broaden my horizons.
                     </p>
                  </div>
                  <div className="pictureGoHere">
                     {theme === "dark" ? (
                        <Image src={William} />
                     ) : (
                        <Image src={WilliamBW} />
                     )}
                  </div>
               </Bio>
               <Spacer bg={globalTheme[theme].border}>
                  <div className="divider" />
               </Spacer>
               <Credentials>
                  <h2>Experience</h2>
                  <div>
                     <p>
                        <strong>Web Developer</strong> @ Mercenary Digital
                     </p>
                     <p>June 2022 - Present</p>
                  </div>
                  <div>
                     <p>
                        <strong>Frontend Developer Intern</strong> @ ScopeMedia
                     </p>
                     <p>March 2022 - May 2022</p>
                  </div>
               </Credentials>
               <Spacer bg={globalTheme[theme].border}>
                  <div className="divider" />
               </Spacer>
               <Credentials school>
                  <h2>Education</h2>
                  <div>
                     <p>
                        <strong>Digital Design & Development</strong> @ BCIT
                     </p>
                     <p>September 2020 - June 2022</p>
                  </div>
                  <div>
                     <p>
                        <strong>Computer Science</strong> @ Langara College
                     </p>
                     <p>September 2016 - January 2018</p>
                  </div>
               </Credentials>
               <Spacer bg={globalTheme[theme].border}>
                  <div className="divider" />
               </Spacer>
               <Credentials asp>
                  <h2>Progression</h2>
                  <div>
                     <p>
                        With a love for diving deeper into software development and other
                        ventures in tech, here are some technologies I want to explore in
                        the future:
                     </p>
                     <ul>
                        <li>Further mastery of Express and MongoDB</li>
                        <li>AWS EC2</li>
                        <li>Python into Flask or Django</li>
                        <li>PostgreSQL</li>
                        <li>Redux</li>
                        <li>D3.js</li>
                        <li>Prisma</li>
                        <li>Docker</li>
                        <li>Rust</li>
                        <li>GO</li>
                        <li>Kubernetes</li>
                        <li>Unity & VR/AR tech</li>
                        <li>Angular, Vue, other JS frameworks</li>
                     </ul>
                  </div>
                  <p>📖 Currently Reading: Head First Design Patterns by Eric Freeman</p>
               </Credentials>
            </Bottom>
         </Right>
      </ContentModal>
   );
}

const Left = styled.div`
   width: 25%;
   height: 100%;
   border-right: 1px solid ${(props) => props.border};
`;

const Right = styled.div`
   width: 75%;
   height: 100%;
   overflow-y: scroll;
   padding-bottom: 4%;
`;

const Top = styled.div`
   height: 15%;
   display: flex;
   align-items: center;

   .title {
      position: relative;
      left: 40px;
   }
`;

const Bottom = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Bio = styled.div`
   width: 90%;
   height: 300px;
   display: flex;
   justify-content: space-between;

   .text {
      width: 60%;
      height: 260px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   .pictureGoHere {
      width: 35%;
      height: 303px;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.43);
      border: 1px solid #2e374d;
   }
`;

const Spacer = styled.div`
   width: 100%;
   height: 60px;
   display: flex;
   justify-content: center;
   align-items: center;

   .divider {
      width: 90%;
      height: 1px;
      background: ${(props) => props.bg};
      position: relative;
      top: 10px;
   }
`;

const Credentials = styled.div`
   width: 90%;
   height: 216px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   p {
      margin: 0;
   }

   ${({ school }) =>
      school &&
      `
        height: 206px;
   `}

   ${({ asp }) =>
      asp &&
      `
        height: 466px;
   `}
`;

import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useStatus } from "@/src/utils/AppProvider";
import { ScrollToSection } from "./AboutUtils";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import ContentModal from "../ContentModals/ContentModal";
import William from "@/public/williamdonu.png";
import WilliamBW from "@/public/williambw.png";

export default function About() {
   const { theme } = useTheme();
   const windowRef = useRef();
   const { setStatus } = useStatus();

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
                  onClick={() => ScrollToSection(windowRef, 0)}
               >
                  About Me
               </motion.h3>
               <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  onClick={() => ScrollToSection(windowRef, 430)}
               >
                  Experience
               </motion.h3>
               <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  onClick={() => ScrollToSection(windowRef, 710)}
               >
                  Education
               </motion.h3>
               <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  onClick={() => ScrollToSection(windowRef, 910)}
               >
                  Progression
               </motion.h3>
            </Bottom>
         </Left>
         <Right ref={windowRef}>
            <Top>
               <h2 className="title">Hiya, I&apos;m William! 👋</h2>
            </Top>
            <Bottom>
               <Bio id="about-me">
                  <div className="text">
                     <p>
                        Currently based in Vancouver, I&apos;m a full stack engineer with
                        a strong background in design.
                     </p>
                     <p>
                        I like to talk about psychology, fashion, esports, and emerging
                        tech such as AI and 3D printing. I also love to travel the world
                        for inspiration and to broaden my horizons.
                     </p>
                     <p>
                        Open to collaboration on fun side projects so feel free to{" "}
                        <motion.a
                           href="https://www.linkedin.com/in/william-alvarez-76b806149/"
                           target="_blank"
                        >
                           connect with me on LinkedIn
                        </motion.a>{" "}
                        or{" "}
                        <span onClick={() => setStatus("mail")} className="mail_link">
                           send me mail!
                        </span>
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
                        <strong>Web Developer</strong> @ Petcurean
                     </p>
                     <p>August 2022 - Present</p>
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
                  <h2>Future Exploration</h2>
                  <div>
                     <p>
                        With a love for software development and other ventures in tech,
                        here are some concepts I wish to explore in the future:
                     </p>
                     <ul>
                        <li>Test Driven Development</li>
                        <li>Further mastery of design patterns & software design</li>
                        <li>More AWS: S3, EC2</li>
                        <li>Data Visualization: D3.js</li>
                        <li>Data Science/Data Driven projects</li>
                        <li>Relational Database: PostgreSQL</li>
                        <li>DevOps: Docker, Kubernetes</li>
                        <li>Python: Flask/Django, ML Neural Networks</li>
                        <li>Rust</li>
                        <li>GO</li>
                        <li>Angular, Vue, other JS frameworks</li>
                     </ul>
                  </div>
                  <p>
                     📖 <b>Current Read:</b> Designing Data Intensive Applications,
                     <i> Martin Kleppmann</i>
                  </p>
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

   h3 {
      cursor: pointer;
   }
`;

const Bio = styled.div`
   width: 90%;
   height: 300px;
   display: flex;
   justify-content: space-between;

   .text {
      width: 60%;
      display: flex;
      flex-direction: column;

      p {
         margin-bottom: 5px;
      }
   }

   a,
   span.mail_link {
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
   }

   .pictureGoHere {
      width: 35%;
      height: 300px;
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
   display: flex;
   flex-direction: column;

   div {
      margin-bottom: 40px;
   }
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

import styled from "styled-components";
import { Github } from "@styled-icons/bootstrap/Github";
import { StyledIconBase } from "@styled-icons/styled-icon";

const Row = styled.div`
   display: flex;

   ${StyledIconBase} {
      width: 31px;
      height: 31px;
   }
`;

export const WorkData = [
   {
      status: "scope",
      name: "ScopeX Labs",
      role: "Frontend Developer",
      bio: (
         <>
            <p>
               A key project I worked on my internship with ScopeMedia. Under mentorship
               from ScopeMedia&apos;s staff, I had the pleasure of working with a talented
               intern team of designers and developers to create this landing page for
               ScopeX Labs.
            </p>
            <p>The codebase is confidential but the deployed site can be found below.</p>
         </>
      ),
      tools: "React.js, Typescript, Mailchimp, Google Analytics",
      link: "https://labs.scopex.ai/",
   },
   {
      status: "cplus",
      name: "CompassPlus",
      role: "Fullstack Developer",
      bio: (
         <>
            <p>
               An all-in-one native mobile application for Translink&apos;s Compass Card
               system.
            </p>
            <p>
               This project was an interdisciplinary project created for BCIT&apos;s
               Digital Design & Development program by a team of six and the final product
               was presented to 200 people including students, faculty and industry
               professionals
            </p>
         </>
      ),
      tools: "React Native with Expo, Firebase, PHP, MySQL",
      link: "https://github.com/wilyyy/CompassPlus",
   },
   {
      status: "scout",
      name: "Scout",
      role: "Project Manager & Fullstack Developer",
      bio: <p>info coming soon</p>,
      tools: "React with Next.js, Express.js, MongoDB, Node.js",
      link: "https://scout-delta.vercel.app/",
   },
   {
      status: "vigilant",
      name: "Vigilant",
      role: "Developer",
      bio: (
         <p>
            Coming back from winter break, I worked with a team of 4 to create an
            application in one week for the Web Development 4 class at BCIT&apos;s D3
            Program. The premise of this application is to theorycraft solutions to the
            increasing levels of crime in the Vancouver area during the pandemic.
         </p>
      ),
      tools: "React with Next.js",
      link: "https://vigilant.vercel.app/",
   },
   {
      status: "steady",
      name: "Steady",
      role: "Frontend Developer",
      bio: <p>info coming soon</p>,
      tools: "React Native / Expo, Firebase, PHP, MySQL",
      link: "https://steadyofficial.vercel.app/",
   },
   {
      status: "townsquare",
      name: "TownSquare",
      role: "UI/UX Designer",
      bio: <p>info coming soon</p>,
      tools: "Figma, Illustrator, Photoshop, After Effects",
      link: "https://www.figma.com/proto/UjvWL8KjrI3wSLBgrpSFMy/IDSP---TownSquare?node-id=135%3A5&starting-point-node-id=120%3A2&scaling=contain",
   },
];

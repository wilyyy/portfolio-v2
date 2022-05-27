import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import Button from "@/src/components/Button";

export default function WorkDetails({ data }) {
   const { theme } = useTheme();

   return (
      <Container>
         <Top>
            <h2 className="title">{data.name}</h2>
         </Top>
         <Bottom>
            <p>
               <b>Role:</b> {data.role}
            </p>
            <div>{data.bio}</div>
            <p>
               <b>Tools used:</b> {data.tools}
            </p>
            <div className="center">
               <Button text="View Project" src={data.link} />
            </div>
         </Bottom>
      </Container>
   );
}

const Container = styled.div`
   width: 75%;
   height: 100%;
   overflow-y: scroll;
   padding-bottom: 4%;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;

   .center {
      align-self: center;
      width: 40%;
   }
`;

const Top = styled.div`
   height: 15%;
   /* width: 90%; */
   display: flex;
   align-items: center;

   .title {
      position: absolute;
      left: 40px;
   }
`;

const Bottom = styled.div`
   width: 90%;
   height: auto;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   /* align-items: center; */
   /* align-items: center; */
`;

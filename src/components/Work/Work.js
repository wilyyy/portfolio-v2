import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

import { useTheme, useProjStatus } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import ContentModal from "@/src/components/ContentModals/ContentModal";
import { WorkData } from "@/src/components/Work/WorkData";
import WorkDetails from "./WorkDetails";

export default function Work() {
   const { theme } = useTheme();
   const { projStatus, setProjStatus } = useProjStatus();
   // const [current, setCurrent] = useState();

   return (
      <ContentModal flexDex="row">
         <Left border={globalTheme[theme].border}>
            <Top>
               <h2 className="title">My Work</h2>
            </Top>
            <Bottom>
               {WorkData.map((el, index) => (
                  <motion.h3
                     whileHover={{ scale: 1.1 }}
                     transition={{ type: "spring", stiffness: 500 }}
                     key={index}
                     onClick={() => setProjStatus(el.status)}
                  >
                     {el.name}
                  </motion.h3>
               ))}
            </Bottom>
         </Left>
         {WorkData.filter((el) => {
            if (el.status === projStatus) return true;
         })
            .slice(0, 1)
            .map((el, index) => (
               <WorkDetails key={index} data={el} />
            ))}

         {/* <Right>
            <Top>
               <h2 className="title">My Work</h2>
            </Top>
            <Bottom></Bottom>
         </Right> */}
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

import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import ContentModal from "@/src/components/ContentModals/ContentModal";
import { WorkData } from "@/src/components/Work/WorkData";
import WorkDetails from "./WorkDetails";

export default function Work() {
   const { theme } = useTheme();
   const [current, setCurrent] = useState("scope");

   return (
      <ContentModal flexDex="row">
         <Left border={globalTheme[theme].border}>
            <Top>
               <h2 className="title">My Work</h2>
            </Top>
            <Bottom border={globalTheme[theme].border}>
               {WorkData.map((el, index) => (
                  <Option
                     border={current === el.status ? globalTheme[theme].border : "none"}
                     bg={
                        current === el.status ? globalTheme[theme].textInput1_3 : "bnone"
                     }
                     hoverBg={globalTheme[theme].hover}
                     key={index}
                     onClick={() => setCurrent(el.status)}
                  >
                     <motion.h3
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                     >
                        {el.name}
                     </motion.h3>
                  </Option>
               ))}
            </Bottom>
         </Left>
         {WorkData.filter((el) => el.status === current)
            .slice(0, 1)
            .map((el, index) => (
               <WorkDetails key={index} data={el} />
            ))}
      </ContentModal>
   );
}

const Left = styled.div`
   width: 25%;
   height: 100%;
   border-right: 1px solid ${(props) => props.border};
`;

const Option = styled.div`
   width: 100%;
   height: 65px;
   display: flex;
   justify-content: center;
   align-items: center;
   background: ${(props) => props.bg};
   border-bottom: 1px solid ${(props) => props.border};
   border-top: 1px solid ${(props) => props.border};

   :hover {
      background: ${(props) => props.hoverBg};
      transition: 0.5;
   }
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

   /* border-top: 1px solid ${(props) => props.border}; */
`;

import styled from "styled-components";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import ContentModal from "@/src/components/ContentModals/ContentModal";
import { ToolData } from "@/src/components/Tools/ToolData";
import ToolsInfo from "./ToolsInfo";

export default function Tools() {
   const { theme } = useTheme();

   return (
      <ContentModal>
         <Top>
            <h2 className="title">My Toolbox</h2>
            <Input
               type="text"
               placeholder="Search..."
               border={globalTheme[theme].border}
               text={globalTheme[theme].text}
               bg={
                  theme === "dark"
                     ? "linear-gradient(152.97deg, rgba(28, 76, 121, 0.06) 0%, rgba(255, 255, 255, 0) 100%)"
                     : "#FAF8EB"
               }
            />
         </Top>
         <Bottom border={globalTheme[theme].border}>
            <ToolsInfo title="Development">
               {ToolData?.map((el, index) => (
                  <IconCont key={index}>
                     {/* {el.icon} */}
                     <p>{el.name}</p>
                  </IconCont>
               ))}
            </ToolsInfo>
            <ToolsInfo title="Design"></ToolsInfo>
            <ToolsInfo title="Agile"></ToolsInfo>
         </Bottom>
      </ContentModal>
   );
}

const Top = styled.div`
   height: 15%;
   width: 100%;
   display: flex;
   align-items: center;

   .title {
      position: relative;
      left: 40px;
   }
`;

const Bottom = styled.div`
   width: 100%;
   height: 85%;
   display: flex;
   flex-direction: column;
   align-items: center;
   border-top: 1px solid ${(props) => props.border};
   overflow-y: scroll;
   padding-bottom: 3%;
`;

const Input = styled.input`
   width: 25%;
   height: 42px;
   border-radius: 5px;
   background: ${(props) => props.bg};
   box-shadow: inset 4px 0px 4px rgba(0, 0, 0, 0.6), inset 0px 6px 4px rgba(0, 0, 0, 0.6);
   color: ${(props) => props.text};
   padding: 2%;
   outline: none;
   border: 1px solid ${(props) => props.border};

   ::placeholder {
      color: ${(props) => props.text};
   }

   position: absolute;
   right: 7%;
   top: 4.5%;
`;

const IconCont = styled.div`
   width: auto;
   height: 80px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`;

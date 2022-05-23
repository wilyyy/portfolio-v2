import styled from "styled-components";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import ContentModal from "@/src/components/ContentModals/ContentModal";

export default function Tools() {
   const { theme } = useTheme();

   return (
      <ContentModal>
         <Top>
            <h2 className="title">My Toolbox</h2>
         </Top>
         <Bottom></Bottom>
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
   justify-content: space-evenly;
`;

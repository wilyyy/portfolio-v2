import styled from "styled-components";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import ContentModal from "@/src/components/ContentModals/ContentModal";

export default function Work() {
   const { theme } = useTheme();

   return (
      <ContentModal flexDex="row">
         <Left border={globalTheme[theme].border}>
            <Top>
               <h2 className="title">My Work</h2>
            </Top>
            <Bottom>
               <h3>ScopeX Labs</h3>
               <h3>CompassPlus</h3>
               <h3>Scout</h3>
               <h3>Vigilant</h3>
               <h3>Steady</h3>
               <h3>TownSquare</h3>
            </Bottom>
         </Left>
         <Right>
            <Top>
               <h2 className="title">My Work</h2>
            </Top>
            <Bottom></Bottom>
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

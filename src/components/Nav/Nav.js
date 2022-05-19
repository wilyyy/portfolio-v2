import styled from "styled-components";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import Icon from "./Icon";

export default function Nav() {
   const { theme } = useTheme();

   return (
      <Container border={globalTheme[theme].border}>
         <Inner>
            <Selected border={globalTheme[theme].border}>
               <Icon folder />
            </Selected>
            <Selected border={globalTheme[theme].border}>
               <Icon notepad />
            </Selected>
            <Selected border={globalTheme[theme].border}>
               <Icon gear />
            </Selected>
            <Selected border={globalTheme[theme].border}>
               <Icon mail />
            </Selected>
         </Inner>
      </Container>
   );
}

const Container = styled.div`
   width: 466px;
   height: 100%;
   border-radius: 18px;
   border: 1px solid ${(props) => props.border};
   display: flex;
   justify-content: center;
   align-items: center;
   background: yellow;
`;

const Inner = styled.div`
   width: 412px;
   height: 100%;
   display: flex;
   background: pink;
`;

const Selected = styled.div`
   width: 25%;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px solid ${(props) => props.border};
`;

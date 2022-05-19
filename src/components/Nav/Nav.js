import styled from "styled-components";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import Icon from "./Icon";

export default function Nav() {
   const { theme } = useTheme();

   return (
      <Container border={globalTheme[theme].border}>
         <Inner>
            <Selected border={globalTheme[theme].border} width="1px" bstyle="solid">
               <Icon folder />
            </Selected>
            <Selected>
               <Icon notepad />
            </Selected>
            <Selected>
               <Icon gear />
            </Selected>
            <Selected>
               <Icon mail />
            </Selected>
         </Inner>
      </Container>
   );
}

const Container = styled.div`
   width: 100%;
   height: 436px;
   border: 1px solid ${(props) => props.border};
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const Inner = styled.div`
   width: 100%;
   height: 400px;
   display: flex;
   flex-direction: column;
`;

const Selected = styled.div`
   width: 100%;
   height: 100px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-top: ${(props) => props.border};
   border-bottom: ${(props) => props.border};
   border-top-width: ${(props) => props.width};
   border-bottom-width: ${(props) => props.width};
   border-left-width: 0;
   border-right-width: 0;
   border-style: ${(props) => props.bstyle};
   /* border: 1px solid ${(props) => props.border}; */
`;

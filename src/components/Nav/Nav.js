import styled from "styled-components";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import Icon from "./Icon";

export default function Nav() {
   const { theme } = useTheme();

   return (
      <Container
         border={globalTheme[theme].border}
         gradient1={globalTheme[theme].gradient1}
         gradient2={globalTheme[theme].gradient2}
         gradient3={globalTheme[theme].gradient3}
         gradient4={globalTheme[theme].gradient4}
      >
         <Inner>
            <Selected
               border={globalTheme[theme].border}
               gradient1={globalTheme[theme].gradient1}
               gradient2={globalTheme[theme].gradient2}
               gradient3={globalTheme[theme].gradient3}
               gradient4={globalTheme[theme].gradient4}
               width="1px"
               bstyle="solid"
            >
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
   background: linear-gradient(
         180deg,
         ${(props) => props.gradient1},
         ${(props) => props.gradient2}
      ),
      linear-gradient(
         90.05deg,
         ${(props) => props.gradient3} 0%,
         ${(props) => props.gradient4} 102.76%
      );
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
   background: linear-gradient(
         180deg,
         ${(props) => props.gradient1},
         ${(props) => props.gradient2}
      ),
      linear-gradient(
         90.05deg,
         ${(props) => props.gradient3} 0%,
         ${(props) => props.gradient4} 102.76%
      );
   /* border: 1px solid ${(props) => props.border}; */
`;

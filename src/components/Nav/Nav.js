import styled from "styled-components";

import { useTheme, useStatus } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import Icon from "./Icon";

export default function Nav() {
   const { theme } = useTheme();
   const { status, setStatus } = useStatus();

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
               border={status === "work" ? globalTheme[theme].border : "none"}
               gradient1={status === "work" ? globalTheme[theme].gradient1 : "none"}
               gradient2={status === "work" ? globalTheme[theme].gradient2 : "none"}
               gradient3={status === "work" ? globalTheme[theme].gradient3 : "none"}
               gradient4={status === "work" ? globalTheme[theme].gradient4 : "none"}
               width={status === "work" ? "1px" : "none"}
               bstyle={status === "work" ? "solid" : "none"}
            >
               <Icon folder onButtonClick={() => setStatus("work")} />
            </Selected>
            <Selected
               border={status === "info" ? globalTheme[theme].border : "none"}
               gradient1={status === "info" ? globalTheme[theme].gradient1 : "none"}
               gradient2={status === "info" ? globalTheme[theme].gradient2 : "none"}
               gradient3={status === "info" ? globalTheme[theme].gradient3 : "none"}
               gradient4={status === "info" ? globalTheme[theme].gradient4 : "none"}
               width={status === "info" ? "1px" : "none"}
               bstyle={status === "info" ? "solid" : "none"}
            >
               <Icon notepad onButtonClick={() => setStatus("info")} />
            </Selected>
            <Selected
               border={status === "tools" ? globalTheme[theme].border : "none"}
               gradient1={status === "tools" ? globalTheme[theme].gradient1 : "none"}
               gradient2={status === "tools" ? globalTheme[theme].gradient2 : "none"}
               gradient3={status === "tools" ? globalTheme[theme].gradient3 : "none"}
               gradient4={status === "tools" ? globalTheme[theme].gradient4 : "none"}
               width={status === "tools" ? "1px" : "none"}
               bstyle={status === "tools" ? "solid" : "none"}
            >
               <Icon gear onButtonClick={() => setStatus("tools")} />
            </Selected>
            <Selected
               border={status === "mail" ? globalTheme[theme].border : "none"}
               gradient1={status === "mail" ? globalTheme[theme].gradient1 : "none"}
               gradient2={status === "mail" ? globalTheme[theme].gradient2 : "none"}
               gradient3={status === "mail" ? globalTheme[theme].gradient3 : "none"}
               gradient4={status === "mail" ? globalTheme[theme].gradient4 : "none"}
               width={status === "mail" ? "1px" : "none"}
               bstyle={status === "mail" ? "solid" : "none"}
            >
               <Icon mail onButtonClick={() => setStatus("mail")} />
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

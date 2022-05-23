import styled from "styled-components";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { ToolData } from "./ToolData";

export default function ToolsInfo({ title, children }) {
   const { theme } = useTheme();

   return (
      <Container>
         <h3>{title}</h3>
         <Collection
            border={globalTheme[theme].border}
            color={globalTheme[theme].text}
         ></Collection>
      </Container>
   );
}

const Container = styled.div`
   width: 90%;
   height: 271px; //temp
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   ${StyledIconBase} {
      color: ${(props) => props.color};
   }
`;

const Collection = styled.div`
   width: 100%;
   height: 223px; //temp
   background: rgba(0, 0, 0, 0.43);
   border: 1px solid ${(props) => props.border};
`;

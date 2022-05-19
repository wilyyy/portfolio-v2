import styled from "styled-components";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";

export default function ContentModal({ children }) {
   const { theme } = useTheme();

   return (
      <Container border={globalTheme[theme].border}>
         <Bottom>{children}</Bottom>
      </Container>
   );
}

const Container = styled.div`
   width: 75%;
   height: 85%;
   border-radius: 19px;
   border: 1px solid ${(props) => props.border};
   /* background: blue; */
`;

const Bottom = styled.div``;

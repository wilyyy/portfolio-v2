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
   background: linear-gradient(
         180deg,
         rgba(0, 0, 0, 0) 19.13%,
         rgba(37, 43, 66, 0.2) 85.42%
      ),
      linear-gradient(
         90.05deg,
         rgba(0, 0, 0, 0.36) 0%,
         rgba(71, 83, 113, 0.18) 44.42%,
         rgba(0, 0, 0, 0.36) 102.76%
      );
`;

const Bottom = styled.div``;

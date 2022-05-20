import styled from "styled-components";

import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";

export default function ContentModal({ children }) {
   const { theme } = useTheme();

   return (
      <Container
         modal1_1={globalTheme[theme].modal1_1}
         modal2_2={globalTheme[theme].modal2_2}
         gradient2={globalTheme[theme].gradient2}
         gradient3={globalTheme[theme].gradient3}
         border={globalTheme[theme].border}
      >
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
         ${(props) => props.modal1_1},
         ${(props) => props.gradient2} 85.42%
      ),
      linear-gradient(
         90.05deg,
         ${(props) => props.gradient3} 0%,
         ${(props) => props.modal2_2} 44.42%,
         ${(props) => props.gradient3} 102.76%
      );
`;

const Bottom = styled.div``;

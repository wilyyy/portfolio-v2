import styled from "styled-components";
import Image from "next/image";
import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";

import DateTime from "./DateTime";

export default function Header() {
   const { theme } = useTheme();

   return (
      <Container border={globalTheme[theme].border}>
         <h4>willy-portfolio</h4>
         <DateTimeCont>
            <DateTime date />
            <p>|</p>
            <DateTime time />
         </DateTimeCont>
      </Container>
   );
}

const Container = styled.div`
   width: 100%;
   height: 7%;
   border-bottom: 1px solid ${(props) => props.border};
   display: flex;
   justify-content: space-around;
   align-items: center;
`;

const DateTimeCont = styled.div`
   width: 20%;
   display: flex;
   justify-content: space-between;
`;

const SocialsCont = styled.div`
   width: 10%;
`;

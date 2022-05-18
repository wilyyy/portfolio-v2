import styled from "styled-components";
import Image from "next/image";

import DateTime from "./DateTime";

export default function Header() {
   return (
      <Container>
         <DateTime date />
         <DateTime time />
      </Container>
   );
}

const Container = styled.div`
   width: 100%;
   height: 10%;
`;

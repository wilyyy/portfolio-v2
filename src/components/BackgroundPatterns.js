import styled from "styled-components";
import Image from "next/image";

import BlobOne from "@/public/BlobOne.svg";
import BlobTwo from "@/public/BlobTwo.svg";

export default function BackgroundPatterns() {
   return (
      <Container>
         <Image src={BlobOne} width={270} height={428} />
         <Image src={BlobTwo} width={416} height={244} />
      </Container>
   );
}

const Container = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   z-index: -200;

   user-select: none;
   -moz-user-select: none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -o-user-select: none;
`;

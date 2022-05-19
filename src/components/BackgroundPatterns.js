import styled from "styled-components";
import Image from "next/image";

import BlobOne from "@/public/BlobOne.svg";
import BlobTwo from "@/public/BlobTwo.svg";
import BlobThree from "@/public/BlobThree.png";

export default function BackgroundPatterns() {
   return (
      <Container>
         <Image src={BlobOne} width={270} height={428} />
         <Image src={BlobTwo} width={416} height={244} />
         <Image src={BlobThree} width={267} height={262} />
      </Container>
   );
}

const Container = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   z-index: -200;
`;

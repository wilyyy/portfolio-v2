import { useState, useEffect } from "react";
import HomeScreen from "../components/HomeScreen";
import Preloader from "../components/Preloader";
import styled from "styled-components";

export default function Home() {
   return (
      <Page>
         <Preloader />
         {/* <HomeScreen /> */}
      </Page>
   );
}

const Page = styled.div`
   width: 100vw;
   height: 100vh;
   font-family: "cartograph_extralight";
`;

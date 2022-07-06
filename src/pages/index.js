import { useState, useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { use100vh } from "react-div-100vh";

import HomeScreen from "../components/HomeScreen";
import Preloader from "../components/Preloader";
import { useTheme } from "../utils/AppProvider";
import { globalTheme } from "../utils/ThemeConfig";
import { MediaQuery } from "../utils/MediaQuery";

export default function Home() {
   const mobileHeight = use100vh();
   const [loading, setLoading] = useState(false);
   const { theme } = useTheme();

   useEffect(() => {
      setTimeout(() => setLoading(true), 4500); //switch to 3000 in final
   }, []);

   return (
      <AnimatePresence>
         <Page textShadow={globalTheme[theme].textShadow} mobileHeight={mobileHeight}>
            {loading === false ? <Preloader /> : <HomeScreen />}
         </Page>
      </AnimatePresence>
   );
}

const Page = styled.div`
   width: 100vw;
   height: 100vh;
   text-shadow: 0px 0px 10px ${(props) => props.textShadow};

   @media ${MediaQuery.screenMobile} {
      height: ${(props) => props.mobileHeight};
   }
`;

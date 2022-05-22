import "@/styles/globals.css";
import AppProvider from "../utils/AppProvider";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { useTheme } from "@/src/utils/AppProvider";
import { globalTheme } from "@/src/utils/ThemeConfig";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
   const { theme } = useTheme();

   return (
      <AppProvider>
         <Head>
            <meta charSet="utf-8" />
            <title>
               William Alvarez | Front End Developer based in Vancouver, Canada
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta content="website" property="og:type" />
            <meta
               content="William Alvarez | Front End Developer based in Vancouver, Canada"
               property="og:site_name"
            />
            <meta
               content="William Alvarez | Front End Developer based in Vancouver, Canada"
               name="apple-mobile-web-app-title"
            />
            <meta
               content="William Alvarez | Front End Developer based in Vancouver, Canada"
               name="application-name"
            />
            <meta
               content="William Alvarez | Front End Developer based in Vancouver, Canada<"
               property="og:title"
            />
            {/* change this to image later */}
            <meta
               content="https://scopex.ai/static/media/searchPortalBanner3.5ed11e89.png"
               property="og:image"
            />
            <link href="https://willydev.com/" rel="canonical" />
            <meta
               content="The craft of William Laurel Alvarez, a web and mobile developer with a passion for human centered design."
               name="description"
            />
            <meta
               content="The craft of William Laurel Alvarez, a web and mobile developer with a passion for human centered design."
               property="og:description"
            />
            <link
               rel="preload"
               href="../../public/fonts/cartograph.ttf"
               as="font"
               crossOrigin=""
            />
            <link
               rel="preload"
               href="../../public/fonts/consolas.ttf"
               as="font"
               crossOrigin=""
            />
            <link
               rel="preload"
               href="../../public/fonts/cartograph_extralight.ttf"
               as="font"
               crossOrigin=""
            />
         </Head>
         <GlobalStyle />
         <Component {...pageProps} />
      </AppProvider>
   );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
   ::-webkit-scrollbar {
      width: 15px;
      background: none;
   }

   ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.53);
      border-radius: 16px;
      border: 1px solid #2E374D;
   }

   ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.3);

   }
`;

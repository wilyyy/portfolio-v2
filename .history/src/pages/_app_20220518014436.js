import "@/styles/globals.css";
import AppProvider from "./utils/AppProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
   return (
      <AppProvider>
         <Head>
            <meta charSet="utf-8" />
            <title>William Alvarez | Front End Developer</title>
            <meta content="website" property="og:type" />
            <meta content="ScopeX Labs" property="og:site_name" />
            <meta content="ScopeX Labs" name="apple-mobile-web-app-title" />
            <meta content="ScopeX Labs" name="application-name" />
            <meta content="ScopeX Labs<" property="og:title" />
            <meta
               content="https://scopex.ai/static/media/searchPortalBanner3.5ed11e89.png"
               property="og:image"
            />
            <link href="https://labs.scopex.ai/" rel="canonical" />
            <meta
               content="A Content Encryption Protocol Authenticating Web3. Establishing digital provenance infrastructure for an authentic and decentralized web."
               name="description"
            />
            <meta
               content="A Content Encryption Protocol Authenticating Web3. Establishing digital provenance infrastructure for an authentic and decentralized web."
               property="og:description"
            />
         </Head>
         <Component {...pageProps} />
      </AppProvider>
   );
}

export default MyApp;

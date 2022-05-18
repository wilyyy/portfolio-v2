import "@/styles/globals.css";
import AppProvider from "./utils/AppProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
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
               content="William Alvarez | Front End Developer based in Vancouver, Canadar"
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
               content="The craft of William Laurel Alvarez, a web and mobile developer & designer based in Vancouver, Canada."
               name="description"
            />
            <meta
               content="The craft of William Laurel Alvarez, a web and mobile developer & designer based in Vancouver, Canada"
               property="og:description"
            />
         </Head>
         <Component {...pageProps} />
      </AppProvider>
   );
}

export default MyApp;

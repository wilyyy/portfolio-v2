import "@/styles/globals.css";
import AppProvider from "./utils/AppProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
   return (
      <AppProvider>
         <Component {...pageProps} />
      </AppProvider>
   );
}

export default MyApp;

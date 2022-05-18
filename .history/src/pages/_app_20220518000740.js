import "@/styles/globals.css";
import AppProvider from "./utils/AppProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
   return <Component {...pageProps} />;
}

export default MyApp;

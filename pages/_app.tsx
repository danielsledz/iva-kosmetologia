import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.css";
import Nav from "../components/Nav/Nav";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gabinet kosmetologiczny</title>
      </Head>
      <Nav />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default MyApp;

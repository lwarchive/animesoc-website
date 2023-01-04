import type { NextPage } from "next";
import Home from "../components/home";
import Menu from "../components/menu";
import MobileMenu from "../components/mobile/menu";
import About from "../components/about";
import JoinUs from "../components/join-us";
import Events from "../components/events";
import Committee from "../components/committee";
import Footer from "../components/footer";
import Head from "next/head";

const Landing: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Home - Anime Society of Royal Holloway, University of London
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      <Menu />
      <MobileMenu />
      <About />
      <JoinUs />
      <Committee />
      <Footer />
    </>
  );
};

export default Landing;

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
      <Events
        dataSource={`https://docs.google.com/spreadsheets/d/e/2PACX-1vRAHUQzFuZ1O0J7soL5Wud5CEbA3MLv4T4Pqms_KhAueNoFX6h2T0DTGwgaLu92FYWdnFV50Q0F1AHY/pub?gid=0&single=true&output=csv`}
        calendar={`https://calendar.google.com/calendar/embed?src=c_8219055ac4671ef4f7faec2be6f2db0d38d1e3b23c3b4e94d81b71fdc3c6a0e4%40group.calendar.google.com&ctz=Europe%2FLondon`}
      />
      <Committee />
      <Footer />
    </>
  );
};

export default Landing;

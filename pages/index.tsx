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
          Home - Anime and Manga Society of Royal Holloway, University of London
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Home />
      <Menu />
      <MobileMenu />
      <About />
      <JoinUs />
      <Events
        dataSource={`https://docs.google.com/spreadsheets/d/14dy-jvnqQi-1PsGs5t3sKUsHsZYAw-yW-lsV_uFEWdA/pub?gid=0&single=true&output=csv`}
        calendar={`https://calendar.google.com/calendar/embed?src=6398b1b51dbc3cb981175df6bc3f75a88040fc0e9b006dbdc6d160e26b4d40db%40group.calendar.google.com&ctz=Europe%2FLondon`}
      />
      <Committee />
      <Footer />
    </>
  );
};

export default Landing;

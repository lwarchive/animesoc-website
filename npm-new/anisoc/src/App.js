import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Menu from "./components/menu";
import MobileMenu from "./components/mobile/menu";
import About from "./components/about";
import JoinUs from "./components/join-us";
import Events from "./components/events";
import Polls from "./components/polls";
import Committee from "./components/committee";
import Footer from "./components/footer";

function Index() {
  return (
    <>
      <div className="App">
        <Home />
        <Menu />
        <MobileMenu />
        <About />
        <JoinUs />
        <Events />
        <Polls />
        <Committee />
        <Footer />
      </div>
    </>
  );
}

function Admin() {
  return (
    <>
      <div className="App">
        "Admin Page"
        <Home />
        <Admin label="home" />
        <About />
        <Admin label="about" />
        <JoinUs />
        <Admin label="join-us" />
        <Events />
        <Admin label="events" />
        <Polls />
        <Admin label="polls" />
        <Committee />
        <Admin label="committee" />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="" element={<Index />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

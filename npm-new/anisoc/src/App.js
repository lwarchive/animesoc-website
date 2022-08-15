import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Menu from "./components/menu";
import { MobileMenu, MobileMenuButton } from "./components/mobile/menu";
import About from "./components/about";
import JoinUs from "./components/join-us";
import Events from "./components/events";
import Polls from "./components/polls";
import Committee from "./components/committee";
import Footer from "./components/footer";

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="App">
        <Home />
        <Menu />
        {open ? (
          <MobileMenu
            toggleMenu={() => {
              setOpen(false);
            }}
          />
        ) : (
          <MobileMenuButton
            toggleMenu={() => {
              setOpen(true);
            }}
          />
        )}
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
      <div className="App">"Admin Page"</div>
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

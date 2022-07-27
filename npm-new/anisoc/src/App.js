import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/home";
import Menu from "./components/menu";
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
      </div>
    </>
  )
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

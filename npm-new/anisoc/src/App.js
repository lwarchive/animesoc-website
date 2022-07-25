import "./App.css";

import Home from "./components/home";
import Menu from "./components/menu";
import About from "./components/about";
import JoinUs from "./components/join-us";
import Events from "./components/events";
import Polls from "./components/polls";
import Committee from "./components/committee";
import Footer from "./components/footer";

function App() {
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

export default App;

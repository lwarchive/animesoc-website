import "./App.css";

import Home from "./components/home.js";
import Menu from "./components/menu.js";
import About from "./components/about.js";
import JoinUs from "./components/joinus";
import Events from "./components/events";
import Polls from "./components/polls";
import Commitee from "./components/commitee";
import Footer from "./components/footer.js";

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
        <Commitee />
        <Footer />
      </div>
    </>
  );
}

export default App;

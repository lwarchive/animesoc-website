import logo from './logo.svg';
import './App.css';
import Home from './components/home.js';
import Menu from './components/menu.js';
import About from './components/about.js';
import JoinUs from './components/joinus';
import Events from './components/events';

function App() {
  return (
    <>
      <div className="App">
        <Home />
        <Menu />
        <About />
        <JoinUs />
        <Events />
      </div>
    </>
  );
}

export default App;

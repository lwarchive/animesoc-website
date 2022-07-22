import logo from './logo.svg';
import './App.css';
import Home from './components/home.js';
import Menu from './components/menu.js';
import About from './components/about.js';

function App() {
  return (
    <>
      <div className="App">
        <Home />
        <Menu />
        <About />
      </div>
    </>
  );
}

export default App;

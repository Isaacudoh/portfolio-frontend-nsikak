import logo from './logo.svg';
import './App.css';

// Import conponents
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Route, Routes, Switch} from "react-router-dom";

// Import Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/projects" element={<Projects URL={URL} />}/>
        <Route exact path="/about" element={<About URL={URL} />}/>

      </Routes>
    </div>
  );
}

export default App;

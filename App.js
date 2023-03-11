import React from "react";
import './Routing.css';
import Home from "./Home";
import Portfolio from "./Portfolio";
import Rolam from "./Rolam";
import Blog from "./Blog";
import Kapcsolat from "./Kapcsolat";
import {
  Routes,
  Route,
  Link,
  BrowserRouter
 
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header className="select-header">
        <BrowserRouter>

          <div id="nav">
            <div>
              <span id="logo">Logó</span>
            </div>
            <nav>
              <Link to="/">Kezdőlap</Link> /
              <Link to="/portfolio">Portfólió</Link> /
              <Link to="/rolam">Rólam</Link> /
              <Link to="/blog">Blog</Link> /
              <Link to="/kapcsolat">Kapcsolat</Link>
            </nav>
          </div>

          <Routes>
            <Route index element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/rolam" element={<Rolam />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/kapcsolat" element={<Kapcsolat />} />
          </Routes>

          <div id="footer">
            <footer>&copy; 2077 Copyright all rights reserved. </footer>
          </div>

        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
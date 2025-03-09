import React from "react";
import { Routes, Route } from "react-router-dom"; //
import EbookReader from "./components/EbookReader";
import { Link } from "react-router-dom";
import "./index.css";

function App() {
    return (
      <div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/reader">Read eBook</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome to StoicCode eBook Reader</h1>} />
          <Route path="reader" element={<EbookReader />} />
        </Routes>
      </div>
    );
}

export default App;
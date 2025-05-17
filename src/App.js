import StoicCodeDaily from './components/StoicCodeDaily';
import './App.css';
import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import EbookReader from './components/EbookReader';
import app from './firebaseConfig';
import { requestForToken, messaging } from './firebaseConfig';

function App() {
useEffect(() => {
   console.log("Firebase App Instance:", app);

  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      requestForToken();
    }
  });
}, []);


return (
<div>
<nav className="navigation">
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/reader">Read eBook</Link></li>
</ul>
</nav>

<Routes>
<Route path="/" element={
<div style={{ textAlign: 'center', padding: '50px' }}>
<StoicCodeDaily />
<h1>Welcome to StoicCode eBook Reader</h1>
</div>
} />
<Route path="/reader" element={<EbookReader />} />
</Routes>
</div>
);
}

export default App;
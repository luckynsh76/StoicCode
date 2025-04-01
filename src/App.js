import StoicCodeDaily from './components/StoicCodeDaily';
import './App.css';
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import EbookReader from "./components/EbookReader";
import { Link } from "react-router-dom";
import Checkout from "./components/Checkout";
import app from "./firebaseConfig";
import { requestForToken } from './firebaseConfig';
import { messaging } from './firebaseConfig';
import { onMessage } from 'firebase/messaging';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Payment from "./components/Payment";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function App() {
  useEffect(() => {
    console.log("Firebase App Instance:", app);

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        requestForToken();
      }
    });

    onMessage(messaging, (payload) => {
      console.log("Notification Received:", payload);
    });

  },[]);
  
    return (
      <Elements stripe={stripePromise}>
      <div>
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reader">Read eBook</Link></li>
            <li><Link to="/payment"></Link></li>
          </ul>
        </nav>

        {/* Your Payment Component */}
        <Payment />
        <Routes>
          <Route path="/" element={(
            <div>
              <StoicCodeDaily />
              <h1>Welcome to StoicCode eBook Reader</h1>
            </div>
          )} />

          <Route path="reader" element={<EbookReader />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      </Elements>
    );
}

export default App;
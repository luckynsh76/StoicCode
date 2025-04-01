import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function Checkout() {
    return (
        <Elements stripe={stripePromise}>
            <h2>Purchase the eBook</h2>
            <p>Price: $5</p>
            <button>Pay Now</button>
        </Elements>
    );
}

export default Checkout;
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51R0pKVJwRrGVHEEXjs7HmO8XNR1lYIs6M9CYjhBqYQdcayc4Qym3hZieTsQWPLea1cCPLewnIlbl6kp9COlTuWjz0044I60jEY");

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
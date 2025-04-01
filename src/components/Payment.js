import React, { useState } from "react";

const Payment = () => {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);
        try {
          console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);
          const BACKEND_URL ="http://localhost:5000";

          const response = await fetch(`${BACKEND_URL}/api/payment/create-checkout-session`, {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({
                item: [{ id: "ebook01" }]
               }),
            });

            if (!response.ok) {
                throw new Error("Failed to connect to the server");
            }

            const session = await response.json();
            window.location.href = session.url;
         } catch (error) {
            console.error("Checkout error:", error);
            alert("Payment failed! Please try again.");
            setLoading(false);
         }
     };
        
     return (
        <div>
            <h2>Buy StoicCode eBook $5.00</h2>
            <button onClick={handleCheckout} disabled={loading}>
                {loading ? "Redirecting..." : "Proceed to Checkout"}
            </button>
        </div>
     );
};

export default Payment;
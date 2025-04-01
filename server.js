require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

console.log("stripe secret key:", process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(express.json());
app.use(cors());

// Create Stripe Checkout Session
app.post("/api/payment/create-checkout-session", async (req, res) => {
    try {

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
            line_items: req.body.item.map(item => ({
              price_data: {
                 currency: "usd",
                 product_data: {
                    name: "The Adventure of Truth eBook",
                    images: ["https://yourwebsite.com/images/ebook_cover.png"],
                 },
                 unit_amount: 500, // Price in cents ($5.00)
                },
                quantity: 1,
              })),

            });

            res.json({ id: session.id });
          } catch (error) {
            console.error("Stripe Error:", error);
            res.status(500).json({ error: "Failed to create checkout session" });
          }
        });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Stripe server running on port ${PORT}`));
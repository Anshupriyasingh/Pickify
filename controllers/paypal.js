const express = require("express");
const paypal = require("paypal-rest-sdk");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

// PayPal Configuration
paypal.configure({
    mode: "sandbox", // Change to 'live' for production
    client_id: "AfekG1i2okRM3Xjb6q73dhx-y3sDueDRL7Jyv0NkFr09BDLGexBltKwJJO0MgLcI0zTxW50EzJtJ4PSF",
    client_secret: "EMcDmxZmlkiy5o2In4jxMZxUt5dA3AghB7hI-fgSfS-wP1li4ppMJirQ0znkL4lkthyEnk_J77_5sgig"
});

// Payment Route
app.post("/pay", (req, res) => {
    const { amount } = req.body;

    const createPaymentJson = {
        intent: "sale",
        payer: { payment_method: "paypal" },
        redirect_urls: {
            return_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel"
        },
        transactions: [
            {
                amount: { total: amount, currency: "USD" },
                description: "Payment for your order"
            }
        ]
    };

    paypal.payment.create(createPaymentJson, (error, payment) => {
        if (error) {
            console.error(error);
            res.status(500).send("Payment creation failed.");
        } else {
            const approvalUrl = payment.links.find(
                (link) => link.rel === "approval_url"
            ).href;
            res.json({ approvalUrl });
        }
    });
});

// Success Route
app.get("/success", (req, res) => {
    const { paymentId, PayerID } = req.query;

    const executePaymentJson = {
        payer_id: PayerID
    };

    paypal.payment.execute(paymentId, executePaymentJson, (error, payment) => {
        if (error) {
            console.error(error.response);
            res.status(500).send("Payment failed.");
        } else {
            res.send("Payment successful!");
        }
    });
});

// Cancel Route
app.get("/cancel", (req, res) => {
    res.send("Payment cancelled.");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
    const myPayment = await Stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "inr"
    });

    res.status(200).json({ success: true, client_secret: myPayment.client_secret });
});


//to send the stripe api key to the frontend
exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
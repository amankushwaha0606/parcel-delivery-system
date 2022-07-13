const publishableKey = "pk_test_51LKDzzSCIVUUUpZKHycriontPzUTtcLJ4AW06B81nFKaBhJG3pK9VAuGqi9UMbL1BbYmDnzH438psENyvoOcbM6Q00YRmj7m9x";
const securityKey = "sk_test_51LKDzzSCIVUUUpZKVA99z5d3YRnjZxinfg9psZljrOd1eFuYtjv7TRqT8d0sySaCAKHL70BrkzqFT8EN1bkEk09h00jvk8odYZ";

const stripe = require("stripe")(securityKey);

const Order = require("../models/order");

const YOUR_DOMAIN = 'http://localhost:3000';

module.exports.payment = (req, res, next) => {
    console.log("---------payment received  ");
    const orderId = req.query.orderId;
    console.log(orderId);
    stripe.checkout.sessions.create({
        line_items: [
            {
                amount: 1000,
                quantity: 1,
                name: "ITEM 1",
                currency: "USD",
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/user/trackOrder`,
        cancel_url: `${YOUR_DOMAIN}/user/deleteOrder`,
    }).then(session => {
        // console.log(session);
        console.log("session");
        // res.redirect(303, session.url);
        Order.update({
            trackId: session.id
        }, {
            where: { id: orderId }
        }).then((order) => {
            console.log(session.id);
            res.send({...session, trackId: session.id, order: order});
        }).catch((err) => { console.log(err); });
    });
};
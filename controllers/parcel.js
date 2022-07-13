const Order = require("../models/order");
const Coupon = require("../models/coupon");
const OrderStatus = require('../util/orderStatus');
const Feedback = require("../models/feedback");

module.exports.orderDetails = (req, res, next) => {
    const id = req.body.id;
    const type = req.body.type;
    const pickupAddress = req.body.pickupAddress;
    const dropAddress = req.body.dropAddress;
    const alterPhoneNumber = req.body.alterPhoneNumber;
    const image = req.body.image;
    const length = req.body.length;
    const breadth = req.body.breadth;
    const weight = req.body.weight;
    const price = -1;
    const userId = req.body.userId;
    const trackId = "";
    const status = 0;
    const order = new Order({
        // id: id,
        type: type,
        pickupAddress: pickupAddress,
        dropAddress: dropAddress,
        alterPhoneNumber: alterPhoneNumber,
        image: image,
        length: length,
        breadth: breadth,
        weight: weight,
        price: price,
        userId: userId,
        trackId: trackId,
        status: status,
    });
    res.json(order);
    order.save()
        .then(order => {
            console.log(order);
            res.json(order);
        })
        .catch(err => {
            console.log(err);
            next(err);
        });
}

module.exports.priceCalculator = (req, res, next) => { 
    const length = req.body.length;
    const breadth = req.body.breadth;
    const weight = req.body.weight;
    const calculatedPrice = length * breadth + weight;
    res.json({price: calculatedPrice});
}

// request body should habe key coupon which is string
// and given by user to deduce price from claculated price.
// RETURNS --- json data with key {value: value}
module.exports.applyCoupen = (req, res, next) => { 
    const coupon = req.body.coupon;
    const orderCost = req.body.orderCost;
    Coupon.findOne({
        where: {
            name: coupon
        }
    }).then((coup) => { 
        if (coup) {
            const value = coup.value;
            res.status(400).json({
                value: value,
                discountedPrice: orderCost - value > 0 ? orderCost - value : 0,
            });
            coup.destroy();
            return; 
        }
    }).catch(err => {
        console.log(err);
        next(err);
    });
}

module.exports.trackOrder = (req, res, next) => { 
    const trackId = req.body.trackId;
    Order.findOne({
        where: {
            trackId: trackId
        }
    }).then((order) => {
        const orderStatus = OrderStatus.orderStatus(order.status);
        console.log(orderStatus);
        res.json({orderStatus: orderStatus});
    }).catch(err => {
        console.log(err);
        next(err);
    });
}

module.exports.orderFeedback = (req, res, next) => {
    const userId = req.body.userId;
    const orderId = req.body.orderId;
    const review = req.body.review;
    const feedback = new Feedback({
        userId: userId,
        orderId: orderId,
        review: review,
    });
    feedback.save().then((feedback) => {
        console.log("You have successfully submitted feedback");
        console.log(feedback);
        res.json(feedback);
    }).catch(err => {
        console.log(err);
        next(err);
    });
}
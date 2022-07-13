const serviceId = "VA640bb0321796d0661f2ec7fbc1dac87b";
const accountSid = "ACd8ba73b75c3bec07af37ccb000dc28e7";
const authToken = "fbc69bd643939439e47bbc970732aed2";

const client = require('twilio')(accountSid, authToken);
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require("../models/user");

module.exports.signup = (req, res, next) => {
    // console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    
    console.log("IN A SIGN UP PAGE");    
    client
        .verify
        .services(serviceId).verifications
        .create({
            friendlyName: "MINI-PROJECT",
            to: phone, //+ phone,
            channel: 'sms', //req.query.channel,
        }).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => {
            console.log("ERROR IN SIGN UP PAGE\n", err);
            next(err);
        });
}

module.exports.signupPhoneVerification = (req, res, next) => { 
    console.log("Mobile verification");
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const code = req.body.code;
    bcrypt.hash(password, 12)
        .then(hashPassword => {
            client
                .verify
                .services(serviceId).verificationChecks
                .create({
                    to: phone, //+ phone,
                    code: code,
                }).then(data => {
                    console.log("Verification successful SIGN UP PAGE");
                    User.create({
                        email: email, //+ email,
                        password: hashPassword, //+ password
                        phone: phone,
                    });
                    res.json(data);
                }).catch(err => {
                    console.log("Verification failed with code ----------------" + err);
                    next(err);
                });
        }).catch (err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err); 
        });
}

module.exports.login = (req, res, next) => { 
    // const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    let user1;
    User.findOne({ where: { phone: phone } }).then(user => {
        if (!user) {
            const error = new Error("User not found");
            throw error;
        }
        user1 = user;
        return bcrypt.compare(password, user.password);
    }).then(isEquals => {
        if (!isEquals) {
            const error = new Error("Wrong password");
            throw error;
        }
        const token = jwt.sign(
            {
                email: user1.email,
                userId: user1.id.toString()
            },
            'somesupersecretsecret',
            { expiresIn: '1h' }
        );
        res.status(200).json({ token: token, userId: user1.id.toString() });
    }).catch(err => {
        next(err);
    })
}
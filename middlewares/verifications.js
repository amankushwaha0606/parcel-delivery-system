const jwt = require('jsonwebtoken');

const User = require("../models/user")

module.exports.verifyUser = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'somesupersecretsecret');
    } catch (err) {
        throw err;
    }
    if (!decodedToken) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodedToken.userId;
    next();
};

module.exports.signup = () => { 
    User.findOne({
        where: {
            phone: req.body.phone
        }
    }).then(user => {
        if (user) {
            res.status(400).json({
                message: "This user is already sign up. Please use other mobile number"
            });
            return;
        }
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).json({
                    message: "This user is already sign up. Please use other email"
                });
                return;
            }
        });
    });
}


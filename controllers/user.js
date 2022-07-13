const User = require("../models/user");

module.exports.fillUserInfo = (req, res, next) => {
    console.log(req.body);
    const id = req.body.id;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const name = req.body.name;
    const country = req.body.country;
    const state = req.body.state;
    const city = req.body.city;
    const zipCode = req.body.zipCode;
    User.findByPk(id)
        .then(user => {
            console.log(user);
            user.email = email;
            user.name = name;
            user.country = country;
            user.state = state;
            user.zipCode = zipCode;
            user.city = city;
            return user.save();
        })
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            next(err);
        });
}
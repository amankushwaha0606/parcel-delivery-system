const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const parcelRoutes = require('./routes/parcel');
const paymentsRoutes = require('./routes/payments');

const sequelize = require('./util/database');
const Order = require('./models/order');
const User = require('./models/user');
const Feedback = require('./models/feedback');
const Coupon = require('./models/coupon');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, Origin');
    next();
});

User.hasMany(Order);
Order.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });

Order.hasMany(Feedback);
Feedback.belongsTo(Order, { constraints: true, onDelete: 'CASCADE' });

Order.hasMany(Coupon);
Coupon.belongsTo(Order, { constraints: true, onDelete: 'CASCADE' });

sequelize
    .sync()
    // .sync({ force: true })
    .then(result => {
        app.listen(3000);
    })
    .catch(err => console.log(err));

app.use('/auth', authRoutes);
app.use(userRoutes);
app.use('/user', parcelRoutes);
app.use('/payments', paymentsRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});
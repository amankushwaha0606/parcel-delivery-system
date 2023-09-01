# Mini-Project: Node.js Backend Application

Welcome to the Mini-Project Node.js backend application! This application serves as a simple example of a backend API with features like user authentication, order management, payments, and more. You can use this as a starting point for your own projects or as a reference for building similar applications.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [User Registration and Login](#user-registration-and-login)
  - [Parcel Management](#parcel-management)
  - [Payments](#payments)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Related Repositories](#related-repositories)

## Features

- User authentication with JWT tokens
- User registration and login
- Parcel management for tracking orders
- Payment processing with Stripe integration
- Feedback submission for completed orders
- Coupon code application for discounts

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js and npm
- MySQL or a compatible database
- Stripe account for payment processing
- Twilio account for SMS verification (optional)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/amankushwaha0606/parcel-delivery-system.git
   cd mini-project-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure your environment variables:

   Create a `.env` file in the project root and add the following:

   ```env
   PORT=3000
   DB_URI=mysql://username:password@localhost/mini-project
   JWT_SECRET=your-secret-key
   STRIPE_PUBLISHABLE_KEY=pk_test_your-publishable-key
   STRIPE_SECRET_KEY=sk_test_your-secret-key
   TWILIO_SERVICE_ID=your-twilio-service-id (optional)
   TWILIO_ACCOUNT_SID=your-twilio-account-sid (optional)
   TWILIO_AUTH_TOKEN=your-twilio-auth-token (optional)
   ```

   Replace the placeholders with your own values.

## Usage

### Authentication

This application uses JWT (JSON Web Tokens) for authentication. To access protected routes, include the JWT token in the request headers as follows:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

### User Registration and Login

- `POST /auth/signup`: Register a new user with email and password.
- `POST /auth/login`: Authenticate and log in a user with email and password.

### Parcel Management

- `POST /user/orderDetails`: Create a new order with pickup and drop details.
- `POST /user/applyCoupon`: Apply a coupon code to an order for discounts.
- `POST /user/trackOrder`: Track the status of an order.
- `POST /user/orderFeedback`: Submit a feedback for a completed order.

### Payments

- `POST /payments/payment`: Initiate a payment using Stripe Checkout.

## Project Structure

The project structure is organized as follows:

- `controllers/`: Contains controller functions for handling API routes.
- `middlewares/`: Includes middleware functions for route verification.
- `models/`: Defines Sequelize models for database tables.
- `routes/`: Contains route definitions for API endpoints.
- `util/`: Includes utility files like database setup and order status definitions.
- `views/`: Contains HTML templates for Stripe payment processing.

## Dependencies

The project relies on several npm packages. Some of the key dependencies include:

- `express`: A popular Node.js framework for building web applications.
- `sequelize`: An ORM (Object-Relational Mapping) for working with databases.
- `bcryptjs`: Used for hashing user passwords securely.
- `jsonwebtoken`: For generating and verifying JSON Web Tokens (JWT).
- `stripe`: The Stripe API for payment processing.
- `twilio`: For SMS verification (optional).

For a complete list of dependencies, refer to the `package.json` file.

## Contributing

Contributions are welcome! Feel free to fork this repository, make improvements, and submit pull requests to enhance the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Related Repositories

- [Basic Node API Project](https://github.com/amankushwaha0606/nodejs-api): Backend code for the Basic-Project application.

---

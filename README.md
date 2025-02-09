# 🎉 EVNTO - Event Management Platform

**Evnto** is a comprehensive platform designed for discovering and managing events effortlessly. It provides a seamless experience for users to find and register for events while offering an intuitive admin panel for event organizers.

---

## 📌 Features

### 🎟️ User Side:
- Browse and explore upcoming events.
- Add events to the cart and purchase tickets.
- Secure checkout using Stripe payment gateway.
- View and manage your booked events.

### 🎛️ Admin Panel:
- Create, edit, and delete events.
- Manage user orders and update their statuses.
- View analytics on event participation.

### ⚙️ Backend:
- REST API built with Express.js and MongoDB.
- Secure authentication with JWT.
- Handles orders, payments, and user data efficiently.

---

## 🚀 Tech Stack

| Component  | Technology Used |
|------------|----------------|
| **Frontend (Users)** | React.js |
| **Frontend (Admin)** | React.js |
| **Backend** | Express.js, Node.js |
| **Database** | MongoDB |
| **Authentication** | JWT, Bcrypt |
| **Payments** | Stripe API |
| **Deployment** | Vercel, Netlify |

---

## 🔧 Installation & Setup

### 🖥️ Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### 📦 Clone the Repository
```sh
git clone https://github.com/akshtih/evnto.git
cd evnto
```

### 🏗️ Backend Setup
```sh
cd backend
npm install
npm start
```

### 🌐 Frontend (Users) Setup
```sh
cd frontend
npm install
npm start
```

### 🛠️ Frontend (Admin) Setup
```sh
cd admin
npm install
npm start
```

---

## ⚡ Environment Variables

Create a `.env` file in the backend folder and add:

```plaintext
MONGO_URI=your_mongo_database_url
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

## 🔗 API Endpoints

### 📌 Authentication
- `POST /api/user/register` - Register a new user.
- `POST /api/user/login` - User login.

### 🎟️ Events
- `POST /api/event/add` - Add a new event.
- `GET /api/event/list` - Get all events.
- `DELETE /api/event/remove` - Delete an event.

### 🛒 Cart
- `POST /api/cart/add` - Add an item to the cart.
- `POST /api/cart/remove` - Remove an item from the cart.
- `GET /api/get` - Get cart details.

### 🛍️ Orders
- `POST /api/order/place` - Place an order.
- `POST /api/order/verify` - Verify payment.
- `GET /api/order/userorders` - Get user orders.
- `GET /api/order/list` - List all orders (Admin).
- `POST /api/order/status` - Update order status.

---

## 🎭 UI Screenshots

| User Interface | Admin Dashboard |
|---------------|----------------|
| ![User UI](https://via.placeholder.com/400) | ![Admin UI](https://via.placeholder.com/400) |

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 📬 Contact

For any queries, feel free to reach out:
- **Email:** your-email@example.com
- **GitHub:** [yourusername](https://github.com/yourusername)

---


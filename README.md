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
git clone https://github.com/Akshtih/Event-Management-Application.git
cd evnto
```

### 🏗️ Backend Setup
```sh
cd backend
npm install
node server.js
```

### 🌐 Frontend (Users) Setup
```sh
cd frontend
npm install
npm run dev
```

### 🛠️ Frontend (Admin) Setup
```sh
cd admin
npm install
npm run dev
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

## User Interface  

| Homepage | Event Listings | Footer |
|----------|---------------|--------------|
| ![Homepage](https://github.com/user-attachments/assets/fcc570c4-4a6b-4341-a2d2-78ce2c82ddf2) | ![Event Listings](https://github.com/user-attachments/assets/535ea556-bc69-479e-90cb-2804ae4d94fe) | ![Footer](https://github.com/user-attachments/assets/1b899cfe-e9e0-4fdf-9888-9d301b70c31f) |

| Cart Page | Checkout Page | My Orders Page |
|-------------|-----------|--------------|
| ![Cart Page](https://github.com/user-attachments/assets/76cb55d6-c7f2-490f-8569-aa914e7550f1) | ![Checkout Page](https://github.com/user-attachments/assets/66cfa046-7ce7-4552-9221-42a5fe7fc8b8) | ![](https://github.com/user-attachments/assets/936d1a06-6e2c-47da-b2d8-41f0d86c7592) |


| Stripe Payment |
|![Image](https://github.com/user-attachments/assets/825179a1-fb0e-40fd-b3dc-8680015509c3)|

## Admin Dashboard  

| View Orders | Add Events | Manage Events |
|---------------|--------------|------------|
| ![Dashboard Home](https://github.com/user-attachments/assets/40635afc-ced4-4b6b-83ec-d1a48bde9a06) | ![Manage Events](https://github.com/user-attachments/assets/f2297e2c-a012-4652-988b-301dbbb2f7ca) | ![View Orders](https://github.com/user-attachments/assets/a81dc83e-3c56-4aa1-a80e-262a187982e5) |

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.


---

## 📬 Contact

For any queries, feel free to reach out:
- **Email:** akshithsai2006@gmail.com
- **GitHub:** [akshtih](https://github.com/akshtih)

---


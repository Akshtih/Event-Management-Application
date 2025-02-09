## 🔗 API Endpoints

### 📌 Authentication
- `POST /api/user/register` - Register a new user.
  - **Input:** `{ "name": "John Doe", "email": "johndoe@example.com", "password": "securepassword" }`
  - **Response:** `{ "message": "User registered successfully", "userId": "12345" }`

- `POST /api/user/login` - User login.
  - **Input:** `{ "email": "johndoe@example.com", "password": "securepassword" }`
  - **Response:** `{ "token": "jwt_token_here" }`

### 🎟️ Events
- `POST /api/event/add` - Add a new event.
  - **Input:** `{ "name": "Tech Conference", "date": "2025-03-01", "location": "New York" }`
  - **Response:** `{ "message": "Event added successfully", "eventId": "67890" }`

- `GET /api/event/list` - Get all events.
  - **Response:** `[ { "eventId": "67890", "name": "Tech Conference", "date": "2025-03-01" } ]`

- `DELETE /api/event/remove` - Delete an event.
  - **Input:** `{ "eventId": "67890" }`
  - **Response:** `{ "message": "Event removed successfully" }`

### 🛒 Cart
- `POST /api/cart/add` - Add an item to the cart.
  - **Input:** `{ "userId": "12345", "eventId": "67890", "quantity": 2 }`
  - **Response:** `{ "message": "Item added to cart" }`

- `POST /api/cart/remove` - Remove an item from the cart.
  - **Input:** `{ "userId": "12345", "eventId": "67890" }`
  - **Response:** `{ "message": "Item removed from cart" }`

- `GET /api/get` - Get cart details.
  - **Response:** `[ { "eventId": "67890", "name": "Tech Conference", "quantity": 2 } ]`

### 🛍️ Orders
- `POST /api/order/place` - Place an order.
  - **Input:** `{ "userId": "12345", "cartItems": [{ "eventId": "67890", "quantity": 2 }] }`
  - **Response:** `{ "message": "Order placed successfully", "orderId": "98765" }`

- `POST /api/order/verify` - Verify payment.
  - **Input:** `{ "orderId": "98765", "paymentId": "xyz123" }`
  - **Response:** `{ "message": "Payment verified" }`

- `GET /api/order/userorders` - Get user orders.
  - **Response:** `[ { "orderId": "98765", "status": "Confirmed" } ]`

- `GET /api/order/list` - List all orders (Admin).
  - **Response:** `[ { "orderId": "98765", "userId": "12345", "status": "Confirmed" } ]`

- `POST /api/order/status` - Update order status.
  - **Input:** `{ "orderId": "98765", "status": "Shipped" }`
  - **Response:** `{ "message": "Order status updated" }`


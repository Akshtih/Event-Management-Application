# Evnto - User Interface

Welcome to the **Evnto User Interface**, the frontend of our event management platform built with **React.js**. This application allows users to explore, book, and manage event registrations seamlessly.

## Features
- Browse upcoming events with categories.
- Add events to cart and checkout using **Stripe** payment gateway.
- View order history and manage bookings.
- Responsive UI for an enhanced user experience.

## Tech Stack
- **Frontend**: React.js, React Router
- **State Management**: Context API
- **Styling**: Tailwind CSS
- **API Communication**: Axios
- **Payment Integration**: Stripe

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/evnto-user.git
   ```
2. Navigate to the project folder:
   ```sh
   cd evnto-user
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file and configure environment variables:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:5000
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```
5. Start the development server:
   ```sh
   npm start
   ```

## Folder Structure
```
📦 evnto-user
 ┣ 📂 src
 ┃ ┣ 📂 components  # Reusable UI components
 ┃ ┣ 📂 pages       # Main page views (Home, Events, Cart, etc.)
 ┃ ┣ 📂 context     # Context API state management
 ┃ ┣ 📂 assets      # Images, icons, and styles
 ┃ ┣ 📜 App.js      # Main application component
 ┃ ┗ 📜 index.js    # Entry point
 ┗ 📜 package.json  # Project metadata and dependencies
```

## Deployment
To deploy on **Vercel** or **Netlify**, follow these steps:
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy the `build` folder using Vercel/Netlify CLI or GitHub integration.

## Screenshots
### User Interface
| Homepage | Event Listings | Footer |
|----------|---------------|--------|
| ![Homepage](https://github.com/user-attachments/assets/fcc570c4-4a6b-4341-a2d2-78ce2c82ddf2) | ![Event Listings](https://github.com/user-attachments/assets/535ea556-bc69-479e-90cb-2804ae4d94fe) | ![Footer](https://github.com/user-attachments/assets/1b899cfe-e9e0-4fdf-9888-9d301b70c31f) |

| Cart Page | Checkout Page | My Orders Page |
|----------|---------------|--------------|
| ![Cart](https://github.com/user-attachments/assets/76cb55d6-c7f2-490f-8569-aa914e7550f1) | ![Checkout](https://github.com/user-attachments/assets/66cfa046-7ce7-4552-9221-42a5fe7fc8b8) | ![Orders](https://github.com/user-attachments/assets/936d1a06-6e2c-47da-b2d8-41f0d86c7592) |

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-xyz`).
3. Commit your changes.
4. Push to your fork and create a pull request.

## License
This project is licensed under the **MIT License**.

---
Let me know if you need any modifications! 🚀


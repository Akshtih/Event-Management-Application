# Admin Panel

## Dashboard
| Overview | User Management | Event Management |
|----------|----------------|------------------|
| ![Overview](https://github.com/user-attachments/assets/40635afc-ced4-4b6b-83ec-d1a48bde9a06) | ![User Management](https://github.com/user-attachments/assets/f2297e2c-a012-4652-988b-301dbbb2f7ca) | ![Event Management](https://github.com/user-attachments/assets/a81dc83e-3c56-4aa1-a80e-262a187982e5) |

## Features
- **Admin Dashboard:** Get an overview of key metrics.
- **User Management:** View, edit, and manage users.
- **Event Management:** Create, update, and delete events.
- **Analytics & Reports:** Monitor event statistics and user engagement.

## Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo/admin
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run the development server**
   ```sh
   npm start
   ```

## Environment Variables
Ensure you set up the following environment variables in a `.env` file:
```
REACT_APP_API_BASE_URL=your_api_url
REACT_APP_AUTH_SECRET=your_auth_secret
```

## Deployment
To deploy the admin panel, use:
```sh
npm run build
```
Then upload the `build` folder to your preferred hosting service.

## License
This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

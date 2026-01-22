# Blogify - MERN Stack Blog Application

Blogify is a full-stack blog application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides users with the ability to create accounts, share blog posts, and engage with content in a social media-like environment.

## Features

- **User Authentication**: Secure sign-up and login functionality with JWT-based authentication
- **Create & Share Posts**: Users can create, edit, and delete their own blog posts
- **Like & Comment System**: Interactive engagement with posts through likes and comments
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS
- **Modern State Management**: Redux Toolkit for efficient state management
- **Pagination**: Efficient loading of posts with pagination support

## Tech Stack

- **Frontend**: React.js, Redux Toolkit, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS
- **Package Manager**: npm/yarn

## Prerequisites

- Node.js (version 14.x or higher)
- MongoDB (either local installation or MongoDB Atlas)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd BLOGIFY--MERN
```

2. Install backend dependencies:
```bash
cd BLOGIFY-backend-main
npm install
```

3. Install frontend dependencies:
```bash
cd ../BLOGIFY-frontend-main
npm install
```

## Environment Variables

### Backend (.env file in BLOGIFY-backend-main):

```env
PORT=5001
CONNECTION_URL=mongodb://127.0.0.1:27017/blogify
JWT_SECRET_KEY=your_jwt_secret_key
JWT_SECRET=your_jwt_secret
```

### Frontend (.env file in BLOGIFY-frontend-main):

```env
REACT_APP_BACKEND_URL=http://localhost:5001
```

## Running the Application

### Backend Server

From the `BLOGIFY-backend-main` directory:
```bash
npm start
```
The server will run on `http://localhost:5001`

### Frontend Server

From the `BLOGIFY-frontend-main` directory:
```bash
npm start
```
The application will be available at `http://localhost:3000`

## API Endpoints

### Posts
- `GET /posts` - Get all posts with pagination
- `GET /posts/:id` - Get a specific post
- `POST /posts` - Create a new post (requires authentication)
- `PATCH /posts/:id` - Update a post (requires authentication)
- `DELETE /posts/:id` - Delete a post (requires authentication)
- `POST /posts/:id/likePost` - Like/unlike a post (requires authentication)

### User Authentication
- `POST /user/signup` - Register a new user
- `POST /user/signin` - Login to an existing account

## Project Structure

```
BLOGIFY--MERN/
├── BLOGIFY-backend-main/
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Authentication middleware
│   ├── models/           # Database schemas
│   ├── routes/           # API route definitions
│   ├── .env             # Environment variables
│   ├── index.js         # Server entry point
│   └── package.json
├── BLOGIFY-frontend-main/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── Pages/       # Page components
│   │   ├── components/  # Reusable UI components
│   │   ├── api/         # API service functions
│   │   ├── services/    # Business logic
│   │   ├── slices/      # Redux state slices
│   │   ├── reducer/     # Root reducer
│   │   ├── App.js       # Main application component
│   │   └── index.js     # React app entry point
│   ├── .env             # Environment variables
│   └── package.json
```

## Available Scripts

### Backend
- `npm start` - Start the development server with nodemon

### Frontend
- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Built with Create React App
- Uses MongoDB for data storage
- Styled with Tailwind CSS
- Icons from React Icons
- Notifications with React Toastify
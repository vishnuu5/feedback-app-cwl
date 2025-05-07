# Feedback Application

A simple web application where users can submit feedback. The application has a React frontend, Node.js/Express backend, and MongoDB database.

##Demo
Click => [Here](https://feedback-app-cwl.vercel.app)

## Features

- Submit feedback with name, email, and message
- View all submitted feedback
- Form validation
- Success message after submission
- Timestamps for feedback submissions
- Responsive design with TailwindCSS

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/vishnuu5/feedback-app-cwl.git
cd feedback-app
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory with the following variables:

```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

### 3. Frontend Setup

```bash
cd ../client
npm install
```

Create a `.env` file in the client directory with:

```
VITE_API_URL=http://localhost:5000
```

## Running the Application Locally

### 1. Start the Backend Server

```bash
cd server
npm run dev
```

The server will start on http://localhost:5000

### 2. Start the Frontend Development Server

```bash
cd client
npm run dev
```

The frontend will be available at http://localhost:3000

## Deployment

### Backend Deployment (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the build command: `npm install`
4. Set the start command: `npm start`
5. Add environment variables (PORT, MONGODB_URI)

### Frontend Deployment ( Vercel)

1. Push your code to GitHub
2. Import the project on Vercel
3. Set the root directory to `client`
4. Add environment variable: `VITE_API_URL=https://your-backend-url.com`
5. Deploy

## API Endpoints

- `GET /api/feedback`: Retrieve all feedback entries
- `POST /api/feedback`: Submit a new feedback entry

## License

MIT

## Deployment Instructions

To deploy this application:

1. **Backend Deployment (Render)**:

   - Push your code to GitHub
   - Connect your repository to the hosting service
   - Set environment variables (MONGODB_URI)
   - Deploy the server directory

2. **Frontend Deployment (Vercel)**:

   - Push your code to GitHub
   - Connect your repository to the hosting service
   - Set the build command to `npm run build`
   - Set the publish directory to `dist`
   - Set the environment variable VITE_API_URL to point to your deployed backend URL
   - Deploy the client directory

3. **Database (MongoDB Atlas)**:
   - Create a free MongoDB Atlas cluster
   - Set up network access to allow connections from your backend
   - Use the connection string in your backend .env file

This completes the implementation of the feedback application with all the requested features, including the bonus features.

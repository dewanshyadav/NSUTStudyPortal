# NSUTStudy Web Application 

NSUTStudy is a comprehensive web platform designed for educational institutions, providing a seamless and user-friendly experience for learners and educators alike. The application offers functionalities such as course management, user authentication, payment processing, and much more.

## Features

- **User Authentication**: Secure login and registration using JWT and bcrypt.
- **Course Management**: Allows educators to create and manage courses and students to enroll and participate in these courses.
- **Payment Integration**: Integrated Razorpay for seamless payment processing.
- **File Uploads**: Facilitates file uploads with Cloudinary integration for cloud storage.
- **Responsive Design**: Built with React and Tailwind CSS to ensure compatibility across devices.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Redux**: State management for predictable state updates.
- **React Router**: Handles routing within the application.
- **Axios**: For making API requests to the backend server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Hook Form**: For managing form state and validation.

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB Atlas**: Cloud-based database service for storing user and course data.
- **Mongoose**: MongoDB object modeling tool.
- **Cloudinary**: Cloud-based storage for handling file uploads.
- **JWT**: For secure user authentication.
- **Nodemailer**: For sending emails.
- **Razorpay**: Payment gateway integration.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/NSUTStudy.git
   cd NSUTStudy
2. **Create a .env file in the server** directory with the following environment variables:
    PORT=4000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret

3. **Run the applications**
   Development mode: npm run dev
   production mode: npm run build
                    npm start

## Usage

After starting the server and client, you can visit the application at **http://localhost:3000** to access the NSUTStudy platform.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any feature additions or bug fixes.

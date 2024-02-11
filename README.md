
# React Firebase Chat App

A simple chat application built with React and Firebase for real-time messaging.


## Overview

This project is a simple chat application built using React and Firebase as the backend. It includes Google Authentication for user sign-in and Firebase Realtime Database for storing and retrieving chat messages in real time. The application provides a basic chat interface with dynamic updates.

## Features

- Google Authentication: Users can sign in using their Google accounts.
- Realtime Chat: Messages are sent and received in real-time using Firebase Realtime Database.
- Responsive Design: The application is designed to work seamlessly on various devices.
- Simple and intuitive user interface.
- Dynamic chat updates based on user interactions.

## Installation

1. Clone the repository:

       git clone https://github.com/your-username/react-firebase-chat.git
   
Navigate to the project directory:

    cd react-firebase-chat
Install dependencies:

       npm install

$ Usage

    Run the application:
     npm start
     Open your browser and go to http://localhost:3000.

Start sending and receiving messages in the chat.

# Create a Firebase project and configure it:

       Go to the Firebase Console.
       Click on "Add Project" and follow the instructions to create a new project.
       Once the project is created, click on "Authentication" in the left sidebar and enable the "Google" sign-in method.
       Click on "Database" and set up a Realtime Database.


# Firebase Configuration
Make sure to replace the Firebase configuration in src/App.js with your own Firebase project credentials:


const firebaseConfig = {

                     REACT_APP_FIREBASE_API_KEY=your-api-key
                     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
                     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
                     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
                     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
                     REACT_APP_FIREBASE_APP_ID=your-app-id
};

Ensure that your Firebase project has Firestore enabled for real-time database functionality.

# Contributing
Contributions are welcome! If you find a bug or want to add new features, please open an issue or submit a pull request.

_________ <h1> Thank You <h1/>__________

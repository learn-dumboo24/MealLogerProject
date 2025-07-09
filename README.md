Meal Logger - App

A React Native + Expo-based application for logging meals with camera support, timeline view, and notification reminders.

Project Overview

This application is being developed in multiple phases. It uses Firebase Authentication and various native features like camera, local storage, notifications, and device battery status.

Current Progress

Phase 1: Authentication and Setup (Completed)
- Firebase email/password authentication.
- Session persistence using AsyncStorage.
- 
Upcoming Phases
- Phase 2: Meal Logging (camera + form input).
- Phase 3: Timeline to view saved meals.
- Phase 4: Daily reminders using notifications and battery check.
- Phase 5: User profile and settings (including theme toggle and logout).

How to Install and Run Locally

Prerequisites
- Node.js and npm installed.
- Expo CLI installed globally (`npm install -g expo-cli`).
- Git installed.

Steps

1. Clone the repository
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
Install dependencies
npm install
Start the development server
npx expo start
Run the app
Use the QR code in the terminal to open the app in the Expo Go app on your mobile device.
Or use an Android emulator or iOS simulator if set up on your machine.
Project Structure

.
├── app/
│   ├── index.tsx              # Entry point
│   ├── login.tsx
│   ├── register.tsx
│   ├── add-meal.tsx           # Meal form screen
├── context/
│   └── AuthContext.tsx        # Manages user state and auth context
├── utils/
│   └── firebaseAuth.ts        # Firebase auth helpers
├── firebaseConfig.ts          # Firebase config and initialization
└── README.md

Technologies Used-

React Native (with Expo)
Firebase Authentication
Expo Router
AsyncStorage
Additional planned: expo-camera, expo-file-system, expo-notifications, expo-battery

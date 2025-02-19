# NUMEN AI

## Introduction
NUMEN AI is an advanced AI-driven educational platform designed to assist secondary and high school students in learning mathematics more effectively. It provides a personalized learning experience through adaptive AI, real-time feedback, and interactive features. The platform is built using Angular for the frontend and Node.js for the backend, with AI-driven functionalities powered by Python and hosted on Google Cloud.

## Features
### **For Students**
- **Personalized Learning Paths:** AI-driven adaptive content tailored to each student’s progress.
- **Gamified Learning:** Earn rewards, badges, and unlock educational coupons based on performance.
- **AI-Powered Virtual Mentor:** 24/7 support with step-by-step guidance on solving math problems.
- **Live Classes:** Book sessions with preferred teachers and get instant doubt resolution.
- **Real-Time Feedback:** Instant explanations and suggestions for incorrect answers.
- **Progress Tracking:** Analytics to monitor strengths, weaknesses, and improvements.

### **For Teachers**
- **Custom Lesson Plans & Assignments:** Create personalized quizzes and homework based on student needs.
- **Performance Analytics:** Get AI-driven insights into student learning patterns.
- **Live Teaching Tools:** Interactive whiteboards, polls, and quizzes for engaging sessions.
- **Student Feedback System:** Improve teaching methods through real-time feedback.
- **Recognition & Rewards:** Earn incentives based on student ratings and engagement.

### **For Parents**
- **Progress Reports:** Track their child’s learning journey with detailed insights.
- **Achievement Notifications:** Get real-time updates on student performance and rewards.
- **Parental Controls:** Set learning goals, monitor activities, and manage screen time.

## Technology Stack
### **Frontend:**
- Angular (UI Framework)
- Bootstrap (Responsive Design)
- PWA (Progressive Web App Support)

### **Backend:**
- Node.js (Server-side Processing)
- Express.js (API Framework)
- Firebase Authentication (User Management)

### **AI & Data Processing:**
- Python (AI Model Implementation)
- Google Cloud Functions & Cloud Run (AI Model Hosting)
- Vertex AI (Integrating Gemini API for AI-powered features)
- Firebase Extensions (Seamless Cloud Integration)

### **Database & Hosting:**
- Firebase Realtime Database (Real-time Data Storage)
- Firestore (Storing AI Prompts & Responses)
- Firebase Hosting (Auto-Deployment via GitHub Actions)

## Installation & Setup
### **Prerequisites:**
- Node.js & npm installed
- Angular CLI installed (`npm install -g @angular/cli`)
- Firebase CLI installed (`npm install -g firebase-tools`)

### **Steps to Run the Project Locally:**
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repository/ai-math-tutor.git
   cd ai-math-tutor
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   ng serve
   ```
4. Start the backend server:
   ```sh
   node server.js
   ```
5. Deploy AI model (if using Google Cloud):
   ```sh
   gcloud functions deploy ai-math-model --runtime python39 --trigger-http
   ```
6. Access the application in the browser:
   ```sh
   http://localhost:4200
   ```

## Future Enhancements
- **AI-Driven Doubt Resolution** – Real-time doubt solving via AI-powered chatbots.
- **Collaborative Learning Spaces** – Peer-to-peer interaction and group discussions.
- **Voice-Based Assistance** – AI-powered voice tutoring.
- **Augmented Reality (AR) & Virtual Reality (VR)** – Immersive math learning experiences.
- **Multi-Language Support** – Expanding accessibility for non-English speakers.

## Impact & Benefits
- **For Students:** Personalized, engaging, and effective learning.
- **For Teachers:** AI-powered insights for better teaching strategies.
- **For Parents:** Real-time updates and better involvement in their child’s education.
- **For Society:** Democratizing access to quality math education for all students.






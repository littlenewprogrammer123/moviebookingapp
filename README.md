# 🎬 Movie Booking App

A full-stack **Movie Ticket Booking App** built with **React (frontend)** and **Spring Boot + MongoDB (backend)**.  
The app allows users to browse movies, book tickets, and manage reservations.  

🌐 **Live Demo:** [Movie Booking App on GitHub Pages](https://littlenewprogrammer123.github.io/moviebookingapp)

---

## ✨ Features

- 🎥 Browse a list of movies  
- 📝 View movie details  
- 🎟️ Book movie tickets in real-time  
- 📅 Manage bookings and reservations  
- ⚡ Fast and responsive frontend with React 19  
- 🗄️ Backend with REST APIs powered by Spring Boot  
- 💾 MongoDB for persistent data storage  

---

## 🛠️ Tech Stack

### Frontend
- React 19  
- React Router DOM 7  
- React Scroll + Hash Link for smooth navigation  
- GitHub Pages for hosting  

### Backend
- Spring Boot 3.5.6  
- Spring Web (REST APIs)  
- Spring Data MongoDB  
- Maven build system  
- Java 17 (LTS)  

### Database
- MongoDB (Atlas or local instance)  

---

## 📂 Project Structure

moviebookingapp/
├── backend/ # Spring Boot backend
│ ├── src/main/java/com/movieapp/...
│ ├── src/main/resources/application.properties
│ └── pom.xml
│
├── frontend/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
│ ├── package.json
│ └── public/
│
└── README.md




---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/littlenewprogrammer123/moviebookingapp.git
cd moviebookingapp


Backend Setup (Spring Boot)

1.Navigate to backend:

cd backend


2.Configure MongoDB in src/main/resources/application.properties:

spring.data.mongodb.uri=mongodb://localhost:27017/movieapp
server.port=8080

3.Run backend:

mvn spring-boot:run


Backend will start on: http://localhost:8080

Frontend Setup (React)

1.Navigate to frontend:

cd ../frontend

2.Install dependencies:

npm install


3.Start dev server:

npm start


Frontend will start on: http://localhost:3000


Build & Deploy Frontend

To deploy frontend to GitHub Pages:

npm run deploy

Your site will be available at:
👉 https://littlenewprogrammer123.github.io/moviebookingapp

👨‍💻 Developed by littlenewprogrammer123
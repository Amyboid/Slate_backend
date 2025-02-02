# Slate Backend - Role-Based Authentication System 🔐

![Express.js](https://img.shields.io/badge/Express.js-4.18.2-green)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)
![JWT](https://img.shields.io/badge/JWT-Auth-orange)
![BCrypt](https://img.shields.io/badge/BCrypt-Secure-yellow)

A production-ready backend system for role-based authentication (School 🏫, Parent 👨👩👧👦, Student 🎓) with dashboard routing and student achievements management.

## 🌟 Features

- **Role-Based Access Control** (School/Admin, Parent, Student)
- **JWT Authentication** 🔑 with HTTP-only cookies
- **Student Achievements API** 📊 (Parent/Student access only)
- **Secure Password Hashing** 🔒 using BCrypt

## 🛠 Tech Stack


| Component         | Technology            |
| ----------------- | --------------------- |
| Backend Framework | Express.js            |
| Database          | MySQL                 |
| Templating Engine | EJS                   |
| Authentication    | JSON Web Tokens (JWT) |
| Password Hashing  | BCrypt                |

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/Amyboid/Slate_backend.git
cd Slate_backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Database Configuration

1. Create MySQL database:
   ```bash
   CREATE DATABASE slate;
   USE slate;
   ```
2. Create tables and insert data :
   ```bash
   -- Users Table
   CREATE TABLE Users (
       ID INT AUTO_INCREMENT PRIMARY KEY,
       Name VARCHAR(255) NOT NULL,
       Email VARCHAR(255) NOT NULL UNIQUE,
       Password VARCHAR(255) NOT NULL,
       Role ENUM('School', 'Parent', 'Student') NOT NULL,
       LinkedStudentID INT DEFAULT NULL
   );
   -- Student Achievements Table
   CREATE TABLE StudentAchievements (
       StudentID INT PRIMARY KEY,
       Name VARCHAR(255) NOT NULL,
       SchoolName VARCHAR(255) NOT NULL,
       Achievements TEXT NOT NULL
   );

   -- Insert a School user
   INSERT INTO Users (Name, Email, Password, Role) 
   VALUES ('ABC School', 'school@slate.com', '$2b$10$DZWHtGwK93Q4bjpA/V5jbeWIidOrPdg3df5RKP.cE/2ZE3sLsXhvi', 'School');

   -- Insert a Parent user
   INSERT INTO Users (Name, Email, Password, Role, LinkedStudentID) 
   VALUES ('Rahul Gupta', 'parent@slate.com', '$2b$10$uTdXFRBkHboFodJ5hvToQOYg6MUfMftoGEYqnfGiCFs4mD6IB5fku', 'Parent', 3);

   -- Insert a Student user
   INSERT INTO Users (Name, Email, Password, Role, LinkedStudentID) 
   VALUES ('Riya Sharma', 'student@slate.com', '$2b$10$lUbfPBswAoe.pJClnYpsreuivvJpJtOwjHbtr43hEKpnsOXCFMw/S', 'Student', 3);

   -- Insert a Student Achievement
   INSERT INTO StudentAchievements (StudentID, Name, SchoolName, Achievements) 
   VALUES (3, 'Riya Sharma', 'ABC School', 'Science Olympiad Winner');

   ```

### 4. Environment Setup

Create `.env` file in root directory:

```bash

# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=slate

# JWT
JWT_SECRET=your_jwt_secret

```

### 5. Start Server

```bash
npm start
```

**Application URL**: `http://localhost:3000`

## 📚API Documentation

### Authentication Endpoints


| Method | Endpoint       | Description                    |
| ------ | -------------- | ------------------------------ |
| POST   | `/auth/login`  | Login with email/password/role |
| GET    | `/auth/logout` | Logout and clear session       |

### Dashboard Endpoints


| Method | Endpoint             | Allowed Roles |
| ------ | -------------------- | ------------- |
| GET    | `/dashboard/school`  | School        |
| GET    | `/dashboard/parent`  | Parent        |
| GET    | `/dashboard/student` | Student       |

### Student Achievements

```bash
GET /student/achievements/:studentId
```

## 📂 Project Structure

Slate_backend/
├── config/         # Database configuration
├── controllers/    # Logic for auth, dashboards, and student data
├── middleware/     # JWT authentication middleware
├── models/         # MySQL queries
├── routes/         # API endpoints
├── utils/          # Utility functions (e.g., JWT)
├── views/          # EJS templates
│   ├── auth/       # Login/Forgot Password pages
│   └── dashboards/ # Role-specific dashboards
├── .env            # Environment variables
└── app.js          # Server entry point



## Happy Coding😄

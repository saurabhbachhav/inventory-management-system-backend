````markdown
# 📦 Inventory Management Tool - Backend (Fi Internship Assignment)

This is a backend REST API built for the Inventory Management Tool as part of the Fi Internship assignment.

It provides user authentication, and CRUD operations for managing inventory products, including adding, updating, and listing products.

---

## 🛠 Tech Stack Used

- **Backend Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcryptjs
- **Documentation**: Swagger (OpenAPI)
- **API Testing Script**: Python 3 + `requests` module

---

## 🚀 Project Initialization Steps

### 🔧 Backend Setup

```bash
cd backend
npm install
````

Create a `.env` file:

```env
PORT=8080
MONGO_URI=<your MongoDB Atlas URI>
JWT_SECRET=your_jwt_secret
```

Run the development server:

```bash
npm run dev
```

API will run at:

```
http://localhost:8080
```

---

### 🧪 Run API Testing Script

Make sure Python is installed (`python --version`)

Install `requests`:

```bash
pip install requests
```

Run the test file:

```bash
python test_api.py
```

✅ This will:

* Register a user
* Login
* Add a product
* Update product quantity
* Fetch and validate products

---

## 📘 Swagger API Documentation

Swagger UI is available at:

```
http://localhost:8080/api-docs
```

It provides:

* Interactive testing
* API schemas
* Request body examples
* JWT Authorization testing

---

## 📦 API Endpoints

### 🔐 Auth Routes

#### `POST /register`

Registers a new user.

```json
{
  "username": "puja",
  "password": "mypassword"
}
```

#### `POST /login`

Logs in and returns JWT.

```json
{
  "access_token": "<JWT>"
}
```

---

### 🧾 Product Routes (Require JWT)

#### `POST /products` – Adds a new product

#### `PUT /products/:id/quantity` – Updates product quantity

```json
{
  "quantity": 15
}
```

#### `GET /products` – Returns all products

All requests must include:

```
Authorization: Bearer <JWT>
```

---

## 🤖 Where AI Was Used (Honest Explanation)

This project was made with full learning intent, and **AI tools like ChatGPT** were used for:

* Understanding how to implement secure JWT authentication
* Generating Swagger documentation format and syntax
* Structuring the Express app (routes/controllers/models)
* Creating a clean, functional README
* Writing the Python test script
* Debugging error messages and speeding up development

⚠️ Final implementation, testing, and validation were done by me.

---

## 📁 Folder Structure

```
backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── test_api.py          # Python test script
├── .env                 # Env variables
├── app.js               # Express app
└── server.js            # Server startup
```

---

## ✅ Final Checklist

| Requirement                         | Status |
| ----------------------------------- | ------ |
| Login/Register API                  | ✅ Done |
| Secure Auth with JWT                | ✅ Done |
| Add, Update, Get Products API       | ✅ Done |
| Auth Middleware                     | ✅ Done |
| API Test Script (Python)            | ✅ Done |
| Swagger Docs (/api-docs)            | ✅ Done |
| MongoDB Atlas Integration           | ✅ Done |
| Clean, Simple, Functional Code      | ✅ Done |
| README with usage and documentation | ✅ Done |
| Honest mention of AI usage          | ✅ Done |

---

## 🙋 About Me

👤 **Name**: Saurabh Bachhav
📧 **Email**: [bachhavsaurabh7@gmail.com](mailto:bachhavsaurabh7@gmail.com)
🎓 **College**: IIIT Nagpur
💻 **Branch**: Computer Science and Engineering
🎯 **Batch**: 2025

```

---

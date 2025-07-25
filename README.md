# 📦 Inventory Management Tool – Backend

Welcome to the backend REST API for the **Inventory Management Tool**, created as part of the Fi Internship assignment!  
It enables:

✅ User authentication  
✅ Inventory product management (Add, Update, View)  
✅ JWT-secured routes  
✅ Interactive Swagger Docs  
✅ Postman + Python Testing Support

---

## 🛠 Tech Stack Used

| Area             | Tool/Tech               |
|------------------|-------------------------|
| Backend Language | Node.js (JavaScript)    |
| Framework        | Express.js              |
| Database         | MongoDB Atlas           |
| ORM              | Mongoose                |
| Auth             | JWT (jsonwebtoken)      |
| Password Hashing | bcryptjs                |
| Docs             | Swagger (OpenAPI)       |
| API Testing      | Python + `requests`     |

---

## 🚀 Quick Start

### 🔧 Backend Setup

```bash
cd backend
npm install
````

📁 A `.env.example` file is included for reference.
Create your `.env` file:

```env
PORT=8080
MONGO_URI=<your_mongo_atlas_uri>
JWT_SECRET=your_jwt_secret
```

🔌 Start the server:

```bash
npm run dev
```

> 📡 The API will run at: `http://localhost:8080`

---

### 🧪 Run Python API Testing Script

Make sure Python is installed:

```bash
python --version
pip install requests
python test_api.py
```

✅ This script will:

* Register a user
* Log in
* Add a product
* Update quantity
* Fetch and verify product list

---

## 📘 Swagger API Documentation

🌐 Visit: [`http://localhost:8080/api-docs`](http://localhost:8080/api-docs)

Interactive UI for:

* Exploring all routes
* Sending test requests
* Testing with JWT tokens
* Viewing schemas

---

## 📦 API Endpoints Summary

### 🔐 Auth Routes

#### `POST /register`

```json
{
  "username": "puja",
  "password": "mypassword"
}
```

#### `POST /login`

```json
{
  "access_token": "<JWT>"
}
```

---

### 📦 Product Routes (Require Bearer Token)

| Method | Endpoint                 | Description             |
| ------ | ------------------------ | ----------------------- |
| POST   | `/products`              | Add a new product       |
| PUT    | `/products/:id/quantity` | Update product quantity |
| GET    | `/products`              | Get all products        |

📌 All product requests must include:

```
Authorization: Bearer <JWT>
```

---

## 🤖 Where AI Helped (With Honesty)

AI tools like **ChatGPT** were used only to:

* Understand JWT flow
* Build Swagger docs & examples
* Draft this structured README
* Generate Python test script
* Solve bugs faster via explanations

⚠️ All final testing, decisions & logic were built and verified manually.

---

## 📂 Folder Structure

```
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── node_modules/
├── postman/
│   └── Inventory_Postman_Collection.json
├── routes/
├── .env                 # Your environment variables
├── .env.example         # Reference template
├── app.js               # Express app config
├── server.js            # Entry point
├── test_api.py          # Python testing script
├── package.json
└── README.md
```

---

## ✅ Final Checklist

| Feature                           | Status |
| --------------------------------- | ------ |
| Register/Login API                | ✅ Done |
| JWT-based Auth Middleware         | ✅ Done |
| Add / Update / Get Products       | ✅ Done |
| Python Testing Script             | ✅ Done |
| Swagger Documentation             | ✅ Done |
| Postman Collection Included       | ✅ Done |
| MongoDB Atlas Integration         | ✅ Done |
| Clean & Secure Code               | ✅ Done |
| Honest AI Mention in README       | ✅ Done |
| .env.example & Full Documentation | ✅ Done |

---

## 📥 Postman Collection

📁 Location: `backend/postman/Inventory_Postman_Collection.json`
🧪 Test your APIs instantly using Postman.

```md
👉 [Click to Download](./postman/Inventory_Postman_Collection.json)
```

---

## 🙋 About Me

| Info       | Details                                                       |
| ---------- | ------------------------------------------------------------- |
| 👤 Name    | Saurabh Bachhav                                               |
| 📧 Email   | [bt22cse130@iiitn.ac.in](mailto:bt22cse130@iiitn.ac.in) |
| 🎓 College | IIIT Nagpur                                                   |
| 🖥️ Branch | Computer Science & Engg                                       |
| 🎯 Batch   | 2026                                                          |

---

🔚 **Thank you for reviewing!**
This project was built with dedication and learning mindset.
Feel free to give feedback or suggestions! 🙌

````

---

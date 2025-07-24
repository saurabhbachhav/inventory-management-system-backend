// backend/routes/productRoutes.js
const express = require("express");
const router = express.Router();
const {
  addProduct,
  updateQuantity,
  getProducts,
} = require("../controllers/productController");
const authenticate = require("../middleware/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management APIs
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Add a new product to inventory
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - sku
 *               - quantity
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: Phone
 *               type:
 *                 type: string
 *                 example: Electronics
 *               sku:
 *                 type: string
 *                 example: PHN-001
 *               image_url:
 *                 type: string
 *                 example: https://example.com/phone.jpg
 *               description:
 *                 type: string
 *                 example: Latest Phone Model
 *               quantity:
 *                 type: integer
 *                 example: 10
 *               price:
 *                 type: number
 *                 example: 999.99
 *     responses:
 *       201:
 *         description: Product created
 *       401:
 *         description: Unauthorized
 */
router.post("/products", authenticate, addProduct);

/**
 * @swagger
 * /products/{id}/quantity:
 *   put:
 *     summary: Update quantity of a product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantity
 *             properties:
 *               quantity:
 *                 type: integer
 *                 example: 15
 *     responses:
 *       200:
 *         description: Quantity updated
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Product not found
 */
router.put("/products/:id/quantity", authenticate, updateQuantity);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   quantity:
 *                     type: integer
 *                   price:
 *                     type: number
 */
router.get("/products", authenticate, getProducts);

module.exports = router;

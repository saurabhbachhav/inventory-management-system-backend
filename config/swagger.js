// backend/config/swagger.js
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Inventory Management System API",
      version: "1.0.0",
      description: "REST API documentation for the Inventory Management Tool",
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "Local development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"], 
};

const swaggerSpec = swaggerJsDoc(options);
module.exports = swaggerSpec;

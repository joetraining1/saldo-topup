const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Test Nutech Node JS",
    version: "1.0.0",
    description:
      "REST Api Node Js Test with Nutech. Techstack used: Express, Json, Sequelize ORM, Joi, Google Cloud Platform, Google Cloud Storage",
  },
};

const options = {
  definition: swaggerDefinition,
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

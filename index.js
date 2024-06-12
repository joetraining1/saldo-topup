const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./configs/swagger");

require("dotenv").config();

const port = 5050;

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

const auth = require("./routes/Auth");

app.use("/", auth);

app.listen(port, () => {
  console.log(`app running on port: ${port}`);
});

module.exports = app;

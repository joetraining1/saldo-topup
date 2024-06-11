const router = require("express").Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get a response to this Api
 *     description: Retrieve a respon message.
 *     responses:
 *       200:
 *         description: Successful response with a respon of a message.
 */
router.get("/", (req, res) => {
  return res.status(200).send({
    message: "you are connected to this API.",
  });
});

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Get a response to this Api
 *     description: Retrieve a respon message.
 *     responses:
 *       200:
 *         description: Successful response with a respon of a message.
 */
router.get("/hello", (req, res) => {
  return res.status(200).send("Hello World!");
});
// router.post("/register", EmployeeController.register);
// router.post("/login", EmployeeController.login);

module.exports = router;

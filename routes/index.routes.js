const express = require("express");
const router = express.Router();
const usersRoutes = require("./auth.routes");
const elementsRoutes = require("./element.routes");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const userRoutes= require('./user.routes')

router.use("/auth", usersRoutes);
router.use("/elements", isAuthenticated, elementsRoutes);
router.use("/users", isAuthenticated, userRoutes);

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

module.exports = router;

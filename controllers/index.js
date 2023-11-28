const router = require("express").Router();
const userRoutes = require("/controllers/userRoutes");

router.use("/api", userRoutes);

module.exports = router;

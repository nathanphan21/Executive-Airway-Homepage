const router = require("express").Router();
const apiRoutes = require("./api/index");
const homeRoutes = require("./homepageRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;

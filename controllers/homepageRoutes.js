const router = require("express").Router();

router.get("/login", (req, res) => {
  res.render("login", { layout: "main" });
});

module.exports = router;

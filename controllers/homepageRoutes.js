const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.render("main");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/login", (req, res) => {
  try {
    res.render("login", { layout: "main" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
//a good looking homepage that has a nav bar to log in or view the executive louge benefits
//the page that shows you the benefits, a handlebars if statement that only shows the memeber benefits if logged_in
//the get /menu route will findAll from Benefit and save it to a variable, then .map it in a new variable,
//then res.render the menu page with the array variable as an option
//then do a for each inside the menu page which then uses a partial for the specifics

const router = require("express").Router();

router.get("/message", (req, res) => {
  res.json({ message: "I go to school by bus" });
});

router.get("/", (req, res) => {
  console.log("TEST!!!!!")
  const { linkingUri } = req.query;
  console.log(linkingUri);
  res.redirect(`${linkingUri}message=hello`);
});

module.exports = router;

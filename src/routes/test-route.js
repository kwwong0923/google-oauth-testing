const router = require("express").Router();

router.get("/message", (req, res) => {
  res.json({ message: "I go to school by bus" });
});

router.get("/", (req, res) => {
  const { linkingUri } = req.params;
  console.log(linkingUri);
  res.status(200).json({ message: "This is online" });
  res.redirect(`${linkingUri}message=hello`);
});

module.exports = router;

const router = require("express").Router();

router.get("/message", (req, res) => {
  res.json({ message: "I go to school by bus" });
});

router.get("/", (req, res) => {
  console.log("TEST!!!!!")
  const { linkingUri } = req.params;
  console.log(linkingUri);
  res.redirect(`expo.examples.with-webbrowser-redirect//?message:${linkingUri}`);
});

module.exports = router;

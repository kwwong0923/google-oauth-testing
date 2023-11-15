const router = require("express").Router();

router.get("/message", (req, res) => {
  res.json({message: "I go to school by bus"});
});

router.get("/", (req, res) => {
  res.status(200).json({ message: "This is online" });
});

module.exports = router;
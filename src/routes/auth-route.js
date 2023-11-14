const router = require("express").Router();
const passport = require("passport");

// Route to start OAuth flow
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Callback route for Google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  // Authentication successful, redirect or send user info
  console.log("-----user-----");
  console.log(req.user)
  const userData = JSON.stringify(req.user);
  const deepLinkUrl = `google-oauth-testing://profile?user=${encodeURIComponent(userData)}`;
  res.redirect(deepLinkUrl);
});

module.exports = router;

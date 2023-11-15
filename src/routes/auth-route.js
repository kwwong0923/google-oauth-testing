const router = require("express").Router();
const passport = require("passport");

// Route to start OAuth flow
router.get(
  "/google",
  (req, res, next) => {
    const {linkingUri} = req.query;
    req.linkingUri = linkingUri;
    console.log(`Middleware, req.linkingUri: ${req.linkingUri}`)
    next();
  },
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Callback route for Google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  // Authentication successful, redirect or send user info
  console.log("-----user-----");
  console.log(req.user);
  const userData = JSON.stringify(req.user);
  // const deepLinkUrl = `com.google-oauth-testing://profile?user=${encodeURIComponent(userData)}`;
  const deepLinkUrl = `${req.linkingUri}user=${userData}`;

  res.redirect(deepLinkUrl);
});

module.exports = router;

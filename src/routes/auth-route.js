const router = require("express").Router();
const passport = require("passport");

// Route to start OAuth flow
// router.get(
//   "/google",
//   (req, res, next) => {
//     const {linkingUri} = req.query;
//     req.linkingUri = linkingUri;
//     console.log(`Middleware, req.linkingUri: ${req.linkingUri}`)
//     next();
//   },
//   passport.authenticate("google", {
//     scope: ["profile", "email"],
//   })
// );
router.get("/google", (req, res, next) => {
  const { linkingUri } = req.query;
  passport.authenticate("google", {
    scope: ["profile", "email"],
    state: linkingUri, // Pass linkingUri in the state parameter
  })(req, res, next);
});

// Callback route for Google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  const userData = JSON.stringify(req.user);
  const linkingUri = req.query.state; // Retrieve linkingUri from the state query param
  const deepLinkUrl = `${linkingUri}user=${encodeURIComponent(userData)}`;
  res.redirect(deepLinkUrl);
});

module.exports = router;

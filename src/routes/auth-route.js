const router = require('express').Router();
const passport = require('passport');

// Route to start OAuth flow
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// Callback route for Google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // Authentication successful, redirect or send user info
    console.log("-----user-----")
    console.log(req.user);
    const user = encodeURIComponent(JSON.stringify(req.user));
    res.redirect(`myapp://profile?user=${user}`);});

module.exports = router;
const authController = {
  googleAuthCallback: (req, res) => {
      // User is authenticated, redirect to the React Native app with user data
      const userData = JSON.stringify(req.user);
      const deepLinkUrl = `google-oauth-testing://home?user=${encodeURIComponent(userData)}`;
      res.redirect(deepLinkUrl);
  }
};

module.exports = authController;
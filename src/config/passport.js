const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      // Here, you would typically find or create a user in your database
      console.log("User profile:", profile);
      done(null, profile); // Proceed with the user profile information
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id); // or user._id if you are using MongoDB
});

passport.deserializeUser((id, done) => {
  // User.findById(id).then((user) => {
  //     done(null, user);
  // });
  done(null, id); // Replace with your user fetching logic
});

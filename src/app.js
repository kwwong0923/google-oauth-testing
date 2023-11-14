require("dotenv").config();
const express = require("express");
const passport = require("passport");
const authRoutes = require("./routes/auth-route");
require("./config/passport"); // Ensure Passport is configured
const session = require("express-session");

const app = express();

// Initialize session
app.use(
  session({
    secret: "secret", // Replace with a real secret in production
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// Set up routes
app.use("/auth", authRoutes);
app.use("/test", (req, res) => {
  res.status(200).json({ message: "This is online" });
});

module.exports = app;

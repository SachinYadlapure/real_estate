const express = require('express');
const router = express.Router();
const Login = require('../Models/Signup');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const secretKey = 'your-secret-key';

router.use(cookieParser());

router.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 20 * 60 * 1000, // Set the session timeout to 30 minutes (in milliseconds)
    },
  })
);

router.post('/', async (req, res) => {
  try {
    const username = String(req.body.username);
    const password = String(req.body.password);
    const user = await Login.findOne({ username: username });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User name or password entered wrong" });
    }

    if (!password) {
      return res.status(404).json({ message: "User name or password entered wrong" });
    }

    // Compare passwords (you should use bcrypt for secure password comparison)
    if (password === user.password) {
      req.session.user = user; // Store the user in the session
      return res.status(200).json({ message: 'Authentication successful' });
    } else {
      return res
        .status(401)
        .json({ message: "User name or password entered wrong" });
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Session destroy error:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    return res.status(200).json({ message: 'Logged out successfully' });
  });
});

module.exports = router;

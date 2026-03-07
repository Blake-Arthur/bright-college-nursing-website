const userDB = {
  users: require("../models/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const path = require("path");
const fsPromises = require("fs").promises;

exports.handleLogin = async (req, res) => {
  const { user, pwd } = req.body;

  if (!user || !pwd) {
    return res.status(400).json({
      error: "Invalid Username and Password",
    });
  }

  const foundUser = userDB.users.find((person) => person.username === user);

  if (!foundUser) {
    return res.status(401).json({
      error: "Invalid Username",
    });
  }

  const match = await bcrypt.compare(pwd, foundUser.password);

  if (match) {
    //create JWTs
    const accessToken = jwt.sign(
      { username: foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "300s" },
    );

    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" },
    );

    return res.json({
      success: `User ${user} is logged in!`,
    });
  } else {
    return res.status(401).json({
      error: "Invalid Password",
    });
  }
};

// const { email, password, "g-recaptcha-response": captcha } = req.body;

//Captcha check
// if (!captcha) {
//   return renderLogin(res.status(400), {
//     error: "Please verify CAPTCHA",
//   });
// }

// try {
//   //Verify CAPTCHA with Google
//   const response = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {
//     params: {
//       secret: process.env.RECAPTCHA_SECRET_KEY,
//       response: captcha,
//     },
//   });

//   if (!response.data.success) {
//     return res.status(400).render("pages/auth/login", {
//       title: "Login",
//       error: "Please verify CAPTCHA",
//     });
//   }

//TODO Authenticate User (DB Check)

//   res.send("Login successful");
// } catch (err) {
//   console.error(err);
//   res.status(500).send("Server error");
// }

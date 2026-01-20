const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const { error } = require("console");
const PORT = process.env.PORT || 3500;

// custom middleware logger (put at start to see log for everything that follows after)
app.use(logger);

//Cross origin resource sharing
const whitelist = ["https://www.brightschoolofnursing.com", "http://localhost:3500"];
const corOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true); //-1 if index not found and in cors callback(error, allow) for more read docs
    } else {
      callback(new Error(`CORS blocked: ${origin}`));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corOptions));

// built-in middleware to handle urlencoded data
// in other words, form data:
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false }));

//built-in middleware for JSON
app.use(express.json());

//serve static files
app.use("/", express.static(path.join(__dirname, "./public")));
app.use("/About", express.static(path.join(__dirname, "./public")));
app.use("/Academics", express.static(path.join(__dirname, "./public")));
app.use("/Admissions", express.static(path.join(__dirname, "./public")));
app.use("/Campus", express.static(path.join(__dirname, "./public")));
app.use("/Courses", express.static(path.join(__dirname, "./public")));
app.use("/Policies", express.static(path.join(__dirname, "./public")));

//Route Handlers
app.use("/About", require("./routes/about.js"));
app.use("/Academics", require("./routes/academics.js"));
app.use("/Admissions", require("./routes/admissions.js"));
app.use("/Campus", require("./routes/campus.js"));
app.use("/Courses", require("./routes/courses.js"));
app.use("/Policies", require("./routes/policies.js"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//404 handler must be LAST, after everything else
app.use((req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 not found" });
  } else {
    res.type("txt").send("404 not found");
  }
});

/*Registers a global error handler
Applies to all routes
Must be defined after all other routes and middleware*/
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

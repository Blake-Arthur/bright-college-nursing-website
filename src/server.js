const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const expressLayouts = require("express-ejs-layouts");

const corsOptions = require("./config/corsOptions.js");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const canonicalize = require("./middleware/canocalizeURL");
const viewLocals = require("./middleware/viewLocals");
const { error } = require("console");

const PORT = process.env.PORT || 3500;

app
  .disable("x-powered-by") //disables tech stack information
  .use(canonicalize) //canonicalize URL
  .use(logger) // custom middleware logger (put at start to log that follows after)
  .use(express.urlencoded({ extended: false })) // built-in middleware to handle urlencoded data
  .use(express.json()) //built-in middleware for JSON
  .use(cors(corsOptions)); //Cross origin resource sharing

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(expressLayouts);
app.set("layout", "layouts/main");

//  Global view locals before routes
app.use(viewLocals);

//serve static files
app.use(express.static(path.join(__dirname, "./public")));

//Route Handlers
app.use("/", require("./routes/root"));
app.use("/about", require("./routes/about.js"));
app.use("/academics", require("./routes/academics.js"));
app.use("/admissions", require("./routes/admissions.js"));
app.use("/campus", require("./routes/campus.js"));
app.use("/courses", require("./routes/courses.js"));
app.use("/policies", require("./routes/policies.js"));

//404 handler must be LAST, after everything else (change it acc to ejs)
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

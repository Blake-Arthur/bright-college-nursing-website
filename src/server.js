const express = require("express");
const app = express();

//Trust reverse proxy (required for rate limiter in production)
app.set("trust proxy", 1);

const path = require("node:path");
const cors = require("cors");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
connectDB();

const corsOptions = require("./config/corsOptions.js");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const canonicalize = require("./middleware/canocalizeURL");
const viewLocals = require("./middleware/viewLocals");
const { error } = require("node:console");

const PORT = process.env.PORT || 3500;

const location_routes = require("./routes/location.routes.js");
const enquiry_routes = require("./routes/enquiry.routes.js");

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
app.use(express.static(path.resolve("public")));

//Route Handlers
app.use("/", require("./routes/root.routes.js"));
app.use("/api", location_routes);
app.use("/api/enquiry", enquiry_routes);
app.use("/about", require("./routes/about.routes.js"));
app.use("/academics", require("./routes/academics.routes.js"));
app.use("/admissions", require("./routes/admissions.routes.js"));
app.use("/campus", require("./routes/campus.routes.js"));
app.use("/courses", require("./routes/courses.routes.js"));
app.use("/policies", require("./routes/policies.routes.js"));
app.use("/login", require("./routes/login.routes.js"));
app.use("/register", require("./routes/register.routes.js"));
app.use("/auth", require("./routes/auth.routes.js"));

//404 handler must be LAST, after everything else
app.use((req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "./views/404.ejs"));
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

mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
  console.log("STATIC PATH:", path.resolve("public"));
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

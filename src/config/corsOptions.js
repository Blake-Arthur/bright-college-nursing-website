const whitelist = ["https://www.brightschoolofnursing.com", "http://localhost:3500"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true); //-1 if index not found and in cors callback(error, allow) for more read docs
    } else {
      callback(new Error(`CORS blocked: ${origin}`));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;

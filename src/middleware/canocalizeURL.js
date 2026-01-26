const canonicalize = (req, res, next) => {
  if (!req.originalUrl) return next();

  // Skip static assets (.css, .js, .png, etc.)
  if (req.originalUrl.match(/\.[a-zA-Z0-9]+$/)) {
    return next();
  }

  const lower = req.originalUrl.toLowerCase();

  if (req.originalUrl !== lower) {
    return res.redirect(301, lower);
  }

  next();
};

module.exports = canonicalize;

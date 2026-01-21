const canonicalize = (req, res, next) => {
  const lower = req.path.toLowerCase();
  if (req.path !== lower) {
    return res.redirect(301, lower);
  }
  next();
};

module.exports = canonicalize;

const validateRequest = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    const errors = {};
    error.details.forEach((detail) => {
      errors[detail.path[0]] = detail.message;
    });

    return res.status(400).json({
      message: "Validation failed",
      errors,
    });
  }

  req.body = value;
  next();
};

module.exports = { validateRequest };

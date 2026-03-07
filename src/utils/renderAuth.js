const authConfig = require("../config/auth.config");

exports.renderLogin = (res, error = {}) => {
  const { loginView } = authConfig;

  res.render(loginView.view, {
    ...loginView,
    ...error,
  });
};

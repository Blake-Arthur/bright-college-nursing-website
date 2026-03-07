const { renderLogin } = require("../utils/renderAuth");

exports.showLogin = (req, res, next) => {
  renderLogin(res);
};

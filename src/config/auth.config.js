module.exports = {
  loginView: {
    view: "pages/auth/login",
    title: "Login",
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
    styles: ["/styles/login-page.css"],
    transparency: 15,
    heroImage: "/images/director-msg.jpg",
  },
};

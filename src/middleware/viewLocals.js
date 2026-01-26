const viewLocals = (req, res, next) => {
  res.locals.transparency = "35]";
  res.locals.heroImage = "/images/College_Building_1.jpg";
  res.locals.heroHeight = "h-[560px]";
  res.locals.heroAlt = "Bright School of Nursing";
  res.locals.styles = ["/styles/home.css"];
  res.locals.scripts = [];
  next();
};

module.exports = viewLocals;

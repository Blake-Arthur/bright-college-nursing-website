exports.home = (req, res) => {
  res.render("pages/index", {
    title: "Bright School of Nursing",
    styles: ["/styles/home.css"],
    transparency: 35,
    heroAlt: "Bright School of Nursing",
    heroImage: "/Images/College_Building_1.jpg",
    heroHeight: "h-[720px]",
  });
};

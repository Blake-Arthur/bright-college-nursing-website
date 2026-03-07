exports.home = (req, res) => {
  res.render("pages/index", {
    title: "Bright School of Nursing",
    styles: ["styles/home.css"],
    transparency: 35,
    hero: {
      type: "image",
      src: "/Images/director-msg.jpg",
      alt: "Bright School of Nursing",
    },
  });
};

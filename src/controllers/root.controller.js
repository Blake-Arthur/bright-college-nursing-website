exports.home = (req, res) => {
  res.render("pages/index", {
    title: "Bright School of Nursing",
    styles: ["styles/home.css", "/styles/pages/about/about-us.css"],
    transparency: 35,
    hero: {
      type: "image",
      src: [
        "/images/director-msg.webp",
        "/images/educational-programmes/nursing-day/WhatsApp Image 2026-03-01 at 21.40.11.webp",
        "/images/image.png",
        "/images/Chairman Qoute.jpeg",
      ],
      alt: "Bright School of Nursing",
    },
    sliderimages: [
      {
        src: "/images/director-msg.webp",
        alt: "Director Message",
      },
      {
        src: "/images/educational-programmes/nursing-day/WhatsApp Image 2026-03-01 at 21.40.11.webp",
        alt: "Nursing Day Celebration",
      },
      {
        src: "/images/image.png",
        alt: "Campus View",
      },
      {
        src: "/images/Chairman Qoute.jpeg",
        alt: "Chairman Quote",
      },
    ],
  });
};

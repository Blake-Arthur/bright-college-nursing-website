const baseBreadcrumb = [
  { name: "Home", url: "/" },
  { name: "Campus", url: "/campus/" },
];

module.exports = {
  "hostel-transport": {
    view: "pages/campus/hostel-transport",
    title: "Hostel & Transport",
    styles: ["/styles/pages/campus/hostel-transport.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb],
    hero: {
      type: "image",
      src: "/Images/director-msg.webp",
      alt: "Bright School of Nursing",
    },
  },
};

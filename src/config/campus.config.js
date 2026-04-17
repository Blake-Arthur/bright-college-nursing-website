const baseBreadcrumb = [
  { name: "Home", url: "/" },
  { name: "Campus", url: "/" },
];

module.exports = {
  labs: {
    view: "pages/campus/labs",
    title: "Our Laboratories",
    styles: ["/styles/pages/courses.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "Our Laboratories" }],
    hero: {
      type: "image",
      src: ["/Images/director-msg.webp"],
      alt: "Bright School of Nursing",
    },
  },

  facilities: {
    view: "pages/campus/facilities",
    title: "Campus Facilities",
    styles: ["/styles/pages/courses.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "Campus Facilities" }],
    hero: {
      type: "image",
      src: ["/Images/director-msg.webp"],
      alt: "Bright School of Nursing",
    },
  },

  training: {
    view: "pages/campus/training",
    title: "Practical Training",
    styles: ["/styles/pages/courses.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "Practical Training" }],
    hero: {
      type: "image",
      src: ["/Images/director-msg.webp"],
      alt: "Bright School of Nursing",
    },
  },

  "hostel-transport": {
    view: "pages/campus/hostel-transport",
    title: "Hostel & Transport",
    styles: ["/styles/pages/campus/hostel-transport.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "Hostel & Transport" }],
    hero: {
      type: "image",
      src: ["/Images/director-msg.webp"],
      alt: "Bright School of Nursing",
    },
  },

  "cultural-events": {
    view: "pages/campus/cultural-events",
    title: "Cultural Events",
    styles: ["/styles/pages/courses.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "Cultural Events" }],
    hero: {
      type: "image",
      src: ["/Images/director-msg.webp"],
      alt: "Bright School of Nursing",
    },
  },
};

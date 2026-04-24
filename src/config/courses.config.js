const baseBreadcrumb = [
  { name: "Home", url: "/" },
  { name: "Courses", url: "/about/about-us" },
];

module.exports = {
  anm: {
    view: "pages/courses/ANM",
    title: "ANM",
    styles: ["/styles/pages/courses.css", "/styles/pages/about/contacts.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "ANM" }],
    hero: {
      type: "image",
      src: ["/images/director-msg.jpg"],
      alt: "Bright College of Nursing",
    },
  },
  "bsc-nursing": {
    view: "pages/courses/bsc-nursing",
    title: "B.Sc. Nursing",
    styles: ["/styles/pages/courses.css", "/styles/pages/about/contacts.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "B.Sc. Nursing" }],
    hero: {
      type: "image",
      src: ["/images/director-msg.jpg"],
      alt: "Bright College of Nursing",
    },
  },
  dmlt: {
    view: "pages/courses/DMLT",
    title: "DMLT",
    styles: ["/styles/pages/courses.css", "/styles/pages/about/contacts.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "DMLT" }],
    hero: {
      type: "image",
      src: ["/images/director-msg.jpg"],
      alt: "Bright College of Nursing",
    },
  },
  gnm: {
    view: "pages/courses/GNM",
    title: "GNM",
    styles: ["/styles/pages/courses.css", "/styles/pages/about/contacts.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "GNM" }],
    hero: {
      type: "image",
      src: ["/images/director-msg.jpg"],
      alt: "Bright College of Nursing",
    },
  },
  "pbbsc-nursing": {
    view: "pages/courses/pbbsc-nursing",
    title: "PBB.Sc. Nursing",
    styles: ["/styles/pages/courses.css", "/styles/pages/about/contacts.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "PBB.Sc. Nursing" }],
    hero: {
      type: "image",
      src: ["/images/director-msg.jpg"],
      alt: "Bright College of Nursing",
    },
  },
};

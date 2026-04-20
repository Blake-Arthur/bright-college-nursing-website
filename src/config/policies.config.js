const baseBreadcrumb = [
  { name: "Home", url: "/" },
  { name: "Policies", url: "/policies/code-of-conduct" },
];

module.exports = {
  "code-of-conduct": {
    view: "pages/policies/code-of-conduct",
    title: "Code of Conduct",
    styles: ["/styles/pages/courses.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb],
    hero: {
      type: "image",
      src: ["/images/director-msg.webp"],
      alt: "Bright School of Nursing",
    },
  },
  "legal-compliance": {
    view: "pages/policies/legal-compliance",
    title: "Legal & Compliance",
    styles: ["/styles/pages/courses.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "Legal & Compliance" }],
    hero: {
      type: "image",
      src: ["/images/director-msg.webp"],
      alt: "Bright School of Nursing",
    },
  },
};

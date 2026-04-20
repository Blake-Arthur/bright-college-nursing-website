const baseBreadcrumb = [
  { name: "Home", url: "/" },
  { name: "Admissions", url: "/admissions/admission-procedure" },
];
const scholarships = require("../seed/data/scholarship_details.json");

module.exports = {
  "admission-procedure": {
    view: "pages/admissions/admission-procedure",
    title: "Admission Procedure",
    styles: ["/styles/pages/courses.css", "/styles/pages/about/contacts.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "Admission Procedure" }],
    hero: {
      type: "image",
      src: ["/images/director-msg.jpg"],
      alt: "Bright School of Nursing",
    },
  },

  "fee-structure": {
    view: "pages/admissions/fee-structure",
    title: "Fee Structure",
    styles: ["/styles/pages/courses.css", "/styles/pages/about/contacts.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "Fee Structure" }],
    hero: {
      type: "image",
      src: ["/images/director-msg.jpg"],
      alt: "Bright School of Nursing",
    },
  },

  scholarship: {
    view: "pages/admissions/scholarship",
    title: "Scholarship Application",
    styles: ["/styles/pages/courses.css", "/styles/pages/about/contacts.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "Scholarship Details" }],

    hero: {
      type: "image",
      src: ["/images/director-msg.jpg"],
      alt: "Bright School of Nursing",
    },
    data: {
      scholarships,
    },
  },

  "online-admission": {
    view: "pages/admissions/online-admission",
    title: "Online Admission",
    styles: [
      "/styles/pages/courses.css",
      "/styles/pages/admissions/online-admission.css",
      "styles/pages/admissions/enquiry-form.css",
    ],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "Online Admission" }],
    hero: {
      type: "image",
      src: ["/images/director-msg.jpg"],
      alt: "Bright School of Nursing",
    },
  },
};

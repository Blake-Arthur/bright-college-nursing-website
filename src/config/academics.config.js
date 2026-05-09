const calendar2025 = require("../seed/data/holidays_2025.json");

const baseBreadcrumb = [
  { name: "Home", url: "/" },
  { name: "Academics", url: "/academics/academic-calendar" },
];

module.exports = {
  "academic-calendar": {
    view: "pages/academics/academic-calendar",
    title: "Academic Calendar",
    calendarData: calendar2025,
    styles: ["/styles/tables.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "Academic Calendar" }],
    hero: {
      type: "image",
      src: ["/images/director-msg.jpg"],
      alt: "Bright College of Nursing",
    },
  },

  "breastfeeding-week": {
    view: "pages/academics/breastfeeding-week",
    title: "World Breast Feeding Week",
    styles: ["/styles/pages/about/director-msg.css"],
    breadcrumb: [...baseBreadcrumb, { name: "World Breastfeeding Week" }],
    hero: {
      type: "image",
      src: [
        "/images/educational-programmes/breastfeeding-week/World BreastFeeding week 1-7Aug.webp",
      ],
      alt: "World BreastFeeding Week Banner",
    },
  },

  "nursing-day": {
    view: "pages/academics/nursing-day",
    title: "International Nursing Day",
    styles: ["/styles/pages/about/director-msg.css"],
    breadcrumb: [...baseBreadcrumb, { name: "International Nursing Day" }],
    hero: {
      type: "image",
      src: [
        "/images/educational-programmes/nursing-day/WhatsApp Image 2026-03-01 at 21.40.11.jpeg",
        "/images/director-msg.webp",
        "/images/educational-programmes/nursing-day/WhatsApp Image 2026-03-17 at 17.12.18.jpeg",
      ],
      alt: "International Nursing Day",
    },
  },

  careers: {
    view: "pages/academics/careers",
    title: "Careers at Bright Nursing",
    styles: ["/styles/pages/about/director-msg.css", "/styles/pages/courses.css"],
    breadcrumb: [...baseBreadcrumb, { name: "Careers at Bright Nursing" }],
    hero: {
      type: "image",
      src: ["/images/director-msg.jpg"],
      alt: "Careers at Bright Nursing",
    },
  },
};

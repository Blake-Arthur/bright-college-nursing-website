const baseBreadcrumb = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about/about-us" },
];

module.exports = {
  "about-us": {
    view: "pages/about/about-us",
    title: "About Us",
    styles: ["/styles/pages/about/about-us.css", "/styles/pages/about/director-msg.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb],
    hero: {
      type: "image",
      src: ["/images/director-msg.webp"],
      alt: "Bright College of Nursing",
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
    ],
  },

  "director-message": {
    view: "pages/about/director-message",
    title: "Chairman's Message",
    styles: ["/styles/pages/about/director-msg.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "Chairman's Message" }],
    hero: {
      type: "image",
      src: ["/images/director-msg.webp"],
      alt: "Bright College of Nursing",
    },
  },

  "contact-us": {
    view: "pages/about/contact-us",
    title: "Contact Us",
    styles: ["/styles/pages/about/contact-us.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "Contact Us" }],
    hero: {
      type: "map",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29931.405903927098!2d85.77867507934566!3d20.324023603422518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909005649d591%3A0x677cfb67993dfab9!2sBright%20College%20of%20Nursing!5e0!3m2!1sen!2sin!4v1771978190901!5m2!1sen!2sin",
    },
  },

  contacts: {
    view: "pages/about/contacts",
    title: "Contacts",
    styles: ["/styles/pages/about/contacts.css"],
    transparency: "15",
    breadcrumb: [...baseBreadcrumb, { name: "Contacts" }],
    hero: {
      type: "image",
      src: ["/images/director-msg.webp"],
      alt: "Bright College of Nursing",
    },
  },
};

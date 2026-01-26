exports.renderFrom = (pages) => (req, res, next) => {
  const slug = req.params.slug;
  const page = pages[slug];
  if (!page) return next();
  res.render(page.view, page);
};

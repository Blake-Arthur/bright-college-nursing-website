exports.renderFrom = (config) => {
  return (req, res, next) => {
    const page = config[req.params.slug];

    if (!page) return next();

    res.render(page.view, {
      title: page.title,
      styles: page.styles,
      hero: page.hero,
      transparency: page.transparency,
      breadcrumbs: page.breadcrumb || [],
    });
  };
};

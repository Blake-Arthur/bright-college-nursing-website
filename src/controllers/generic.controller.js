exports.renderFrom = (config) => {
  return (req, res, next) => {
    const page = config[req.params.slug];

    if (!page) return next();

    res.render(page.view, {
      ...page,
      ...(page.data || {}),
      breadcrumbs: page.breadcrumb || [],
    });
  };
};

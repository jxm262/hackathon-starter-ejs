/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  console.log(req.session.flash);
  res.render('home', {
    title: 'Home',
    flash: req.session.flash
  });
};

/**
 * GET index page.
 */
exports.index = function(req, res) {
   res.render('index', {
      title: 'Simon Says Code'
   });
};
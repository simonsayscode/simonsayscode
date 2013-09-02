/**
 * GET index page.
 */
exports.index = function(req, res) {
    res.render('index', {
        layout: 'layouts/main',
        title: 'Simon Says Code',
        content: 'content goes here'
    });
};
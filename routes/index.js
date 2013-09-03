/**
 * GET index page.
 */
exports.index = function (req, res) {
    res.render('index', {
        layout: 'layouts/main',
        title: 'Simon Says Code',
        footer: 'Copyright © ' + (new Date()).getFullYear() + ' Simon Says Code'
    });
};

exports.contentlayout = function (req, res) {
    res.send(require('../views/layouts/contentlayout')());
};
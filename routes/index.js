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

var contentlayout = require('../views/layouts/contentlayout');
exports.contentlayout = function (req, res) {
    res.send(contentlayout());
};

var content = {
    'about-me': require('../views/about-me'),
    'projects': require('../views/projects'),
    'resume': require('../views/resume'),
    'stuff': require('../views/stuff')
};
exports.content = function (req, res) {
    var id = req.params.id;
    if (id) {   
        res.send(content[id]());
    }
};
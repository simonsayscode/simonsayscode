define(['jquery'], function ($) {
    var loadContent = function (id) {
        $.get('/contentlayout', function (response) {
            console.log(response);
            $('body').append($(response));
        });
    };

    return loadContent;
});
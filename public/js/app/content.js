define(['jquery'], function ($) {

    var loadContentLayout = function () {
        return $.get('/contentlayout');
    };

    var loadContent = function (id) {
        return $.get('/contentlayout/' + id);
    };

    var contentClick = function (event) {
        var id = $(event.currentTarget).attr('id');

        if (!$('#content-layout').length) {
            $.when(loadContentLayout(), loadContent(id)).done(function (layout, content) {
                var $layout = $(layout[0]);
                var $content = $(content[0]);

                $layout.find('#content').append($content);

                $layout.find('#close-btn').on('click', function(event) {
                    $layout.hide();
                });

                $('#main').after($layout);
            });
        } else if (!$('#' + id + '-content').length) {
            $.when(loadContent(id)).done(function (content) {
                var $content = $(content);

                $('[id$="-content"]').hide();
                $('#content').append($content);
                $('#content-layout').show();
            });
        } else {            
            $('[id$="-content"]').hide();
            $('#' + id + '-content').show();
            $('#content-layout').show();
        }

    };

    return {
        contentClick: contentClick
    };
});
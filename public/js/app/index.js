define(['jquery', './content'], function ($, content) {
    $(function () {
        $('#about-me').on({
            'mouseover': function (event) {
                $('#about-me-hover').show();
                $('#about-me > .blur').show();
            },
            'mouseout': function (event) {
                $('#about-me-hover').hide();
                $('#about-me > .blur').hide();
            }
        });

        $('#resume').on({
            'mouseover': function (event) {
                $('#resume-hover').show();
                $('#resume > .blur').show();
            },
            'mouseout': function (event) {
                $('#resume-hover').hide();
                $('#resume > .blur').hide();
            }
        });

        $('#stuff').on({
            'mouseover': function (event) {
                $('#stuff-hover').show();
                $('#stuff > .blur').show();
            },
            'mouseout': function (event) {
                $('#stuff-hover').hide();
                $('#stuff > .blur').hide();
            }
        });

        $('#projects').on({
            'mouseover': function (event) {
                $('#projects-hover').show();
                $('#projects > .blur').show();
            },
            'mouseout': function (event) {
                $('#projects-hover').hide();
                $('#projects > .blur').hide();
            }
        });

        // hooking up event handler for content click
        $('.tile').on('click', content.contentClick);
    });
});
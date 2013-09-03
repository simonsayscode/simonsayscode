define(['jquery'], function ($) {
    $(function () {
        $('#about-me-tile').on({
            'mouseover': function (event) {
                $('#about-me-hover').show();
                $('#about-me-tile > .blur').show();
            },
            'mouseout': function (event) {
                $('#about-me-hover').hide();
                $('#about-me-tile > .blur').hide();
            }
        });

        $('#resume-tile').on({
            'mouseover': function (event) {
                $('#resume-hover').show();
                $('#resume-tile > .blur').show();
            },
            'mouseout': function (event) {
                $('#resume-hover').hide();
                $('#resume-tile > .blur').hide();
            }
        });

        $('#stuff-tile').on({
            'mouseover': function (event) {
                $('#stuff-hover').show();
                $('#stuff-tile > .blur').show();
            },
            'mouseout': function (event) {
                $('#stuff-hover').hide();
                $('#stuff-tile > .blur').hide();
            }
        });

        $('#projects-tile').on({
            'mouseover': function (event) {
                $('#projects-hover').show();
                $('#projects-tile > .blur').show();
            },
            'mouseout': function (event) {
                $('#projects-hover').hide();
                $('#projects-tile > .blur').hide();
            }
        });

    });
});
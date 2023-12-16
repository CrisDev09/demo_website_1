odoo.define("demo_website_1", function (require) {
    "use strict";
    var player = videojs('wb-video', {
        fluid: true
    })

    AOS.init();

    document.addEventListener('DOMContentLoaded', function () {
        var elements = document.querySelectorAll('.upward');

        var show = function (element) {
            element.classList.add('show');
        };

        var showOnScroll = function () {
            elements.forEach(function (element) {
                var elementPos = element.getBoundingClientRect().top;
                var screenPos = window.innerHeight / 1.2;

                if (elementPos < screenPos) {
                    show(element);
                }
            });
        };

        window.addEventListener('scroll', showOnScroll);
    });
});

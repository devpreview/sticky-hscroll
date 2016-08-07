(function ($) {
    function top(e) {
        return e.offset().top;
    }

    function bottom(e) {
        return e.offset().top + e.height();
    }

    function onscroll(element, scrollbar, scrollLeft) {
        scrollbar.show();
        if (top(element) < top(scrollbar) && bottom(element) > bottom(scrollbar)) {
            scrollbar.find('div').css('width', element.get(0).scrollWidth + 'px');
            scrollbar.css({left: element.offset().left, width: element.outerWidth()});
            scrollbar.scrollLeft(scrollLeft);
        } else {
            scrollbar.hide();
        }
    }

    function init(container) {
        container.find('.sticky-hscroll').each(function () {
            var element = $(this);
            if (element.data('has-sticky-hscroll') === true) {
                return;
            }
            element.data('has-sticky-hscroll', true);
            var scrollbar = $('<div class="sticky-hscroll-scrollbar"><div></div></div>');
            var scrollLeft = 0;
            scrollbar.appendTo($(document.body));
            scrollbar.hide();
            scrollbar.css({
                overflowX: 'auto',
                position: 'fixed',
                width: '100%',
                bottom: 0
            });
            scrollbar.find('div').css('height', '0.1px');
            scrollbar.scroll(function () {
                element.scrollLeft(scrollbar.scrollLeft());
            });
            element.scroll(function () {
                scrollLeft = element.scrollLeft();
            });
            onscroll(element, scrollbar, scrollLeft);
            $(document).scroll(function () {
                onscroll(element, scrollbar, scrollLeft);
            });
            $(window).resize(function () {
                onscroll(element, scrollbar, scrollLeft);
            });
        });
    }

    $.fn.stickyHScroll = function () {
        var container = this;
        init(container);
        $(document).scroll(function () {
            init(container);
        });
        $(window).resize(function () {
            init(container);
        });
        return this;
    };
}(jQuery));

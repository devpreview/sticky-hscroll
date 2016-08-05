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

    $.fn.stickyHScroll = function () {
        this.find('.table-responsive').each(function () {
            var element = $(this);
            var scrollbar = $('<div class="table-responsive-hscroll"><div></div></div>');
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
            $(window).scroll(function () {
                onscroll(element, scrollbar, scrollLeft);
            });
            $(window).resize(function () {
                onscroll(element, scrollbar, scrollLeft);
            });
        });
        return this;
    };
}(jQuery));

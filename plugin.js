(function ($) {
    var scrollbar = $('<div class="table-responsive-hscroll"><div></div></div>');
    var fakecontent = scrollbar.find('div');
    var lastScroll;
    var container;

    function top(e) {
        return e.offset().top;
    }

    function bottom(e) {
        return e.offset().top + e.height();
    }

    var active = $([]);
    function find_active() {
        scrollbar.show();
        var active = $([]);
        container.find('.table-responsive').each(function () {
            if (top($(this)) < top(scrollbar) && bottom($(this)) > bottom(scrollbar)) {
                fakecontent.width($(this).get(0).scrollWidth);
                fakecontent.height(1);
                active = $(this);
            }
        });
        fit(active);
        return active;
    }

    function fit(active) {
        if (!active.length)
            return scrollbar.hide();
        scrollbar.css({left: active.offset().left, width: active.outerWidth()});
        fakecontent.width($(this).get(0).scrollWidth);
        fakecontent.height(1);
        delete lastScroll;
    }

    function onscroll() {
        var oldactive = active;
        active = find_active();
        if (oldactive.not(active).length) {
            oldactive.unbind('scroll', update);
        }
        if (active.not(oldactive).length) {
            active.scroll(update);
        }
        update();
    }


    function scroll() {
        if (!active.length)
            return;
        if (scrollbar.scrollLeft() === lastScroll)
            return;
        lastScroll = scrollbar.scrollLeft();
        active.scrollLeft(lastScroll);
    }

    function update() {
        if (!active.length)
            return;
        if (active.scrollLeft() === lastScroll)
            return;
        lastScroll = active.scrollLeft();
        scrollbar.scrollLeft(lastScroll);
    }

    $.fn.stickyHScroll = function () {
        container = this;
        scrollbar.appendTo($(document.body));
        scrollbar.hide();
        scrollbar.css({
            overflowX: 'auto',
            position: 'fixed',
            width: '100%',
            bottom: 0
        });
        scrollbar.scroll(scroll);
        onscroll();
        $(window).scroll(onscroll);
        $(window).resize(onscroll);
        return this;
    };
}(jQuery));

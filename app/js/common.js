$(document).ready(function () {

    //slider home
    $('.first-slider, .second-slider, .third-slider, .fouth-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
    //header search popup
    $(".header-input").click(function () {
        $(".header-search-menu").addClass('active');
    });

    //header search on mobile
    $(".header-svg").click(function () {
        $(".header-search, .header-input, .overlay, .header-delete-img, .header-svg-two, .header-svg").addClass('active');
    });
    $(".header-delete-img, .overlay").click(function () {
        $(".header-search, .header-input, .overlay, .header-delete-img, .header-svg-two, .header-svg, .header-search-menu").removeClass('active');
    });

    //click on burger in a header
    $('.header-btn-menu').click(function(){
        $(this).toggleClass('btn-active');
        $('.header-menu-block').addClass('active');
        bodyFreezeScroll();
        if (!$(this).hasClass('btn-active')) {
            $('.header-menu-block').removeClass('active');
            bodyUnfreezeScroll();
        }
    });

    var $body = $(window.document.body);
    function bodyFreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('overflow', 'hidden');
        $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth));
        // $body.css('position', 'fixed');
    }

    function bodyUnfreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('marginRight', '0');
        $body.css('overflow', 'auto');
        $body.css('position', 'relative');
    }

    //catalog filter value
    $(".filter-count-line").slider({
        min: 364,
        max: 6000,
        values: [364,6000],
        step: 100,
        range: true,
        stop: function(event, ui) {
            $(".minCost").val($(".filter-count-line").slider("values",0));
            $(".maxCost").val($(".filter-count-line").slider("values",1));
        },
        slide: function(event, ui){
            $(".minCost").val($(".filter-count-line").slider("values",0));
            $(".maxCost").val($(".filter-count-line").slider("values",1));
        },
    });

    $(".catalog-left-close", this).click(function (e) {
        e.preventDefault();
        $('.catalog-left-link', this).css("display", "none");
    });

    //catalog tabs in a card
    $('.slider-choice-item').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var imageSrc = $(this).find('.slider-choice-img').data('src');
        $(this).closest('.right-card-top').find('.slider-transfer-img').attr('src', imageSrc);
    });

    // $('.slider-choice-item-plus').click(function () {
    //     $('.slider-choice-item-drop, .slider-choice-item-plus').addClass('hide');
    // });
    // jQuery.fn.extend({
    //     toggleText: function (a, b){
    //         var isClicked = false;
    //         var that = this;
    //         $(this).click(function (){
    //             if (isClicked) { that.text(a); isClicked = false; }
    //             else { that.text(b); isClicked = true; }
    //         });
    //         return this;
    //     }
    // });
    //
    // $(".right-card-field").click(function () {
    //     $('.right-card-add', this).text("В сравнении");
    // });
    $('.right-card-field').click(function() {
        $('.right-card-add', this).text() === "добавить в сравнение" ? $('.right-card-add', this).text("В сравнении") :  $('.right-card-add', this).text("добавить в сравнение");
    });

    $(".catalog-right-filter").click(function () {
        $(".catalog-left").addClass('active');
        bodyFreezeScroll();
    });
    $(".catalog-left-main-img").click(function () {
        $(".catalog-left").removeClass('active');
        bodyUnfreezeScroll();
    });
    //select
    $('select').each(function () {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
});






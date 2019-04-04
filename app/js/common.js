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

    //tabs (page view)
    function checkHeight(){
        var currentHeight = $('.view-tabs-item.active').height();
        $('.view-tabs-main').height(currentHeight);
    }
    checkHeight();
    $('.view-tabs-link').click(function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $('.view-tabs-item').eq($(this).index()).addClass('active').siblings().removeClass('active');
        checkHeight();
    });

    //slider (page view)
    $('.view-second-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            }

        ]
    });

    //search close

    $(document).mouseup(function (e) {
        var container = $(".header-search-menu");
        if (container.has(e.target).length === 0){
            container.removeClass('active');
        }
    });

    //add colors (page view)

    $('.order-popup-item-btn').click(function(){
        $(this).addClass('active');
        $(this).closest('.order-popup-row').find('.order-popup-colors').show();
        setTimeout(function(){
            checkFlex();
        });
    });


    $('.order-popup-colors-item').click(function(){
        $(this).closest('.order-popup-row').clone(true).appendTo('.order-popup-column');
        $('.order-popup-row').eq($('.order-popup-row').length - 1).find('.order-popup-item-btn').removeClass('active');
        $('.order-popup-row').eq($('.order-popup-row').length - 1).find('.order-popup-colors').hide();
       var currentColor = $(this).find('.order-popup-colors-img').attr('src');
       $(this).closest('.order-popup-row').find('.order-popup-item-btn').removeClass('active');
       $(this).closest('.order-popup-row').find('.order-popup-item-img').attr('src', currentColor);
        $(this).closest('.order-popup-row').find('.order-popup-colors').hide();

        setTimeout(function(){
            checkFlex();
        });
    });

    //popup (page view)

    $('.js-popup').click(function(e){
        e.preventDefault();
        $('.order-popup').addClass('active');
        bodyFreezeScroll();
    });

    $('.order-popup-close, .thank-popup-btn').click(function(e){
        e.preventDefault();
        $('.order-popup, .thank-popup').removeClass('active');
        bodyUnfreezeScroll();
    });
    $('.order-popup-form').submit(function(e){
        e.preventDefault();
        $('.order-popup').removeClass('active');
        $('.thank-popup').addClass('active');
    });
    checkFlex();

    //slider (page view)
    $('.compare-right-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 994,
                settings: "unslick"
            }
        ]
    });
    $('.compare-right-close').click(function(e){
        e.preventDefault();
        if($('.compare-right-slide').length > 1) {
            var slideIndex = $(this).closest('.compare-right-slide').index();
            if($(window).width() > 993) {
                $('.compare-right-slider').slick('slickRemove', slideIndex);
            }
            else {
                $(this).closest('.compare-right-slide').remove();
            }
        }
    });

    //grid (page portfolio)

    $('.portfolio-content').masonry({
        // options
        itemSelector: '.portfolio-item',
        gutter: 16,
        percentPosition: true
    });

    //gallery (page work)

    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            // "zoom",
            //"share",
            // "slideShow",
            //"fullScreen",
            //"download",
            // "thumbs",
            "close"],
        infobar: false
    });

    //slider (page work)
    $('.work-left').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 50000,
                settings: "unslick"
            },
            {
                breakpoint: 731,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //phone mask (page view)

    $(".order-popup-btns-input").mask("+38 (999) 99 99 999",{placeholder:"+38 (---) -- -- ---"});
});
function checkFlex(){
    var popupHeight = $('.order-popup-main').outerHeight();
    if (popupHeight + 20 > $(window).height()) {
        $('.order-popup').addClass('flex-start');
    }
    else {
        $('.order-popup').removeClass('flex-start');
    }
}

$(window).resize(function(){
    checkFlex();
});





// search
let searchBody = $('.header__search-body');
let searchButton = $('.header__search-button');
let searchClose = $('.header__search-close');
searchButton.click(function () {
    searchBody.fadeTo(100, 1, function () {
        $(document).mouseup(function (e) {
            if (!searchBody.is(e.target) && searchBody.has(e.target).length === 0) {
                searchBody.fadeOut();
            }
        });
    });

    $('.header__search-close').click(function () {
        searchBody.fadeOut();
    })
})


// user
let personButton = $('.person__button');
let person = $('.person');
let personLogScreen = $('.person__logScreen');

personButton.click(function () {
    personLogScreen.toggleClass('person__logScreen--show');
    personButton.toggleClass('roundBtn--hovered');
    $(document).mouseup(function (e) {
        if (!person.is(e.target) && person.has(e.target).length === 0) {
            personLogScreen.removeClass('person__logScreen--show');
            personButton.removeClass('roundBtn--hovered');
        }
    });
})


// catalog on tablet and mobile
let catalogHead = $('.catalog__heading--hidden');
let catalog = $('.catalog');

catalogHead.click(function () {
    // catalog.addClass('catalog--open');
    catalog.show();
    $(document).mouseup(function (e) {
        if (!catalog.is(e.target) && catalog.has(e.target).length === 0) {
            catalog.fadeOut();
        }
    });
})


// catalog close
let catalogClose = $('.catalog__back--bold');

catalogClose.click(function () {
    catalog.fadeOut();
})


let catalogItemFirst = $('.catalog__item--first');
let catalogItemSecond = $('.catalog__item--second');
let catalogItemThird = $('.catalog__item--third');

let catalogBackFirst = $('.catalog__back-first');
let catalogBackSecond = $('.catalog__back-second');
let catalogBackThird = $('.catalog__back-third');

let catalogItemShow = 'catalog__item--show';
let catalogItemShowThird = 'catalog__item--showThird';

let children;
let children2;

function catalogShow(click_item, first, second, addClass, childrenVar) {
    click_item.click(function () {

        childrenVar = $(this).children('.catalog__item-body');
        childrenVar.addClass(addClass);
        first.removeClass('catalog__back--show');

        second.addClass('catalog__back--show').click(function () {
            childrenVar.removeClass(addClass);
            first.addClass('catalog__back--show');
            second.removeClass('catalog__back--show');
        });
    })
}

catalogShow(catalogItemFirst, catalogBackFirst, catalogBackSecond, catalogItemShow, children);

catalogShow(catalogItemSecond, catalogBackSecond, catalogBackThird, catalogItemShow, children2);

// mobile menu
let menuIcon = $('.header__menu-icon');
let menuBody = $('.header__menu-body');

menuIcon.click(function () {
    menuIcon.toggleClass('header__menu-icon--open');
    menuBody.toggleClass('header__menu-body--open');
})


// splitted slider
$('#slider-1 .sliderBlock__grid--splitted').slick({
    appendDots: $('#slider-1 .sliderBlock__dots'),
    appendArrows: $('#slider-1 .sliderBlock__arrows'),
    slidesToShow: 4,
    rows: 2,
    dots: true,
    nextArrow: '<a href="javascript://" class="sliderBlock__arrow sliderBlock__arrow-next"><span class="icon-chevron"></span></a>',
    prevArrow: '<a href="javascript://" class="sliderBlock__arrow sliderBlock__arrow-prev"><span class="icon-chevron"></span></a>',
    responsive: [{
            breakpoint: 1570,
            settings: {
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 550,
            settings: "unslick"
        }
    ]
});


let slider3 = $('#slider-3');
let slider2 = $('#slider-2');

function slider(item) {
    item.find('.sliderBlock__grid').slick({
        appendArrows: item.find('.sliderBlock__arrows'),
        appendDots: item.find('.sliderBlock__dots'),
        slidesToShow: 5,
        rows: 2,
        dots: true,
        nextArrow: '<a href="javascript://" class="sliderBlock__arrow sliderBlock__arrow-next"><span class="icon-chevron"></span></a>',
        prevArrow: '<a href="javascript://" class="sliderBlock__arrow sliderBlock__arrow-prev"><span class="icon-chevron"></span></a>',
        responsive: [{
                breakpoint: 1450,
                settings: {
                    slidesToShow: 4
                }
            },

            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 550,
                settings: "unslick"
            }
        ]
    });
}

$(document).ready(function () {
    slider(slider2);

    slider(slider3);


    $('.language').selectric();

    $('.dropdown-order').selectric();

    $('.dropdown-group').selectric();

    $('#checkForm-select1').selectric();

    $('#checkForm-select2').selectric();

    $('#checkForm-select3').selectric();

    $('#checkForm-select4').selectric();

    $('#checkForm-select5').selectric();

    $('#check-address').selectric();

    $('.data-select-day').selectric();

    $('.data-select-month').selectric();

    $('.data-select-year').selectric();
})

let filter = $('.filter');
let filterBody = $('.filter__body')

$('.filter__mobileLabel').click(function () {
    $('.filter__body').toggleClass('filter__body--show');
    $(document).mouseup(function (e) {
        if (!filter.is(e.target) && filter.has(e.target).length === 0) {
            filterBody.removeClass('filter__body--show');
        }
    });
})


$('.history__heading').click(function () {
    $(this).parent().toggleClass('history__item--open');
    $('.history__body-back').click(function () {
        $('.history__item--open').removeClass('history__item--open');
    })
})


$('.slider__top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__bottom'
});

$('.slider__bottom').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider__top',
    appendArrows: $('.slider__arrows'),
    nextArrow: '<a href="javascript://" class="sliderBlock__arrow sliderBlock__arrow-next"><span class="icon-chevron"></span></a>',
    prevArrow: '<a href="javascript://" class="sliderBlock__arrow sliderBlock__arrow-prev"><span class="icon-chevron"></span></a>',
    responsive: [
        {
            breakpoint: 600,
            settings: {
                vertical: true,
            }
        },
    ]
});


function popups() {
    $('.popups').addClass('popups--open');
    $('.content').addClass('content--fixed');
}

function popupsClose(){
    $('.popup').hide();
    $('.popups').removeClass('popups--open');
    $('.content').removeClass('content--fixed');
}

function popupRegister(){
    $('.popup').hide();
    popups()
    $('.popup__register').fadeIn();
}

function popupLogin(){
    $('.popup').hide();
    popups()
    $('.popup__login').fadeIn();
}

function popupReset1(){
    $('.popup').hide();
    popups()
    $('.popup__reset1').fadeIn();
}

function popupReset2(){
    $('.popup').hide();
    popups()
    $('.popup__reset2').fadeIn();
}

function popupCallback(){
    $('.popup').hide();
    popups()
    $('.popup__callback').fadeIn();
}
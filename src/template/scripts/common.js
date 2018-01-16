$(document).ready(function($) {

	$('.text_phone').mask('+7 (999) 999-99-99');

	$('.banner__wrap').slick({
		arrows: false,
		dots: true
	});

  $('.blocks__item').hover(function () {
    $('.blocks__item').removeClass('blocks__item_active')
    var attr = $(this).attr('data-club-item');

    $('.clubs__item').removeClass('clubs__item_active');
    $('.clubs__item:nth-of-type(' + attr + ')').addClass('clubs__item_active');

  })

  $('.clubs__item').hover(function () {
    $('.clubs__item').removeClass('clubs__item_active')
    var attr = $(this).index() + 1;
    console.log(attr);
    $('.blocks__item').removeClass('blocks__item_active');
    $('.blocks__item[data-club-item = ' + attr + ']').addClass('blocks__item_active');

  })

  $('.blocks__item').hover(function () {
    var attr = $(this).attr('data-club-item');

    $('.clubs__item').removeClass('clubs__item_active');
    $('.clubs__item:nth-of-type(' + attr + ')').addClass('clubs__item_active');

  })

  $('.gallery__list').slick(
    {
      // centerMode: true,
      // variableWidth: true,
      slidesToShow: 4,
      responsive: [{
        breakpoint: 1210,
        settings: {
          slidesToShow: 3
        }}, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }}, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }}
      ]
    }
  );
});
















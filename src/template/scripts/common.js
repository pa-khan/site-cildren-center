$(document).ready(function($) {

	$('.text_phone').mask('+7 (999) 999-99-99');

	$('.banner__wrap').slick({
		arrows: false,
		dots: true
	});

  $('.blocks__item').hover(function () {
    var attr = $(this).attr('data-club-item');

    $('.clubs__item').removeClass('clubs__item_active');
    $('.clubs__item:nth-of-type(' + attr + ')').addClass('clubs__item_active');

  })

  $('.club__toggle').click(function () {
    $('.club').toggleClass('club_toggle');
    $('.club__toggle-icon').toggleClass('club__toggle-icon-rotate');
  })

  $('.gallery__list').slick(
    {
      // centerMode: true,
      // variableWidth: true,
      slidesToShow: 4
    }
  );
});
















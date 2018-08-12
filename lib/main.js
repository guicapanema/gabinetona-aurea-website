'use strict';

// document.addEventListener('DOMContentLoaded', () => {
//     $('.home-videos').slick({
//     });
// });

$('.navbar-item.search').click(function () {
	$(this).children('.search-box').toggleClass('is-hidden');
});

$('.search-box').click(function (event) {
	event.stopPropagation();
});

$(document).ready(function () {
	$('.home-videos').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-prev"><span class="icon is-large"><i class="fas fa-chevron-left fa-3x"></i></span></button>',
		nextArrow: '<button class="slick-next"><span class="icon is-large"><i class="fas fa-chevron-right fa-3x"></i></span></button>'
	});
});
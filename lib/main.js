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

$('#hero-play').click(function (event) {
	console.debug('hero-play');
	$('.hero').addClass('is-hidden');
	$('#hero-video-container').html('<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/284145465?autoplay=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>');
});

$('.modal-open').click(function (event) {
	$($(this).attr('data-target')).addClass('is-active');
});

$('.modal-icon.close, .modal-background').click(function (event) {
	$('.modal').removeClass('is-active');
});

$(document).ready(function () {
	$('.home-videos').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-prev"><span class="icon is-large"><i class="fas fa-chevron-left fa-3x"></i></span></button>',
		nextArrow: '<button class="slick-next"><span class="icon is-large"><i class="fas fa-chevron-right fa-3x"></i></span></button>'
	});

	$('.slider-gabinetona').slick({
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: '<button class="slick-prev"><span class="icon is-large"><i class="fas fa-chevron-left fa-3x"></i></span></button>',
		nextArrow: '<button class="slick-next"><span class="icon is-large"><i class="fas fa-chevron-right fa-3x"></i></span></button>',
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	// Get all "navbar-burger" elements
	var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {

		// Add a click event on each of them
		$navbarBurgers.forEach(function (el) {
			el.addEventListener('click', function () {

				// Get the target from the "data-target" attribute
				var target = el.dataset.target;
				var $target = document.getElementById(target);

				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');
			});
		});
	}
});
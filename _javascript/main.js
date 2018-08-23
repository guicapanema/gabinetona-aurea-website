// document.addEventListener('DOMContentLoaded', () => {
//     $('.home-videos').slick({
//     });
// });

$('.navbar-item.search').click(function() {
	$(this).children('.search-box').toggleClass('is-hidden');
});

$('.search-box').click(function(event) {
	event.stopPropagation();
});

$('#hero-play').click(function(event) {
	console.debug('hero-play');
	$('.hero').addClass('is-hidden');
	$('#hero-video-container').html('<div style="padding:56.25% 0 0 0;position:relative;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/9reDZlUdwCE?rel=0&amp;showinfo=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>');
});

$('.modal-open').click(function(event)
{
	$($(this).attr('data-target')).addClass('is-active');

	if ($(this).attr('data-video-id')) {
		$('#video-container').html('<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube-nocookie.com/embed/' + $(this).attr('data-video-id') + '?rel=0&amp;showinfo=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
	}
	else if ($(this).attr('data-peca-url')) {
		console.debug('hello');
		$('a#facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://aureacarolina.com.br' + $(this).attr('data-peca-url')));

		$('a#twitter').attr('href', 'https://twitter.com/home?status=' + encodeURIComponent('https://aureacarolina.com.br' + $(this).attr('data-peca-url')));

		$('a#whatsapp').attr('href', 'https://api.whatsapp.com/send?text=' + encodeURIComponent('https://aureacarolina.com.br' + $(this).attr('data-peca-url')));

		$('a#download').attr('href', 'https://aureacarolina.com.br' + $(this).attr('data-peca-url'));

		$($(this).attr('data-target') + ' img').attr('src', 'https://aureacarolina.com.br' + $(this).attr('data-peca-url'));
	}
});

$('#social-share').click(function() {
	$('.social-icons').toggleClass('is-hidden');
})

$('.modal-icon.close, .modal-background').click(function(event) {
	$('.modal').removeClass('is-active');
	$('#video-container').html('');
});

$(document).ready(function(){
	$('.home-videos').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-prev"><span class="icon is-large"><i class="fas fa-chevron-left fa-3x"></i></span></button>',
		nextArrow: '<button class="slick-next"><span class="icon is-large"><i class="fas fa-chevron-right fa-3x"></i></span></button>',
    });

	$('.slider-entregas').slick({
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: '<button class="slick-prev"><span class="icon is-large"><i class="fas fa-chevron-left fa-3x"></i></span></button>',
		nextArrow: '<button class="slick-next"><span class="icon is-large"><i class="fas fa-chevron-right fa-3x"></i></span></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		],
    });

	$('.slider-gabinetona').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		prevArrow: '<button class="slick-prev"><span class="icon is-large"><i class="fas fa-chevron-left fa-3x"></i></span></button>',
		nextArrow: '<button class="slick-next"><span class="icon is-large"><i class="fas fa-chevron-right fa-3x"></i></span></button>',
    });

	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {

		// Add a click event on each of them
		$navbarBurgers.forEach( el => {
			el.addEventListener('click', () => {

				// Get the target from the "data-target" attribute
				const target = el.dataset.target;
				const $target = document.getElementById(target);

				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');

			});
		});
	}
});

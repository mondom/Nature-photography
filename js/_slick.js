$('.gallery-box').slick({
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 2,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1,
			},
		},
	],
})

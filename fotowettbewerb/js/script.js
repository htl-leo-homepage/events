
let splide = new Splide('#kategorien-slider', {
	type: 'loop',
	perPage: 1,
	focus: 'center',
	gap: '2rem',
	padding: { left: '20%', right: '20%' },
	autoplay: true,
	interval: 20000,
	arrows: true,
	pagination: false,
	pauseOnHover: false,
	speed: 500,
	drag: true,
	swipe: true,
	breakpoints: {
		768: {
			perPage: 1,
			padding: { left: '0', right: '0' },
		}
	},
});

splide.mount();
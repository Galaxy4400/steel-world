/**
 * sliders.js
 *
 * Copyright (c) 2023 Moiseev Evgeny
 * Organization: WebisGroup
 *
 * Скрипты инициализации и обработки слайдеров.
 */

/**
 * Инициализация слайдеров по атрибуту data-swiper.
 *
 * Используется библиотека swiper.js: assets/js/libs/swiper.min.js
 * Документация: https://swiperjs.com/swiper-api
 * Примеры: https://swiperjs.com/demos
 *
 * Требуется подключение стилей: assets/scss/_swiper.scss
 *
 * Данный скрипт необходим для того, чтобы не привязываться к стандартным классам свипер-слайдера. На сайте слайдера в документации предоставляется HTML разметка c определёнными классами, без которых он не буедет функционировать. Скрипт же просто расставляет эти обязательные классы и поэтому нет необходимости о них думать. Структура HTML разметки слайдера должна быть такой же, как и указано в документации, но классы могут быть какими угодно. Необходимые поставятся автоматически.
 */
document.querySelectorAll("[data-swiper]").forEach((slider) => {
	slider.classList.add("swiper");

	if (slider.classList.contains("swiper-bild")) return;

	const sliderWrapper = slider.firstElementChild;
	const sliderItems = Array.from(sliderWrapper.children);

	sliderWrapper.classList.add("swiper-wrapper");

	sliderItems.forEach((slide) => slide.classList.add("swiper-slide"));

	slider.classList.add("swiper-bild");
});

/**
 * Инициализация слайдера
 */
const mainSlider = new Swiper(".main-slider", {
	effect: "fade",
	speed: 1000,
	slidesPerView: 1,
	navigation: {
		prevEl: ".main-slider__arrow_prev",
		nextEl: ".main-slider__arrow_next",
		disabledClass: "_disabled",
	},
	pagination: {
		el: ".main-slider__pagination",
		bulletClass: "main-slider__bullet",
		bulletActiveClass: "_active",
		clickable: true,
	},
});

/**
 * Инициализация слайдера
 */
const detailsSlider = new Swiper(".details-slider_1", {
	speed: 1000,
	slidesPerView: 1,
	spaceBetween: 30,
	navigation: {
		prevEl: ".details-slider__arrow_prev_1",
		nextEl: ".details-slider__arrow_next_1",
		disabledClass: "_disabled",
	},
});

/**
 * Инициализация слайдера
 */
const projectsSlider = new Swiper(".projects-slider", {
	speed: 1000,
	slidesPerView: 1,
	spaceBetween: 30,
	autoHeight: true,
	navigation: {
		prevEl: ".projects-slider__arrow_prev",
		nextEl: ".projects-slider__arrow_next",
		disabledClass: "_disabled",
	},
	on: {
		init: function () {
			updateSlideTitle(this);
		},
		slideChange: function () {
			updateSlideTitle(this);
		},
	},
});

function updateSlideTitle(swiper) {
	const activeSlide = swiper.slides[swiper.activeIndex];
	const titleContainer = document.querySelector("[data-slider-title]");
	const title = activeSlide.getAttribute("data-title");
	titleContainer.textContent = title;
}

/**
 * Инициализация слайдера
 */
const partnersSlider = new Swiper(".partners-slider", {
	speed: 1000,
	navigation: {
		prevEl: ".partners__arrow_prev",
		nextEl: ".partners__arrow_next",
		disabledClass: "_disabled",
	},
	breakpoints: {
		320: {
			spaceBetween: 16,
			slidesPerView: 1,
		},
		480: {
			spaceBetween: 16,
			slidesPerView: 2,
		},
		768: {
			spaceBetween: 24,
			slidesPerView: 3,
		},
		992: {
			spaceBetween: 32,
			slidesPerView: 4,
		},
		1201: {
			spaceBetween: 32,
			slidesPerView: 5,
		},
	},
});

// /**
//  * Пример инициализации слайдера
//  */
// new Swiper('.main-slider__body', {
// 	effect: 'fade',
// 	slidesPerView: 1,
// 	speed: 500,
// 	autoplay: {
// 		delay: 8000,
// 		pauseOnMouseEnter: true,
// 		disableOnInteraction: false,
// 	},
// 	pagination: {
// 		el: '.main-slider__pagination',
// 		bulletClass: 'main-slider-bullet',
// 		bulletActiveClass: '_active',
// 		clickable: true,
// 		renderBullet: (index) => getMainSliderBullet(index),
// 	},
// });

// // Функция построения кастомных буллетов
// function getMainSliderBullet(index) {
// 	const slide = document.querySelectorAll('.main-slider-slide')[index];
// 	const title = slide.querySelector('.main-slider-slide__title').innerHTML;
// 	const text = slide.querySelector('.main-slider-slide__pagging-text').innerHTML;
// 	const bullet = `
// 		<div class="main-slider__bullet main-slider-bullet">
// 			<h4 class="main-slider-bullet__title">${title}</h4>
// 			<div class="main-slider-bullet__text">${text}</div>
// 		</div>
// 	`;
// 	return bullet;
// }

// /**
//  * Пример инициализации слайдера
//  */
// new Swiper('.news-slider__body', {
// 	slidesPerView: 4,
// 	spaceBetween: 30,
// 	speed: 800,
// 	autoheight: true,
// 	navigation: {
// 		disabledClass: "_disabled",
//     prevEl: '.news-slider-arrows__arrow_prev',
//     nextEl: '.news-slider-arrows__arrow_next',
//   },
// 	breakpoints: {
// 		320: { slidesPerView: 1 },
// 		480: { slidesPerView: 1 },
// 		768: { slidesPerView: 2 },
// 		992: { slidesPerView: 3 },
//     1201: { slidesPerView: 3 },
//     1583: { slidesPerView: 4 }
// 	}
// });

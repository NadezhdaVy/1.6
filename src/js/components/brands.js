import Swiper, { Navigation, Pagination } from "swiper";



let brandsListSwiper;

function swiperCard() {
	

  if (window.innerWidth < 768) {
    if (!brandsListSwiper) {
		Swiper.use([Navigation, Pagination]);
		brandsListSwiper = new Swiper('.brands-swiper', {
			
			direction: 'horizontal',
			
			pagination: {
			  el: '.brands-pagination',
			  clickable:true,
			},

		 slidesPerView:1.2,
		 spaceBetween: 20,
		
		 breakpoints: {
			

		

			330: {
			  slidesPerView: 1.3,
			  spaceBetween: 20
			},

		
			
			480: {
			  slidesPerView: 1.9,
			  spaceBetween: 20,
			},

		
			
			630: {
			  slidesPerView: 2.4,
			  spaceBetween: 30
			}
		},
		
		slideToClickedSlide:true,
		
		 });
    }
  } else if (brandsListSwiper && window.innerWidth > 768) {
    brandsListSwiper.destroy();
    brandsListSwiper = null
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);











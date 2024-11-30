document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
});
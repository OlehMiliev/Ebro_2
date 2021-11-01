new Swiper('.ac_swiper_container',{
    slidesPerView: 2,
    navigation:{
        nextEl:'.ac_btn_pre',
        prevEl:'.ac_btn_next'
    },
    pagination:{
        el:'.swiper-pagination',
        type:'fraction'
    }
});

/*//////////service swiper////////*/
new Swiper('.control_slider-wrapper',{
    slidesPerView: 1,
    pagination:{
        el:'.swiper-pagination'
    }
});




/*////////////fire_system/////////////*/
let sw = new Swiper('.fire_system_slider-wrapper',{
    slidesPerView: 1,
    pagination:{
        el:'.control_pagination-wrapper'
    }
});


//const swiper = new Swiper('.slider-clients-logo', {
//    slidesPerView: 9,
//    // spaceBetween: 30,
//    loop: true,
//    autoplay: {
//        delay: 2000,
//    },
//
//});


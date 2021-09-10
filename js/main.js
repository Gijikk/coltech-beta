$('#site').ready(function () {
    // animate content
    $('#site').addClass('animate_content');


    setTimeout(function () {
        $('#site').removeClass('animate_content');
    }, 1000);

    //remove fadeIn class after 1500ms


});
window.onload = function () {
    var body = document.querySelector('body');
    var links = document.querySelectorAll('.header__exit');

    links.forEach(function (link) {
        link.addEventListener('click', onLinkClicked);

        function onLinkClicked(event) {
            event.preventDefault();
            body.classList.add('show')
            setTimeout(onAnimationComplete, 500);
        }

        function onAnimationComplete() {
            window.location = link.href;
        }
    });
}
$('.header__exit').click(function () {
    // animate content
    $('#site').addClass('animate_content-reverse');


    setTimeout(function () {
        $('#site').removeClass('animate_content-reverse');
    }, 1000);

    //remove fadeIn class after 1500ms


});

$(document).ready(function () {






    history.scrollRestoration = "manual";
    $(window).on('beforeunload', function () {
        window.scrollTo(0, 0);
    });
    AOS.init(

    );

    $(".video__title:nth-child(2)").hover(
        function () {
            $(".video__title").css("cursor", "pointer");
            $(".video__img").css("left", "0");
            $(".video__img").css("transition", "0.3s");
        }
    );
    $(".video__title:nth-child(3)").hover(
        function () {
            $(".video__title").css("cursor", "pointer");
            $(".video__img").css("left", "500px");
            $(".video__img").css("transition", "0.3s");
        }
    );
    $(".video__title:nth-child(4)").hover(
        function () {
            $(".video__title").css("cursor", "pointer");
            $(".video__img").css("left", "900px");
            $(".video__img").css("transition", "0.3s");
        }
    );
    $(".video__title:nth-child(5)").hover(
        function () {
            $(".video__title").css("cursor", "pointer");
            $(".video__img").css("left", "1350px");
            $(".video__img").css("transition", "0.3s");
        }
    );
    if (window.matchMedia("(max-width: 1580px)").matches) {
        $(".video__title:nth-child(2)").hover(
            function () {
                $(".video__img").css("left", "0");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__title:nth-child(3)").hover(
            function () {
                $(".video__img").css("left", "400px");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__title:nth-child(4)").hover(
            function () {
                $(".video__img").css("left", "750px");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__title:nth-child(5)").hover(
            function () {
                $(".video__img").css("left", "1100px");
                $(".video__img").css("transition", "0.3s");
            }
        );
    }
    if (window.matchMedia("(max-width: 1300px)").matches) {
        $(".video__title:nth-child(2)").hover(
            function () {
                $(".video__img").css("left", "0");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__img svg").css("width", "100px")
        $(".video__title:nth-child(3)").hover(
            function () {
                $(".video__img").css("left", "350px");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__title:nth-child(4)").hover(
            function () {
                $(".video__img").css("left", "650px");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__title:nth-child(5)").hover(
            function () {
                $(".video__img").css("left", "950px");
                $(".video__img").css("transition", "0.3s");
            }
        );
    }
    if (window.matchMedia("(max-width: 1050px)").matches) {
        $(".video__title:nth-child(2)").hover(
            function () {
                $(".video__img").css("left", "0");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__title:nth-child(3)").hover(
            function () {
                $(".video__img").css("left", "300px");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__title:nth-child(4)").hover(
            function () {
                $(".video__img").css("left", "500px");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__title:nth-child(5)").hover(
            function () {
                $(".video__img").css("left", "750px");
                $(".video__img").css("transition", "0.3s");
            }
        );
    }

    if (window.matchMedia("(max-width: 992px)").matches) {
        $(".video__title:nth-child(2)").hover(
            function () {
                $(".video__img").css("top", "-70px");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__title:nth-child(3)").hover(
            function () {
                $(".video__img").css("top", "5px");
                $(".video__img").css("left", "6px");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__title:nth-child(4)").hover(
            function () {
                $(".video__img").css("top", "60px");
                $(".video__img").css("left", "6px");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__title:nth-child(5)").hover(
            function () {
                $(".video__img").css("top", "120px");
                $(".video__img").css("left", "6px");
                $(".video__img").css("transition", "0.3s");
            }
        );
    }
    if (window.matchMedia("(max-width: 576px)").matches) {
        $(".video__title:nth-child(2)").hover(
            function () {
                $(".video__img").css("top", "-65px");
                $(".video__img").css("left", "-25px");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__title:nth-child(3)").hover(
            function () {
                $(".video__img").css("top", "-25px");
                $(".video__img").css("left", "-25px");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__title:nth-child(4)").hover(
            function () {
                $(".video__img").css("top", "15px");
                $(".video__img").css("left", "-25px");
                $(".video__img").css("transition", "0.3s");
            }
        );
        $(".video__title:nth-child(5)").hover(
            function () {
                $(".video__img").css("top", "50px");
                $(".video__img").css("left", "-25px");
                $(".video__img").css("transition", "0.3s");
            }
        );
    }
    // $('.profession__city').click(
    //     function(){
    //         if ($(this).find("input").attr("checked", false)) {
    //             $(this).find("input").toggleClass('profession__city__input__checked');
    //             $(this).find("input").attr("checked", true)
    //         } else {
    //
    //             $(this).find("input:checked").attr('checked', false);
    //
    //         }
    //         //выделение всех чекбоксов на кликнутом контейнере, снять выделение через removeAttr("checked")
    //     });
    // $('.profession__category').click(
    //     function(){
    //         if ($(this).find("input").attr("checked", false)) {
    //             $(this).find("input").toggleClass('profession__category__input__checked');
    //             $(this).find("input").attr("checked", true)
    //         } else {
    //
    //             $(this).find("input:checked").attr('checked', false);
    //
    //         }
    //         //выделение всех чекбоксов на кликнутом контейнере, снять выделение через removeAttr("checked")
    //     });
    /*$('.subheader__checkbox').click(
        function(){
            if ($(this).find("input").attr("checked", false)) {
                $(this).find("input").toggleClass('subheader__checkbox__input__checked');
                $(this).find("input").attr("checked", true)
            } else {

                $(this).find("input:checked").attr('checked', false);

            }

            //выделение всех чекбоксов на кликнутом контейнере, снять выделение через removeAttr("checked")
        });
*/
    $(document).keypress(function (e) {
        if (e.which == 13) {
            console.log("da")
            $("#my-button").click();
            alert("Pressed");
        }
    });





    var list = document.querySelector(".header__list"),
        element = document.querySelectorAll(".header__list li"),
        hamburger = document.querySelector(".hamburger"),
        html = document.querySelector("html"),
        dropdown = document.querySelectorAll(".work__dropdown"),
        item = document.querySelectorAll(".work__item");

    item.forEach((function (item) {
        const itemPlus = item.querySelector(".work__button");
        item.addEventListener("click", (function () {
            var listt = this.getAttribute('data-list');
            dropdown.forEach((function (dropdown) {
                if (listt === dropdown.getAttribute('data-list')) {
                    dropdown.classList.toggle("work__dropdown_active")
                }

            }));
            itemPlus.classList.toggle("work__button_active")
        }));
    }));
   if(hamburger){
       hamburger.addEventListener("click", (function () {
           hamburger.classList.toggle("hamburger_active"), list.classList.toggle("header__list_active")
       }))
   }
        element.forEach((function (element) {
            element.addEventListener("click", (function () {
                hamburger.classList.toggle("hamburger_active"), list.classList.toggle("header__list_active")
                html.style.overflowY = "hidden";
            }))
        }));


    // var elem = $(".header__title");
    // elem.on("mousemove", onMousemove, false);
    //
    // function onMousemove(event) {
    //     x = event.offsetX;
    //     y = event.offsetY;
    //
    //     console.log("X Position: " +x);
    //     console.log("Y Position: " +y);
    // };


    // $(document).scroll(function() {
    //     $(".first__title").css('animation-duration', '1s');
    //
    // });
    //
    // var timeout = false;
    // $(window).scroll(function() {
    //     $('.first__title').css('animation-duration', '5s');
    //     if (timeout !== false) {
    //         clearTimeout(timeout);
    //     }
    //     timeout = setTimeout(function() {
    //         $('.first__title').css('animation-duration', '10s');
    //     });
    //
    // });

    var $circle = $(".header__circle");
    $(".header__title").on("mousemove", function (evt) {
        $circle.css({left: evt.offsetX, top: evt.offsetY});
    });




});

$(document).ready(function () {
    $('.subheader__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,

    });

    $('.firms__wrapper').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        slidesToShow: 5,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        responsive: [
            {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },


        ]
    });
    // $( function() {
    //     $( ".image__glitch" ).mgGlitch({
    //         destroy : false, // set 'true' to stop the plugin
    //         glitch: true, // set 'false' to stop glitching
    //         scale: true, // set 'false' to stop scaling
    //         blend : true, // set 'false' to stop glitch blending
    //         blendModeType : 'hue', // select blend mode type
    //         glitch1TimeMin : 600, // set min time for glitch 1 elem
    //         glitch1TimeMax : 900, // set max time for glitch 1 elem
    //         glitch2TimeMin : 10, // set min time for glitch 2 elem
    //         glitch2TimeMax : 115, // set max time for glitch 2 elem
    //         zIndexStart : 8, // because of absolute position, set z-index base value
    //     });
    //     $( ".subheader__img" ).mgGlitch({
    //         destroy : false, // set 'true' to stop the plugin
    //         glitch: true, // set 'false' to stop glitching
    //         scale: true, // set 'false' to stop scaling
    //         blend : true, // set 'false' to stop glitch blending
    //         blendModeType : 'hue', // select blend mode type
    //         glitch1TimeMin : 600, // set min time for glitch 1 elem
    //         glitch1TimeMax : 900, // set max time for glitch 1 elem
    //         glitch2TimeMin : 10, // set min time for glitch 2 elem
    //         glitch2TimeMax : 115, // set max time for glitch 2 elem
    //         zIndexStart : 8, // because of absolute position, set z-index base value
    //     });
    // });

});


// gsap.registerPlugin(ScrollTrigger);
// var windowWidth = $('body').innerWidth();
// const images = gsap.utils.toArray('img');
// const showDemo = () => {
//     document.scrollingElement.scrollTo(0, 0);
//     gsap.utils.toArray('section').forEach((section, index) => {
//         const w = section.querySelectorAll('.wrapper');
//         const [x, xEnd] = ['100%', (w.scrollWidth - section.offsetWidth)];
//         if (windowWidth > 576) {
//             gsap.fromTo(w, {x}, {
//                 x: xEnd,
//                 scrollTrigger: {
//                     trigger: section,
//                     scrub: 1,
//                     pin: true,
//                 }
//             });
//         }
//
//
//     });
// }
//
// imagesLoaded(images).on('always', showDemo);

var windowWidth = $('body').innerWidth();
if (windowWidth < 576) {
    $("section").removeClass('demo-text');
    $("div").removeClass('demo-wrapper');
    $("div").removeClass('wrapper');
    $("div").removeClass('text');
}


//
//
//     // глобальный объект с элементами, для которых отслеживаем их положение в зоне видимости
//     var listenedElements = [];
//
//     function isOnVisibleSpace(element) {
//         var bodyHeight = window.innerHeight;
//         var elemRect = element.getBoundingClientRect();
//         var offset = elemRect.top;// - bodyRect.top;
//         if (offset < 0) return false;
//         if (offset > bodyHeight) return false;
//         return true;
//     }
//
//     // обработчик события прокрутки экрана. Проверяет все элементы добавленные в listenedElements
//     // на предмет попадания(выпадения) в зону видимости
//     window.onscroll = function () {
//         listenedElements.forEach(item => {
//             // проверяем находится ли элемент в зоне видимости
//             var result = isOnVisibleSpace(item.el);
//
//             // если элемент находился в зоне видимости и вышел из нее
//             // вызываем обработчик выпадения из зоны видимости
//             if (item.el.isOnVisibleSpace && !result) {
//                 item.el.isOnVisibleSpace = false;
//                 item.outVisibleSpace(item.el);
//                 return;
//             }
//             // если элемент находился вне зоны видимости и вошел в нее
//             // вызываем обработчик попадания в зону видимости
//             if (!item.el.isOnVisibleSpace && result) {
//                 item.el.isOnVisibleSpace = true;
//                 item.inVisibleSpace(item.el);
//                 return;
//             }
//         });
//     }
//
//     // функция устанавливает обработчики событий
//     // появления элемента в зоне видимости и
//     // выхода из нее
//     function onVisibleSpaceListener(elementId, cbIn, cbOut) {
//         // получаем ссылку на объект элемента
//         var el = document.getElementById(elementId);
//         // добавляем элемент и обработчики событий
//         // в массив отслеживаемых элементов
//         listenedElements.push({
//             el: el,
//             inVisibleSpace: cbIn,
//             outVisibleSpace: cbOut
//         });
//     }
//
//     function da(text) {
//         let i = 100;
//         window.onscroll = function () {
//
//             i = i - 1.5;
//             console.log("i = " + i)
//             if (i > 0) {
//                 text.style.cssText = "transform: translateX(" + i + "%)";
//
//             }
//
//         }
//     }
//
//     // устанавливаем обработчики для элемента "video"
//     onVisibleSpaceListener("text",
//         el => {
//             da(document.querySelector("#text"));
//         },
//         el => {
//             alert("da");
//         }
//     );
//     // onVisibleSpaceListener("text2",
//     //     el => {
//     //         da(document.querySelector("#text2"));
//     //         alert("da");
//     //     },
//     //     el => {
//     //         // функция вызываемая при выпадении элемента из зоны видимости
//     //         // тут вставляем код остановки анимации
//     //     }
//     // );
// });


if (windowWidth < 576) {
    document.querySelector(".header__list li").removeAttribute("data-aos");
    document.querySelector(".header__list li").removeAttribute("data-aos-duration");
    document.querySelector(".header__list li").removeAttribute("data-aos-delay");
}



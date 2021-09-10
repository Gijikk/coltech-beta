$('#site').ready(function() {
    // animate content
    $('#site').addClass('animate_content');


    setTimeout(function() {
        $('#site').removeClass('animate_content');
    }, 1000);

    //remove fadeIn class after 1500ms


});
window.onload = function() {
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
$('.header__exit').click(function() {
    // animate content
    $('#site').addClass('animate_content-reverse');


    setTimeout(function() {
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
    var count = find(By.xpath("//ul[@id = 'list']/li")).size();
    console.log(count);
    $( ".video__title:nth-child(2)" ).hover(

        function() {
            $(".video__title").css("cursor","pointer");
            $(".video__img").css( "left", "0" );
            $(".video__img").css( "transition", "0.3s" );
        }
    );
    $( ".video__title:nth-child(3)" ).hover(

        function() {
            $(".video__title").css("cursor","pointer");
            $(".video__img").css( "left", "500px" );
            $(".video__img").css( "transition", "0.3s" );
        }
    );
    $( ".video__title:nth-child(4)" ).hover(

        function() {
            $(".video__title").css("cursor","pointer");
            $(".video__img").css( "left", "900px" );
            $(".video__img").css( "transition", "0.3s" );
        }
    );
    $( ".video__title:nth-child(5)" ).hover(

        function() {
            $(".video__title").css("cursor","pointer");
            $(".video__img").css( "left", "1350px" );
            $(".video__img").css( "transition", "0.3s" );
        }
    );
    if (window.matchMedia("(max-width: 1580px)").matches) {
        $( ".video__title:nth-child(2)" ).hover(
            function() {
                $(".video__img").css( "left", "0" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
        $( ".video__title:nth-child(3)" ).hover(
            function() {
                $(".video__img").css( "left", "400px" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
        $( ".video__title:nth-child(4)" ).hover(
            function() {
                $(".video__img").css( "left", "750px" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
        $( ".video__title:nth-child(5)" ).hover(
            function() {
                $(".video__img").css( "left", "1100px" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
    }
    if(window.matchMedia("(max-width: 1300px)").matches) {
        $( ".video__title:nth-child(2)" ).hover(
            function() {
                $(".video__img").css( "left", "0" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
        $(".video__img svg").css("width","100px")
        $( ".video__title:nth-child(3)" ).hover(
            function() {
                $(".video__img").css( "left", "350px" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
        $( ".video__title:nth-child(4)" ).hover(
            function() {
                $(".video__img").css( "left", "650px" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
        $( ".video__title:nth-child(5)" ).hover(
            function() {
                $(".video__img").css( "left", "950px" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
    }
    if(window.matchMedia("(max-width: 1050px)").matches) {
        $( ".video__title:nth-child(2)" ).hover(
            function() {
                $(".video__img").css( "left", "0" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
        $( ".video__title:nth-child(3)" ).hover(
            function() {
                $(".video__img").css( "left", "300px" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
        $( ".video__title:nth-child(4)" ).hover(
            function() {
                $(".video__img").css( "left", "500px" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
        $( ".video__title:nth-child(5)" ).hover(
            function() {
                $(".video__img").css( "left", "750px" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
    }

    if(window.matchMedia("(max-width: 992px)").matches) {
        $( ".video__title:nth-child(2)" ).hover(
            function() {
                $(".video__img").css( "top", "-70px" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
        $( ".video__title:nth-child(3)" ).hover(
            function() {
                $(".video__img").css( "top", "5px" );
                $(".video__img").css( "left", "6px" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
        $( ".video__title:nth-child(4)" ).hover(
            function() {
                $(".video__img").css( "top", "60px" );
                $(".video__img").css( "left", "6px" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
        $( ".video__title:nth-child(5)" ).hover(
            function() {
                $(".video__img").css( "top", "120px" );
                $(".video__img").css( "left", "6px" );
                $(".video__img").css( "transition", "0.3s" );
            }
        );
    }
    $('.profession__city').click(
        function(){
            if ($(this).find("input").attr("checked", false)) {
                $(this).find("input").toggleClass('profession__city__input__checked');
                $(this).find("input").attr("checked", true).checkbox("refresh");
            } else {

                $(this).find("input:checked").attr('checked', false);

            }
            //выделение всех чекбоксов на кликнутом контейнере, снять выделение через removeAttr("checked")
        });
    $('.profession__category').click(
        function(){
            if ($(this).find("input").attr("checked", false)) {
                $(this).find("input").toggleClass('profession__category__input__checked');
                $(this).find("input").attr("checked", true).checkbox("refresh");
            } else {

                $(this).find("input:checked").attr('checked', false);

            }
            //выделение всех чекбоксов на кликнутом контейнере, снять выделение через removeAttr("checked")
        });

    $(function() {
        $(".image__glitch").mgGlitch({
            destroy: false,
            glitch: true,
            scale: true,
            blend: true,
            blendModeType: 'hue',
            glitch1TimeMin: 200,
            glitch1TimeMax: 400,
            glitch2TimeMin: 10,
            glitch2TimeMax: 100
        });
    });
    // $('.subheader__checkbox').click(
    //     function(){
    //         if ($(this).find("input").attr("checked", false)) {
    //             $(this).find("input").toggleClass('subheader__checkbox__input__checked');
    //             $(this).find("input").attr("checked", true);
    //         } else {
    //
    //             $(this).find("input:checked").attr('checked', false);
    //
    //         }
    //         if ($(this).find("input").is(':checked')) {
    //             alert('checked')
    //         } else {
    //             alert('not checked')
    //         }
    //         $(this).find("input").change(function(event) {
    //             var checkbox = event.target;
    //             if (checkbox.is(':checked')) {
    //                console.log('checked')
    //             } else {
    //                 console.log('not checked')
    //             }
    //         });
    //         //выделение всех чекбоксов на кликнутом контейнере, снять выделение через removeAttr("checked")
    //     });
    $('.subheader__label').change(function(event) {


        if (event.target.checked) {
            console.log('checked')
        } else {
            console.log('not checked')
        }
    });
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
        plus = document.querySelectorAll(".work__button");

    plus.forEach((function (plus) {
    plus.addEventListener("click", (function () {
       var listt =  this.getAttribute('data-list');
        plus.classList.toggle("work__button_active")
        dropdown.forEach((function (dropdown) {
            if (listt===dropdown.getAttribute('data-list')) {
                dropdown.classList.toggle("work__dropdown_active")
            }

        }));
    }));
    }));
    hamburger.addEventListener("click", (function () {
        hamburger.classList.toggle("hamburger_active"), list.classList.toggle("header__list_active")
    })),
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

$(document).ready(function(){
    $('.subheader__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
    });
});


gsap.registerPlugin(ScrollTrigger);
var windowWidth = $('body').innerWidth();
const images = gsap.utils.toArray('img');
const showDemo = () => {
    document.scrollingElement.scrollTo(0, 0);
    gsap.utils.toArray('section').forEach((section, index) => {
        const w = section.querySelectorAll('.wrapper');
        const [x, xEnd] = ['100%', (w.scrollWidth - section.offsetWidth)];
        if(windowWidth > 576){
            gsap.fromTo(w, {  x  }, {
                x: xEnd,
                scrollTrigger: {
                    trigger: section,
                    scrub: 1,
                    pin: true,
                }
            });
        }


    });
}

imagesLoaded(images).on('always', showDemo);

    var windowWidth = $('body').innerWidth();
    if(windowWidth < 576){
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


if(windowWidth < 576) {
    document.querySelector(".header__list li").removeAttribute("data-aos");
    document.querySelector(".header__list li").removeAttribute("data-aos-duration");
    document.querySelector(".header__list li").removeAttribute("data-aos-delay");

    document.getElementById("btn").innerHTML = '<svg id="triangle-mob" data-name="Компонент 6 – 5" xmlns="http://www.w3.org/2000/svg" width="415.766" height="418.549" viewBox="50 100 415.766 418.549">\n' +
        '        <path id="Контур_38" data-name="Контур 38" d="M293.858,101.413,0,0,59.078,309.192l234.78-203.779Z" transform="translate(99.686 226.535) rotate(-15)" fill="#046afa" fill-rule="evenodd"/>\n' +
        '        <text id="more" transform="translate(187.686 370.535)" fill="#0a0a0a" font-size="101" font-family="Kanit-Black, Kanit" font-weight="900"><tspan x="0" y="0">MORE</tspan></text>\n' +
        '    </svg>'
    document.getElementById("btn2").innerHTML = '<svg id="triangle-mob" data-name="Компонент 6 – 5" xmlns="http://www.w3.org/2000/svg" width="415.766" height="418.549" viewBox="50 100 415.766 418.549">\n' +
        '        <path id="Контур_38" data-name="Контур 38" d="M293.858,101.413,0,0,59.078,309.192l234.78-203.779Z" transform="translate(99.686 226.535) rotate(-15)" fill="#046afa" fill-rule="evenodd"/>\n' +
        '        <text id="more" transform="translate(187.686 370.535)" fill="#0a0a0a" font-size="101" font-family="Kanit-Black, Kanit" font-weight="900"><tspan x="0" y="0">MORE</tspan></text>\n' +
        '    </svg>'
    document.getElementById("btn3").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="199.004" height="95.676" viewBox="0 0 199.004 95.676">\n' +
        '  <g id="btn" transform="translate(-21 -2097.344)">\n' +
        '    <path id="Контур_38" data-name="Контур 38" d="M92.123,31.792,0,0,18.521,95.676l73.6-63.883Z" transform="translate(20 2097.344)" fill="#046afa" fill-rule="evenodd"></path>\n' +
        '    <text id="CONSULTANCY" transform="translate(47.004 2154.182)" fill="#0a0a0a" font-size="25" font-family="Kanit-Black, Kanit" font-weight="800"><tspan x="0" y="0">CONSULTANCY</tspan></text>\n' +
        '  </g>\n' +
        '</svg>'
    document.getElementById("btn4").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="199.004" height="95.676" viewBox="0 0 199.004 95.676">\n' +
        '  <g id="btn" transform="translate(-21 -2097.344)">\n' +
        '    <path id="Контур_38" data-name="Контур 38" d="M92.123,31.792,0,0,18.521,95.676l73.6-63.883Z" transform="translate(20 2097.344)" fill="#046afa" fill-rule="evenodd"></path>\n' +
        '    <text id="CONSULTANCY" transform="translate(47.004 2154.182)" fill="#0a0a0a" font-size="25" font-family="Kanit-Black, Kanit" font-weight="800"><tspan x="0" y="0">FINTECH</tspan></text>\n' +
        '  </g>\n' +
        '</svg>'
    document.getElementById("btn5").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="199.004" height="95.676" viewBox="0 0 199.004 95.676">\n' +
        '  <g id="btn" transform="translate(-21 -2097.344)">\n' +
        '    <path id="Контур_38" data-name="Контур 38" d="M92.123,31.792,0,0,18.521,95.676l73.6-63.883Z" transform="translate(20 2097.344)" fill="#046afa" fill-rule="evenodd"></path>\n' +
        '    <text id="CONSULTANCY" transform="translate(47.004 2154.182)" fill="#0a0a0a" font-size="25" font-family="Kanit-Black, Kanit" font-weight="800"><tspan x="0" y="-10">DIGITAL</tspan><tspan x="0" y="15">HEALTH</tspan></text>\n' +
        '  </g>\n' +
        '</svg>'
    document.getElementById("btn6").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="199.004" height="95.676" viewBox="0 0 199.004 95.676">\n' +
        '  <g id="btn" transform="translate(-21 -2097.344)">\n' +
        '    <path id="Контур_38" data-name="Контур 38" d="M92.123,31.792,0,0,18.521,95.676l73.6-63.883Z" transform="translate(20 2097.344)" fill="#046afa" fill-rule="evenodd"></path>\n' +
        '    <text id="CONSULTANCY" transform="translate(47.004 2154.182)" fill="#0a0a0a" font-size="25" font-family="Kanit-Black, Kanit" font-weight="800"><tspan x="0" y="0">INSURTECH</tspan></text>\n' +
        '  </g>\n' +
        '</svg>'
    document.getElementById("title").innerHTML = 'GET IN TOUCH'
} else {
    document.querySelector(".header__list li").setAttribute("data-aos","fade-left");
    document.querySelector(".header__list li").setAttribute("data-aos-duration", 1000);
    document.querySelector(".header__list li").setAttribute("data-aos-delay", 200);
    document.getElementById("btn").innerHTML =
        '                <svg id="triangle" data-name="Компонент 6 – 5" xmlns="http://www.w3.org/2000/svg" width="415.766"\n' +
        '                     height="418.549" viewBox="0 0 415.766 418.549">\n' +
        '                    <path id="triangle" data-name="Контур 38" d="M293.858,101.413,0,0,59.078,305.192l234.78-203.779Z"\n' +
        '                          transform="matrix(0.819, -0.574, 0.574, 0.819, 0, 168.55)" fill="#0a0a0a" fill-rule="evenodd"/>\n' +
        '                    <text id="more" transform="translate(99.686 226.535)" fill="#fff" font-size="51"\n' +
        '                          font-family="Kanit-Black, Kanit" font-weight="800">\n' +
        '                        <tspan x="0" y="0">MORE</tspan>\n' +
        '                    </text>\n' +
        '                </svg>\n'
    document.getElementById("btn2").innerHTML =
        '                <svg id="triangle" data-name="Компонент 6 – 5" xmlns="http://www.w3.org/2000/svg" width="415.766"\n' +
        '                     height="418.549" viewBox="0 0 415.766 418.549">\n' +
        '                    <path id="triangle" data-name="Контур 38" d="M293.858,101.413,0,0,59.078,305.192l234.78-203.779Z"\n' +
        '                          transform="matrix(0.819, -0.574, 0.574, 0.819, 0, 168.55)" fill="#0a0a0a" fill-rule="evenodd"/>\n' +
        '                    <text id="more" transform="translate(99.686 226.535)" fill="#fff" font-size="51"\n' +
        '                          font-family="Kanit-Black, Kanit" font-weight="800">\n' +
        '                        <tspan x="0" y="0">MORE</tspan>\n' +
        '                    </text>\n' +
        '                </svg>\n'
    document.getElementById("title").innerHTML = 'GET IN TOUCH WITH US'
    document.getElementById("btn3").innerHTML = 'consultancy &#160<img src="images/arrow.svg" alt="">'
    document.getElementById("btn4").innerHTML = 'FINTECH &#160<img src="images/arrow.svg" alt="">'
    document.getElementById("btn5").innerHTML = 'DIGITAL HEALTH &#160<img src="images/arrow.svg" alt="">'
    document.getElementById("btn6").innerHTML = 'INSURTECH &#160<img src="images/arrow.svg" alt="">'
}



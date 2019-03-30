/*-----------------------------
INICIALIZANDO EL SMOOTH scroll
------------------------------*/

// smoothScroll.init({  Metodo antiguo, visto en Master en bootstrap
//     speed: 1000, // Integer. How fast to complete the scroll in milliseconds
//     offset: 60, // Integer. How far to offset the scrolling anchor location in pixels
//
// });

var scroll = new SmoothScroll('a[href="#servicios"]', {
	speed: 800,
  offset: -5
});

var scroll = new SmoothScroll('a[href="#encabezado"]', {
                          // ('a[href*="#"]') para seleccionar todos los a href
	speed: 300
});

var scroll = new SmoothScroll('a[href="#eligenos"]', {
	speed: 1000,
  offset: -10
});

var scroll = new SmoothScroll('a[href="#paginas-web"]', {
	speed: 500,
  offset: -100
});
var scroll = new SmoothScroll('a[href="#tiendas"]', {
	speed: 400,
  offset: -100
});
var scroll = new SmoothScroll('a[href="#marketing"]', {
	speed: 300,
  offset: -100
});

// offset: 50 esto es para generar el scroll solo hasta el numero en px que corresponde a la ventana

/*-----------------------------
------------------------------*/

/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn(500); // cambie el fadeIn() por ese .hide()
        } else {
            $(".ir-arriba").fadeOut(); // cambie el fadeOut() por ese .show()
        }
    });

});

/*---------------------------------
    WOW.JS y ANIMATE.CSS.
 ----------------------------------*/

 new WOW().init();  // Iniciamos wow.js

// Sean's code for sound effect - will need to learn how to code this properly.

// (function() {

//   var muted = false;
//   var sounds = [];
//   for(var i = 1; i < 19; i++) {
//     var sound = new Audio('hits/' + i + '.ogg');
//     sounds.push(sound);
//   }

//   function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

// I want my sound to be onmouse over images on home page

//   window.onmouseover = function(e) {
//     if(muted) {
//       return;
//     }

//     sounds[getRandomInt(0, sounds.length - 1)].play();
//   }

//   document.getElementById('mute-btn').addEventListener('click', function(e) {
//     muted = !muted;
//     if(muted) {
//       e.target.style.backgroundColor = 'red';
//     } else {
//       e.target.style.backgroundColor = '';
//     }
//   });

// })()


// $(window).resize(function() {
//   var docWidth = ($(window).width());
//   var min_resolution = 900;
//   if (docWidth < min_resolution) {
//     $('.lightbox').each(function() {
//       $(this).css({"pointer-events":"none","cursor":"default"});
//     });
//   } else {
//     $('.cboxElement').each(function() {
//       $(this).css({"pointer-events":"","cursor":""});
//     });
//   }
// }

// trying to remove lightbox on mobile

// var responsiveLightbox = function () {
//    var viewportWidth = $(window).width();
//    if (viewportWidth > 960){
//        $('[rel=lightbox]').attr('rel', '');
//    }
// }

// $(document).ready(function() {
//     responsiveLightbox();
// });
// $(window).resize(function() {
//     responsiveLightbox();
// });
$(document).ready(function() {
  "use strict";


// ------------- Pre-loader--------------

// makes sure the whole site is loaded

$(window).load(function() {
    // will first fade out the loading animation
    $(".preloader").fadeOut();
    //then background color will fade out slowly
    $("#faceoff").delay(200).fadeOut("slow");
});

//-------Appearence of navigation----------

  $('header .nav').onePageNav({
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    scrollOffset: 90 //Height of Navigation Bar
  });


  //var winWidth = $(window).width();
  $(window).scroll(function() {
    //if (winWidth > 767) {
      var $scrollHeight = $(window).scrollTop();
      if ($scrollHeight > 590) {
        $('#home').slideDown(400);
      }else{
        $('#home').slideUp(400);
      }
    //}

  //got o top
    if ($(this).scrollTop() > 200) {
      $('#go-to-top a').fadeIn('slow');
      } else {
      $('#go-to-top a').fadeOut('slow');
    }
  });

  //-------scroll to top---------

  $('#go-to-top a').click(function(){
    $("html,body").animate({ scrollTop: 0 }, 750);
    return false;
  });

//--------------- SmoothSroll--------------------

var scrollAnimationTime = 1200,
    scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top
    }, scrollAnimationTime, scrollAnimation, function () {
        window.location.hash = target;
    });
});

// ------------- Owl Carousel--------------

 // $("#owl-demo").owlCarousel({
 //  navigation : true,
 //  slideSpeed : 300,
 //  pagination: false,
 //  autoPlay: 5000,
 //  items : 4,
 //  });

//--------------- for navigation---------------------

    $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });

//--------------- -Loading the map ------------------

 // $(document).on('click','.contact-map',function(event){
 //  event.preventDefault();
 //  initialize();
 // });

// ------------- Magnific--------------


   //  $('.test-popup-link').magnificPopup({
   //    type:'image',
   //    closeBtnInside:true,
   //    // Delay in milliseconds before popup is removed
   //    removalDelay: 300,

   //    // Class that is added to popup wrapper and background
   //    // make it unique to apply your CSS animations just to this exact popup
   //    mainClass: 'mfp-fade',
   //    gallery: {
   //        enabled: true, // set to true to enable gallery

   //        preload: [0,2], // read about this option in next Lazy-loading section

   //        navigateByImgClick: true,

   //        //arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

   //        closeMarkup: '<button title="%title%" class="mfp-close"><i class="mfp-close-icn">&times;</i></button>',

   //        tPrev: 'Previous (Left arrow key)', // title for left button
   //        tNext: 'Next (Right arrow key)', // title for right button
   //        //tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
   //      }
   // });
// ------------------Carousel--------------

$('#banner-carousel').carousel({
  interval: 3000,
  pause: "null"
})

//-----------Text Slider on Banner-----------

   // $('.flex_text').flexslider({
   //      animation: "slide",
   //  selector: ".slides li",
   //  controlNav: false,
   //  directionNav: false,
   //  slideshowSpeed: 4000,
   //  touch: true,
   //  useCSS: false,
   //  direction: "vertical",
   //      before: function(slider){
   //   var height = $('.flex_text').find('.flex-viewport').innerHeight();
   //   $('.flex_text').find('li').css({ height: height + 'px' });
   //      }
   //  });

// ----------initializing the wow.js ---------

    // Animate and WOW Animation
    var wow = new WOW(
        {
            //offset: 50,
            mobile: false
           // live: true
        }
    );
    wow.init();

//------------------video popup---------------

// $('.play').magnificPopup({
//   disableOn: 700,
//   type: 'iframe',
//   mainClass: 'mfp-fade',
//   removalDelay: 160,
//   preloader: false,
//   fixedContentPos: false
// });



  // --------------Contact Form Ajax request-----------------------

    $('.form-horizontal').on('submit', function(event){
    event.preventDefault();

    $this = $(this);

    var data = {
      first_name: $('#first_name').val(),
      last_name: $('#last_name').val(),
      email: $('#email').val(),
      subject: $('#subject').val(),
      message: $('#message').val()
    };

    $.ajax({
      type: "POST",
      url: "email.php",
      data: data,
      success: function(msg){
       $('.contact-success').fadeIn().delay(3000).fadeOut();
      }
    });
  });

      $('.counter').waypoint(function() {

        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

        $('.total-number-1').animateNumber({
            number: 300, //change value here
            numberStep: comma_separator_number_step
        }, 2000);

        $('.total-number-2').animateNumber({
            number: 10000, //change value here
            numberStep: comma_separator_number_step
        }, 2000);

        $('.total-number-3').animateNumber({
            number: 850, //change value here
            numberStep: comma_separator_number_step
        }, 2000);

        $('.total-number-4').animateNumber({
            number: 20, //change value here
            numberStep: comma_separator_number_step
        }, 2000);



    }, {
        offset: '80%'

    });

      $('div.cycle-slider').cycle({
    fx :    'fade',
    timeout:  parseInt($('div.cycle-slider').attr('data-timeout'))   || 7000,
    delay:    parseInt($('div.cycle-slider').attr('data-delay'))   || 2000,
    speed:    parseInt($('div.cycle-slider').attr('data-speed'))   || 1000,
    slides:   '.slide',
    prev:    '#prev',
    next:    '#next'
  });

  if(typeof($.magnificPopup) == "undefined") {
    return false;
  }

  $.extend(true, $.magnificPopup.defaults, {
    tClose:     'Close',
    tLoading:     'Loading...',

    gallery: {
      tPrev:    'Previous',
      tNext:    'Next',
      tCounter:   '%curr% / %total%'
    },

    image:  {
      tError:   'Image not loaded!'
    },

    ajax:   {
      tError:   'Content not loaded!'
    }
  });

  $(".lightbox").each(function() {

    var _t      = $(this),
      options   = _t.attr('data-plugin-options'),
      config    = {},
      defaults  = {
        type:         'image',
        fixedContentPos:  false,
        fixedBgPos:     false,
        mainClass:      'mfp-no-margins mfp-with-zoom',
        image: {
          verticalFit:  true
        },

        zoom: {
          enabled:    false,
          duration:     300
        },

        gallery: {
          enabled: false,
          navigateByImgClick: true,
          preload:      [0,1],
          arrowMarkup:    '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
          tPrev:        'Previou',
          tNext:        'Next',
          tCounter:       '<span class="mfp-counter">%curr% / %total%</span>'
        },
      };

    if(_t.data("plugin-options")) {
      config = $.extend({}, defaults, options, _t.data("plugin-options"));
    }

    $(this).magnificPopup(config);

  });

});


var fullScreenHome = function() {
    if(matchMedia( "(min-width: 992px) and (min-height: 500px)" ).matches) {
      "use strict"; //RUN JS IN STRICT MODE
    var height = $(window).height();
        contH  = $(".banner .col-sm-12").height(),
        contH  = $(".banner-carousel .col-sm-12").height(),
        contMT = (height / 2) - (contH / 2);
    $(".banner-carousel").css('min-height', height + "px");
    $(".banner-carousel .trans-bg").css('min-height', height + "px");
    // $(".banner .col-sm-12").css('margin-top', (contMT - 270) + "px");
    $(".banner-carousel .col-sm-12").css('margin-top', (contMT - 70) + "px");
  }
}



$(document).ready(fullScreenHome);
$(window).resize(fullScreenHome);

$(document).ready(function () {
  "use strict";

  $(window).load(function () {
    $(".preloader").fadeOut();
    $("#faceoff").delay(200).fadeOut("slow");
  });

  $('.js-scroll-to').on('click', function (event) {
    var hash = $(this)
        .attr('href')
        .split('#')[1],
      aTag = $('a[name="' + hash + '"],[id="' + hash + '"]');
    if (aTag.length) {
      $('html,body').animate({scrollTop: aTag.offset().top}, 500, function () {
        location.hash = hash;
      });
      event.preventDefault();
    }
  });

  $(window).scroll(function () {
    var $scrollHeight = $(window).scrollTop();
    if ($scrollHeight > 600) {
      $('#home').slideDown(400);
    } else {
      $('#home').slideUp(400);
    }

    if ($(this).scrollTop() > 200) {
      $('#go-to-top a').fadeIn('slow');
    } else {
      $('#go-to-top a').fadeOut('slow');
    }
  });

  $('#go-to-top a').click(function () {
    $("html,body").animate({scrollTop: 0}, 750);
    return false;
  });

  $("#owl-demo").owlCarousel({
    navigation: true,
    slideSpeed: 300,
    pagination: false,
    autoPlay: 5000,
    items: 4,
  });

  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
  });

  $('.test-popup-link').magnificPopup({
    type: 'image',
    closeBtnInside: true,
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true,
      preload: [0, 2],
      navigateByImgClick: true,
      closeMarkup: '<button title="%title%" class="mfp-close"><i class="mfp-close-icn">&times;</i></button>',
      tPrev: 'Previous',
      tNext: 'Next',
    }
  });

  $('#myCarousel, #myCarousel2').carousel({
    interval: 4000,
    pause: "null"
  });

  $('.counter').waypoint(function () {
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
    $('.total-number-1').animateNumber({
      number: 300,
      numberStep: comma_separator_number_step
    }, 2000);

    $('.total-number-2').animateNumber({
      number: 13275,
      numberStep: comma_separator_number_step
    }, 2000);
    $('.total-number-3').animateNumber({
      number: 850,
      numberStep: comma_separator_number_step
    }, 2000);
    $('.total-number-4').animateNumber({
      number: 20,
      numberStep: comma_separator_number_step
    }, 2000);
  }, {
    offset: '80%'
  });
});

$('.js-footer-date').text(new Date().getFullYear());

var fullScreenHome = function () {
  if (matchMedia("(min-width: 992px) and (min-height: 500px)").matches) {
    "use strict";
    var height = $(window).height(),
      //contH = $(".banner .col-sm-12").height(),
      contH = $(".banner-carousel .col-sm-12").height(),
      contMT = (height / 2) - (contH / 2);
    $(".banner-carousel").css('min-height', height + "px");
    $(".trans-bg").css('min-height', height + "px");
    $(".banner-carousel .col-sm-12").css('margin-top', (contMT - 50) + "px");
  }
};

$(document).ready(fullScreenHome);
$(window).resize(fullScreenHome);

var form = $('#form');
var submitBtn = $('#js-submit');

form.validate({
  rules: {
    phone: {
      required: true,
      digits: true
    }
  },
  submitHandler: function(form) {
    submitBtn.prop('disabled', true);
    $.ajax({
      type: "POST",
      url: "email.php",
      data: $(form).serialize(),
      success: function() {
        $(this).find("input").val("");
        $('.contact-success').fadeIn().delay(3000).fadeOut();
        $(".form-horizontal").trigger("reset");
        submitBtn.prop('disabled', false);
      },
      error: function() {
        $('.contact-error').fadeIn().delay(3000).fadeOut();
        submitBtn.prop('disabled', false);
      },
    });
  },
});



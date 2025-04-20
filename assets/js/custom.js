// document.querySelectorAll('.particle-container').forEach(function (container) {

// });


jQuery(document).ready(function () {

  const menu = $(".menu-wrapper");
  const hamburgerMenu = $(".hamburger-menu");

  hamburgerMenu.on("click", function () {
    menu.toggleClass("active");
  });

  if (window.innerWidth <= 991) {
    jQuery(".header").addClass("active");
  } else {
    jQuery(window).scroll(function () {
      var scroll = jQuery(window).scrollTop();

      if (scroll >= 100) {
        jQuery(".header").addClass("active");
      } else {
        jQuery(".header").removeClass("active");
      }
    });
  }


  var animationStarted = false;

  function isElementInViewport(el) {
    var rect = el.get(0).getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || $(window).height()) &&
      rect.right <= (window.innerWidth || $(window).width())
    );
  }

  function animateValue($element, start, end, duration) {
    var current = start;
    var increment = 1; // Increment by 1
    var stepTime = Math.abs(Math.floor(duration / (end - start))); // Calculate step time

    var timer = setInterval(function () {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      $element.text(current + "%"); // Update the element text directly
    }, stepTime);
  }

  function startCounterAnimation() {
    if (!animationStarted) {
      $('.counter').each(function () {
        var target = parseInt($(this).attr('data-target'));
        animateValue($(this), 0, target, 2000);
      });
      animationStarted = true;
    }
  }

  $(window).on('scroll', function () {
    $('.counter').each(function () {
      if (isElementInViewport($(this))) {
        startCounterAnimation();
      }
    });
  });


  $('.logo-slider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 6,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
  $('.testimonial-slider').slick({
    autoplay: true,
    slidesToShow: 1,
    slideToScroll: 1,
    arrows: true,
    dots: false
  });

  $('.alert-slider').slick({
    autoplay: true,
    slidesToShow: 1,
    slideToScroll: 1,
    arrows: false,
    dots: false
  });

  $(".nav-link").on("click", function (e) {
    e.preventDefault();

    // Remove active class from all tabs and contents
    $(".nav-link").removeClass("active");
    $(".tab-pane").removeClass("active");

    // Add active class to the clicked tab and corresponding content
    $(this).addClass("active");
    const target = $(this).attr("href");
    $(target).addClass("active");
  });

  // modal satrt
  $('[data-target]').click(function () {
    const targetModal = $(this).data('target'); // Get the target modal from data-target attribute
    $(targetModal).addClass('fade show'); // Show the targeted modal
  });

  // Close modal when the 'x' is clicked
  $('.close-modal').click(function () {
    $(this).closest('.modal').removeClass('fade show'); // Close the closest modal
  });


  // Close modal if clicked outside the modal content
  $(window).click(function (event) {
    if ($(event.target).is('.modal')) {
      $(event.target).removeClass('fade show'); // Close the modal if the overlay is clicked
    }
  });

  $('.passwordToggler').on('click', function () {
    let passInput = $(this).siblings('input[type="password"], input[type="text"]');
    if (passInput.attr('type') === 'password') {
        passInput.attr('type', 'text');
    } else {
        passInput.attr('type', 'password');
    }
});
});
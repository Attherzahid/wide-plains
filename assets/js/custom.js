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

  // modal satrt
  $("[data-target]").click(function () {
    const targetModal = $(this).data("target"); // Get the target modal from data-target attribute
    $(targetModal).addClass("fade show");
    $("body").addClass("overflow-hidden");
  });

  // Close modal when the 'x' is clicked
  $(".close-modal").click(function () {
    $(this).closest(".modal").removeClass("fade show");
    $("body").removeClass("overflow-hidden");
  });

  // Close modal if clicked outside the modal content
  $(window).click(function (event) {
    if ($(event.target).is(".modal")) {
      $(event.target).removeClass("fade show");
      $("body").removeClass("overflow-hidden");
    }
  });

  // steper modal start
  let currentStep = 1;
  const totalSteps = $(".step").length;

  function showStep(step) {
    $(".step").hide();
    $(`.step[data-step="${step}"]`).show();

    // Show/Hide buttons
    $("#backBtn").toggle(step > 1);
    $("#nextBtn").toggle(step < totalSteps);
    $("#submitBtn").toggle(step === totalSteps);
  }

  $("#nextBtn").click(function () {
    const currentDiv = $(`.step[data-step="${currentStep}"]`);

    // Validation
    if (currentStep <= 3) {
      const checked = currentDiv.find('input[type="radio"]:checked').length;
      if (!checked) {
        alert("Please select an option to continue.");
        return;
      }
    } else if (currentStep === 4) {
      const name = $("input[name='name']").val().trim();
      const email = $("input[name='email']").val().trim();
      if (!name || !email) {
        alert("Please enter both name and email.");
        return;
      }
    }

    currentStep++;
    showStep(currentStep);
  });

  $("#backBtn").click(function () {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  });

  $("#multiStepForm").submit(function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
    // You can now process form data or send it via AJAX
  });

  showStep(currentStep); // Init first step
});

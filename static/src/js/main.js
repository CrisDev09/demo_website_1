$(window).on("load", function () {
  $(".preloader").fadeOut("slow");
  updateImg();
});

$(document).ready(function () {
  /* ---------------------Navbar Shrink----------------- */
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });
  /* ---------------------Video Popup------------------- */
  const videoSrc = $("#player-1").attr("src");
  const videoSrc2 = $("#player-2").attr("src");

  $(".video-play-btn, .video-popup").on("click", function () {
    var target = $(this).data("target");
    var $videoPopup = $(".video-popup[data-target='" + target + "']");

    if ($videoPopup.hasClass("open")) {
      $videoPopup.removeClass("open");
      $("#player-1").attr("src", "");
      $("#player-2").attr("src", "");
    } else {
      $videoPopup.addClass("open");
      if ($videoPopup.find("iframe").attr("src") == "") {
        $("#player-1").attr("src", videoSrc);
        $("#player-2").attr("src", videoSrc2);
      }
    }
  });


  /* ---------------------Page scrolling- ScrollIt------------------- */
  $.scrollIt({
    topOffset: -50,
  });

  /* ---------------------Navbar collapse------------------- */
  // $(".nav-link").on("click", function () {
  //   $(".navbar-collapse").collapse("hide");
  // });

  /*----------------------- Toggle Teme Start light and dark mode-------*/
  function toggleTheme() {
    if (localStorage.getItem("wb-theme") !== null) {
      if (localStorage.getItem("wb-theme") === "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }
    updateIcon();
    updateImg();
  }
  toggleTheme();

  $(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("wb-theme", "dark");
    } else {
      localStorage.setItem("wb-theme", "light");
    }
    updateIcon();
    updateImg();
  });

  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toggle-theme i").removeClass("fa-sun-o");
      $(".toggle-theme i").addClass("to-p-right");
      $(".toggle-theme i").removeClass("to-p-left");
      $(".toggle-theme i").addClass("fa-moon-o");
    } else {
      $(".toggle-theme i").removeClass("fa-moon-o");
      $(".toggle-theme i").addClass("fa-sun-o");
      $(".toggle-theme i").removeClass("to-p-right");
      $(".toggle-theme i").addClass("to-p-left");
    }
  }

  function updateImg() {
    if ($("body").hasClass("dark")) {
      $(".img-dark").css("display", "flex");
      $(".img-clear").css("display", "none");
      $(".bg-cont-img").css("display", "block");
    } else {
      $(".img-dark").css("display", "none");
      $(".bg-cont-img").css("display", "none");
      $(".img-clear").css("display", "flex");
    }
  }

  /*--------------------------------- Dynamic Years --------------------------------*/
  function dyYears() {
    let years = new Date().getFullYear();
    $("#dynamic-years").text(years);
  }
  dyYears();

});

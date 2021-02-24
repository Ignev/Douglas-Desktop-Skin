document.addEventListener("DOMContentLoaded", function(){
  $(".slider").slick({
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    arrows: true,
    autoplay: false,
    prevArrow: ".slider__pre",
    nextArrow: ".slider__next",
    swipe: false,
    dots: true,
    asNavFor: ".top-woman",
  });
  $(".name").slick({
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    arrows: true,
    autoplay: false,
    prevArrow: ".slider__pre",
    nextArrow: ".slider__next",
    swipe: false,
    dots: false,
    vertical: true,
  });
  $(".top-woman").slick({
    infinite: true,
    swipe: false,
    fade: true,
    cssEase: "linear",
    asNavFor: ".slider",
    speed: 500,
    autoplaySpeed: 3000,
    arrows: false,
    autoplay: false,
  });
  $(".bottom-woman").slick({
    infinite: true,
    swipe: false,
    fade: true,
    cssEase: "linear",
    arrows: false,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: false,
    asNavFor: ".slider",
  });
  
  function closePopup(closeBtnSelector, popupSelector) {
    const closeBtn = document.querySelector(closeBtnSelector);
    const popup = document.querySelector(popupSelector);
  
    closeBtn.addEventListener("click", function () {
      popup.style.animation = "fadeOut 1s ease";
      setTimeout(() => {
        popup.style.display = "none";
      }, 1000);
    });
  }
  function openPopup(openBtnSelector, popupSelector) {
    const openBtn = document.querySelector(openBtnSelector);
    const popup = document.querySelector(popupSelector);
  
    openBtn.addEventListener("click", function () {
      popup.style.display = "flex";
      popup.style.animation = "fadeIn 1s ease";
    });
  }
  
  var clickLeft = false;
  $(".slider__btn").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $this = $(this);
    var arrow = "slider__pre";
    if ($($this).hasClass("slider__next")) {
      arrow = "next";
    }
    if ($($this).hasClass("slider__pre")) {
      arrow = "prev";
    }
    clickLeft = true;
    obj = { arrow: arrow, clickLeft: clickLeft };
    parent.postMessage(JSON.stringify(obj), "*");
  });
  
  window.addEventListener(
    "message",
    function (event) {
      if (typeof event.data !== "undefined") {
        try {
          var obj = JSON.parse(event.data);
  
          if (typeof obj.arrow !== "undefined") {
            $(".test-block").html(obj.arrow);
            if (obj.arrow == "prev") {
              $(".slider").slick("slickPrev");
            } else if (obj.arrow == "next") {
              $(".slider").slick("slickNext");
            }
          }
        } catch (e) {}
      }
    },
    false
  );
  
  closePopup("#close1", "#popup1");
  closePopup("#close2", "#popup2");
  closePopup("#close3", "#popup3");
  openPopup("#plus1", "#popup1");
  openPopup("#plus2", "#popup2");
  openPopup("#plus3", "#popup3");
  
  $(".slider__btn").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $this = $(this);
    if ($($this).hasClass("slider__next")) {
      $(".bottom-woman").slick("slickNext");
    }
    if($($this).hasClass("slider__pre")){
      $(".bottom-woman").slick("slickPrev");
    }
    if ($($this).hasClass("slider__next")) {
      $(".top-woman").slick("slickNext");
    }
    if($($this).hasClass("slider__pre")){
      $(".top-woman").slick("slickPrev");
    }
  });
  
  $(".slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      const popups = document.querySelectorAll(".popup");
      popups.forEach((item) => {
        item.style.display = "none";
      });
    }
  );
})


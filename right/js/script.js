$(".top-woman").slick({
  infinite: true,
  swipe: false,
  fade: true,
  cssEase: "linear",
  speed: 500,
  autoplaySpeed: 3000,
  arrows: false,
  autoplay: true,
  asNavFor: ".center",
});

$(".center").slick({
  infinite: true,
  swipe: false,
  fade: true,
  cssEase: "linear",
  speed: 500,
  autoplaySpeed: 3000,
  arrows: false,
  autoplay: true,
  asNavFor: ".top-woman",
});

window.addEventListener(
  "message",
  function (event) {
    if (typeof event.data !== "undefined") {
      try {
        var obj = JSON.parse(event.data);
        console.log(obj.arrow);
        if (typeof obj.arrow !== "undefined") {
          if (obj.arrow == "prev") {
            $(".center").slick("slickPrev");
          } else if (obj.arrow == "next") {
            $(".center").slick("slickNext");
          }
        }
      } catch (e) {}
    }
  },
  false
);
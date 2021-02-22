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
document.addEventListener("mousemove", function (e) {
  const mybody = document.querySelector(".bottom__canvas");
  const round = document.createElement("span");
  round.style.left = -50 + e.offsetX + "px";
  round.style.top = -50 + e.offsetY + "px";
  mybody.appendChild(round);
});

window.addEventListener(
  "message",
  function (event) {
    if (typeof event.data !== "undefined") {
      try {
        var obj = JSON.parse(event.data);
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
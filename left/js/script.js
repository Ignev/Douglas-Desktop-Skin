$(".slider").slick({
  infinite: true,
  draggable: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: true,
  swipeToSlide: true,
  touchThreshold: 100,
  speed: 500,
  pauseOnHover: true,
  autoplaySpeed: 3000,
  arrows: true,
  autoplay: false,
  prevArrow: ".slider__pre",
  nextArrow: ".slider__next",
  swipe: false,
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
closePopup("#close1", "#popup1");
closePopup("#close2", "#popup2");
closePopup("#close3", "#popup3");
openPopup("#plus1", "#popup1");
openPopup("#plus2", "#popup2");
openPopup("#plus3", "#popup3");
$(".slider").on(
  "afterChange",
  function (event, slick, currentSlide, nextSlide) {
    const popups = document.querySelectorAll(".popup");
    popups.forEach((item) => {
      item.style.display = "none";
    });
  }
);

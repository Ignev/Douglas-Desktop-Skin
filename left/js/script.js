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
  autoplay: true,
  prevArrow: ".slider__pre",
  nextArrow: ".slider__next",
  swipe: false,
  dots: true

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
let count = 1;
console.log(count);

closePopup("#close1", "#popup1");
closePopup("#close2", "#popup2");
closePopup("#close3", "#popup3");
openPopup("#plus1", "#popup1");
openPopup("#plus2", "#popup2");
openPopup("#plus3", "#popup3");

$(".slider").on(
  "afterChange",
  function (event, slick, currentSlide, nextSlide) {
    count++;
    const womanOne = document.querySelector("#top-woman-1");
    const womanTwo = document.querySelector("#top-woman-2");
    const womanThree = document.querySelector("#top-woman-3");
    const BottomWomanOne = document.querySelector("#bottom-woman-1");
    const BottomWomanTwo = document.querySelector("#bottom-woman-2");
    const BottomWomanThree = document.querySelector("#bottom-woman-3");

if(count <= 3){
      if(count == 2){
        BottomWomanOne.style.animation = "";
        womanOne.style.animation = "";
        BottomWomanTwo.style.opacity = "1"
        womanTwo.style.opacity = "1"
        BottomWomanThree.style.animation = "fadeBg 1s ease";
        womanThree.style.animation = "fadeBg 1s ease";
        setTimeout(() => {
          womanThree.style.opacity = "0";
          BottomWomanThree.style.opacity = "0";
        }, 1000)
      }
      if(count == 3){
        BottomWomanOne.style.opacity = "1"
        womanOne.style.opacity = "1"
        BottomWomanTwo.style.animation = "fadeBg 1s ease";
        womanTwo.style.animation = "fadeBg 1s ease";
        setTimeout(() => {
          BottomWomanTwo.style.opacity = "0";
          womanTwo.style.opacity = "0";
        }, 1000)
      }
    }
    else{
      count = 1;
      womanOne.style.animation = "fadeBg 1s ease";
      BottomWomanOne.style.animation = "fadeBg 1s ease";
      
        setTimeout(() => {
          womanOne.style.opacity = "0";
          BottomWomanOne.style.opacity = "0";
          womanThree.style.animation = "";
          womanThree.style.opacity = "1";
      BottomWomanThree.style.opacity = "1";
          BottomWomanThree.style.animation = "";
          womanTwo.style.animation = "";
          BottomWomanTwo.style.animation = "";
        }, 1000)
    }
    const popups = document.querySelectorAll(".popup");
    popups.forEach((item) => {
      item.style.display = "none";
    });
  }
);


/*
    if(count > 2){
      count = 0;
    }
    const topWoman = document.querySelectorAll(".woman");
    const bottomWoman = document.querySelectorAll(".woman-bottom");
    for (let i = 0; i < topWoman.length; i++) {
      if(count == 0){
        topWoman[2].style.animation = "fadeBg 1s ease";
        console.log(count);
      }
      else{
        topWoman[count-1].style.animation = "fadeBg 1s ease";
        console.log(count);
      }
      
      setTimeout(() => {
        topWoman[count].classList.add("woman-actvie");
        if(count == 0){
          topWoman[2].style.animation = "fadeBg 1s ease";
          topWoman[2].classList.remove("woman-actvie");
          topWoman[2].style.opacity = "0";
          topWoman[2].style.zIndex = "1";
        }
        else{
          topWoman[count-1].classList.remove("woman-actvie");
          topWoman[count-1].style.opacity = "0";
          topWoman[count-1].style.zIndex = "1";
        }
       
      }, 1000);
    }
    for (let j = 0; j < bottomWoman.length; j++) {
      
    }
    console.log(count);
*/
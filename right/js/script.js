document.addEventListener("DOMContentLoaded", function(){
  $(".top-woman").slick({
    infinite: true,
    swipe: false,
    fade: true,
    cssEase: "linear",
    speed: 500,
    arrows: false,
    autoplay: false,
    asNavFor: ".center",
  });
  
  $(".center").slick({
    infinite: true,
    swipe: false,
    fade: true,
    cssEase: "linear",
    speed: 500,
    arrows: false,
    autoplay: false,
    asNavFor: ".top-woman",
  });
  // const mybody = document.querySelector(".bottom__canvas");
  // mybody.addEventListener("mousemove", function (e) {
  //   const round = document.createElement("span");
  //   round.style.left = -45 + e.offsetX + "px";
  //   round.style.top = -45 + e.offsetY + "px";
  //   mybody.appendChild(round);
  // });

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  console.log(bottom.offsetWidth);
  canvas.width = bottom.offsetWidth;
  canvas.height = bottom.offsetHeight;
  var img = new Image();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  canvas.addEventListener('mousemove', function (e){
      var x = e.offsetX;
      var y =  e.offsetY;
      ctx.globalCompositeOperation = 'destination-out';

      ctx.beginPath();
      ctx.arc(x, y, 50, 0, 2 * Math.PI);
      ctx.fill();

      ctx.lineWidth = 0;
      ctx.beginPath();
      // ctx.lineTo(x, y);
      ctx.stroke();
  });
  document.addEventListener('mousemove', function (e){
    tap.style.animation = "fadeOut 1s ease";
    setTimeout(function(){
      tap.style.display = "none";
    }, 999)
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
})


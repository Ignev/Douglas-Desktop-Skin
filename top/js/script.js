
document.addEventListener("DOMContentLoaded", function(){
    document.addEventListener("mousemove", function (e) {
        const mybody = document.querySelector("body");
        const round = document.createElement("span");
        round.style.left =  -50 + e.offsetX + "px";
        round.style.top = -50 + e.offsetY + "px";
        mybody.appendChild(round);
      });
    
})
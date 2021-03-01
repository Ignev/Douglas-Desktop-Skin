var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var img = new Image();
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
img.src = "../img/tap.png";
img.onload = function () {
  var width = Math.min(500, img.width);
  var height = img.height * (width / img.width);

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 50, 50);
};

var isPress = true;
canvas.addEventListener('mousemove', function (e){
  if (isPress) {
    var x = -135 + e.offsetX;
    var y = 40 + e.offsetY;
    ctx.globalCompositeOperation = 'destination-out';

    ctx.beginPath();
    ctx.arc(x, y, 75, 0, 2 * Math.PI);
    ctx.fill();

    ctx.lineWidth = 0;
    ctx.beginPath();
    ctx.lineTo(x, y);
    ctx.stroke();

  }
});
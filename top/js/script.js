

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var img = new Image();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  console.log();
  canvas.addEventListener('mousemove', function (e){
      var x = e.clientX;
      var y = e.clientY;
      console.log(e.clientX, e.clientY);
      console.log(x, y);
      ctx.globalCompositeOperation = 'destination-out';
  
      ctx.beginPath();
      ctx.arc(x, y, 50, 0, 2 * Math.PI);
      ctx.fill();
  
      ctx.lineWidth = 0;
      ctx.beginPath();
      ctx.lineTo(x, y);
      ctx.stroke();
  });
  document.addEventListener('mousemove', function (e){
    tap.style.animation = "fadeOut 1s ease";
    setTimeout(function(){
      tap.style.display = "none";
    }, 999)
  });


  
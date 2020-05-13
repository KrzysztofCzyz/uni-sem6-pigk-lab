var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke(); 

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke(); 
ctx.closePath();

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.quadraticCurveTo(20, 100, 200, 20);
ctx.stroke(); 
ctx.closePath();

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
ctx.stroke(); 
ctx.closePath();

ctx.beginPath();
ctx.rect(20, 20, 150, 100);
ctx.fillRect(20, 20, 50, 100);
ctx.stroke();
ctx.closePath();

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx2.fillStyle = grd;
ctx2.fillRect(20, 20, 150, 100); 

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");

var grd2 = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd2.addColorStop(0, "red");
grd2.addColorStop(1, "white");

ctx3.fillStyle = grd2;
ctx3.save();
ctx3.fillStyle = grd;
ctx3.fillRect(20, 20, 150, 100);
ctx3.restore();
ctx3.fillRect(20, 20, 150, 100);

var cx = document.getElementById("myCanvas4");
var ctx4 = cx.getContext("2d");
var img = document.getElementById("lamp");
var pat = ctx4.createPattern(img, "repeat");
ctx4.rect(0, 0, 100, 100);
ctx4.fillStyle = pat;
ctx4.fill();



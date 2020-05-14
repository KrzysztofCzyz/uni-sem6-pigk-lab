var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var tab = Array(10,30,50,120);
draw_pie(ctx,tab);
var proc = 0;

function draw_pie(){
var arr = tab;
//setup
    let sum = 0;
arr.forEach(element => {
    sum+=element;
});
let array = Array();
arr.forEach(e => {
    array.push((e/sum));
})
var start = 0;
var i = 1;
var slice;
var colors = Array();
//kolorki
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "white");
grd.addColorStop(1, "green");
var grd2 = ctx.createLinearGradient(0, 0, 170, 0);
grd2.addColorStop(0, "white");
grd2.addColorStop(1, "yellow");
colors.push(grd,grd2);
//animacja
if(proc==1)
return;
proc += 0.01;
if(proc > 1){
    proc=1;
}
//rysowanie
array.forEach(e => {
    ctx.fillStyle = colors[i%2]; i++;
    slice=e*2*Math.PI;
    ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.arc(50,50,50,start,start+(slice*proc));
    start=start+slice;
    ctx.closePath();
    ctx.fill();
});
}
setInterval(draw_pie, 10);



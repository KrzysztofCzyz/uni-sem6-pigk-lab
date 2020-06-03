var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var proc = 0;
var d = Array();
var c = -2;
for(var i=0;i<70    ;++i){
    d.push(Math.sin(2*i)*Math.cos(3*i)+0.5*i-c)
};

var dane_wykresu = {
    serie : [d] ,
    etykiety : [ "f"] , 
    tytul : "Animowany wykres slupkowy" ,
    type : "wykres_slupkowy"
};
var canv = {w: 1000, h:500};
//setup
var xx = d[0];
d.forEach(element => {
    if(element > xx){
        xx=element;
    }
});
var y_max = xx;
var ilosc = dane_wykresu.etykiety.length;
//skalowanie danych do rysowania;
var dane = Array();
var x;
dane_wykresu.serie.forEach(arr => {
x = arr.map(val => val=500*(val/y_max));
dane.push(x);
});

ctx.translate(10,490);
ctx.scale(1,-1);

var dx = 13;
var bar_dx = dx / dane_wykresu.serie.length;
var p = 0;

ctx.strokeStyle="black";

ctx.lineWidth = 1;

ctx.moveTo(0,0);
ctx.lineTo(canv.w,0);
ctx.moveTo(0,0);
ctx.lineTo(0,canv.h);
ctx.stroke();
with(ctx){
    font = "20pt Calibri"; 
    fillStyle = "black"; 
    textAlign = "center"; 
    dane_wykresu.etykiety.forEach((e, i) => {
        p = dx*i+(bar_dx/2);
        fillText(e,p,0);


    });
}
ctx.lineWidth = 10;
setInterval(draw_bar, 10);




function draw_bar(){

//kolorki
var colors = Array();
colors.push("yellow","red","green","black","blue");
proc = 0.99;
//animacja
if(proc==1)
return;
proc += 0.01;
if(proc > 1){
    proc=1;
}

//rysowanie
//setup
var j = 0;
var pos = 0;
var offset = 15;
dane.forEach(seria => {
    var i = 0;
    ctx.strokeStyle=colors[j%colors.length];
    seria.forEach(e => {
        pos = i*dx + j*bar_dx + offset;
        with(ctx){
            beginPath();
            moveTo(pos,0);
            lineTo(pos,e*proc);
            stroke();
            closePath();
        }
        i++;
    });
    j++;
    
});
}




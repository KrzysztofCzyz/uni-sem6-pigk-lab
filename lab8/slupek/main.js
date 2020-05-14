var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var proc = 0;
var dane_wykresu = {
    serie : [[10 , 30 , 45 , 24 , 79] , [24 , 15 , 33 , 34 , 50]] ,
    etykiety : [ "label1" , "label2" , "label3" , "label4" , "label5" ] , 
    tytul : "Animowany wykres slupkowy" ,
    type : "wykres_slupkowy"
};
var canv = {w: 1000, h:500};
//setup

var potmax = Array();
dane_wykresu.serie.forEach(arr => {
    potmax.push(Math.max(arr));
});
var y_max = Math.max(potmax);
var ilosc = dane_wykresu.etykiety.length;
//skalowanie danych do rysowania;
var dane = Array();
var x;
dane_wykresu.serie.forEach(arr => {
x = arr.map(val => 500 * (val/79));
dane.push(x);
});

ctx.translate(10,490);
ctx.scale(1,-1);

var dx = canv.w / ilosc;
var bar_dx = dx / dane_wykresu.serie.length;
var p = 0;

ctx.strokeStyle="black";

ctx.lineWidth = 2;

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




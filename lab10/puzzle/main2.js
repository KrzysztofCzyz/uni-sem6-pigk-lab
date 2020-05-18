var poz= Array();
poz.push({x:0, y:0});
poz.push({x:154, y:0});
poz.push({x:154*2, y:0});
poz.push({x:154*3, y:0});

window.onload = function () {
    //var canvas = document.getElementById("myCanvas");
    var canvas = new fabric.Canvas("myCanvas");


    with (fabric) {
        for(var i=1; i<=4;i++){

            Image.fromURL(i+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 0);
                img.set('left', poz[0].x);
                canvas.add(img);
            }, {evented: false});
        }
        canvas.renderAll();
    }
}

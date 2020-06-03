var poz= Array();
poz.push({x:0, y:0});
poz.push({x:154, y:0});
poz.push({x:154*2, y:0});
poz.push({x:154*3, y:0});
var i=0;
//Prosze o wyrozumialosc, zawartosc PDFow byla mylaca
window.onload = function () {
    //var canvas = document.getElementById("myCanvas");
    var canvas = new fabric.Canvas("myCanvas");


    with (fabric) {
                Image.fromURL(0+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 0);
                img.set('left', 0*154);
                canvas.add(img);
            }, {evented: false});
            Image.fromURL(1+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 0);
                img.set('left', 1*154);
                canvas.add(img);
            }, {evented: false});
            Image.fromURL(2+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 0);
                img.set('left', 2*154);
                canvas.add(img);
            }, {evented: false});
            Image.fromURL(3+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 0);
                img.set('left', 3*154);
                canvas.add(img);
            }, {evented: false});
            

            Image.fromURL(0+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 154);
                img.set('left', 0*154);
                canvas.add(img);
            }, {evented: false});
            Image.fromURL(1+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 154);
                img.set('left', 1*154);
                canvas.add(img);
            }, {evented: false});
            Image.fromURL(2+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 154);
                img.set('left', 2*154);
                canvas.add(img);
            }, {evented: false});
            Image.fromURL(3+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 154);
                img.set('left', 3*154);
                canvas.add(img);
            }, {evented: false});

            Image.fromURL(0+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 154*2);
                img.set('left', 0*154);
                canvas.add(img);
            }, {evented: false});
            Image.fromURL(1+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 154*2);
                img.set('left', 1*154);
                canvas.add(img);
            }, {evented: false});
            Image.fromURL(2+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 154*2);
                img.set('left', 2*154);
                canvas.add(img);
            }, {evented: false});
            Image.fromURL(3+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 154*2);
                img.set('left', 3*154);
                canvas.add(img);
            }, {evented: false});

            Image.fromURL(0+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 154*3);
                img.set('left', 0*154);
                canvas.add(img);
            }, {evented: false});
            Image.fromURL(1+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 154*3);
                img.set('left', 1*154);
                canvas.add(img);
            }, {evented: false});
            Image.fromURL(2+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 154*3);
                img.set('left', 2*154);
                canvas.add(img);
            }, {evented: false});
            Image.fromURL(3+'.jpg',
            function (img) {
                img.scale(0.5);
                img.set('top', 154*3);
                img.set('left', 3*154);
                canvas.add(img);
            }, {evented: false});
            }


            


            

        canvas.renderAll();
    }

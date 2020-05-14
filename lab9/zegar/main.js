var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
InitAnimation();

function InitAnimation() {
     clock = { 
         area: { x: 0, y: 0, width: canvas.width, height: canvas.height }, 
         //rozmiar tarczy
          radius: 200, 
          //gradient dla tarczy 
          startColor: "#F8FCFF", stopColor: "#A1CCEE",
           //aktualny stan zegara 
           hour: 0, minute: 0, second: 0, milisecond: 0, 
           //Czcionka do wyświetlania godzin 
           fontProperty: { font: "32pt Calibri", fillStyle: "#024F8C", textAlign: "center", textBaseLine: "middle" } 
        };
        window.setInterval(drawAnimation,1000);
    }

    function drawAnimation() { 
        //…… 
        // pobranie aktualnej daty (w tym czasu) 
        var date = new Date();
        // przepisanie danych do zegara z uwzględnieniem wpływu   
        // poszczególnych wskazówek (zmiana minut powoduje 
        //przemieszczenie wskazówki godzin + clock.second/60 
        clock.second = date.getSeconds(); 
        clock.minute = date.getMinutes() + clock.second / 60; 
        clock.hour = date.getHours() + clock.minute / 60;
         // zmiana czasu 24h -> 12h 
         if (clock.hour > 12) clock.hour -= 12; 
         //……

         context.save(); //(1) 
         // Środek dostępnego obszaru 
         context.translate(clock.area.width / 2, clock.area.height / 2);
        context.save(); //(save -> 2) 
        // Tarcza zegara 
        context.beginPath(); 
        context.arc(0, 0, clock.radius, 0, Math.PI * 2); //Gradient wypełnienia 
        var grd = context.createLinearGradient(-clock.radius, -clock.radius, clock.radius, clock.radius); 
        grd.addColorStop(0, clock.startColor); 
        grd.addColorStop(1, clock.stopColor); 
        context.fillStyle = grd; 
        context.fill();
         context.closePath();
          context.restore(); //(resotre <- 2)

          // Liczby na tarczy zegara (cyfr nie obracamy) 
          context.save(); // (save -> 2) 
          context.font = clock.fontProperty.font;
           context.fillStyle = clock.fontProperty.fillStyle;
            context.textAlign = clock.fontProperty.textAlign;
             context.textBaseline = clock.fontProperty.textBaseLine;
              for (var n = 1; n <= 12; n++) {
                   var theta = (n - 3) * (Math.PI * 2) / 12; 
                   //Poruszanie po okręgu zgodnie z równaniem okręgu 
                   var x = clock.radius * 0.8 * Math.cos(theta); 
                   var y = clock.radius * 0.8 * Math.sin(theta); 
                   context.strokeText(n, x, y);
                    context.fillText(n, x, y); 
                } 
                    context.restore();// (restore <- 2)

                    context.save(); //(save -> 2) 
                    context.fillStyle = "#009999" 
                    var theta = (clock.hour - 3) * 2 * Math.PI / 12;
                     // (układ współrzędnych 3) 
                     context.rotate(theta); 
                     // obracamy wskazówkę obracając układ współrzędnych
                      context.beginPath();
                       context.moveTo(-10, -4);
                        context.lineTo(-10, 4);
                         context.lineTo(clock.radius * 0.6, 1);
                          context.lineTo(clock.radius * 0.6, -1);
                           context.fill();
                            context.restore(); //(restore -> 2)
                            
                            context.save(); //(save -> 2) 
                            context.fillStyle = "#009939"
                             var theta = (clock.minute - 15) * 2 * Math.PI / 60;
                              // (układ współrzędnych 3) 
                              context.rotate(theta);
                               // obracamy wskazówkę obracając układ współrzędnych 
                               context.beginPath();
                                context.moveTo(-10, -4);
                                 context.lineTo(-10, 4);
                                  context.lineTo(clock.radius * 0.7, 1);
                                   context.lineTo(clock.radius * 0.7, -1);
                                    context.fill();
                                     context.restore(); //(restore -> 2) 

                                     context.save(); //(save -> 2) 
                                     context.fillStyle = "#909099" 
                                     var theta = (clock.second - 15) * 2 * Math.PI / 60; 
                                     // (układ współrzędnych 3)
                                      context.rotate(theta); 
                                      // obracamy wskazówkę obracając układ współrzędnych 
                                      context.beginPath();
                                       context.moveTo(-10, -4);
                                        context.lineTo(-10, 4); 
                                        context.lineTo(clock.radius * 0.8, 1);
                                         context.lineTo(clock.radius * 0.8, -1);
                                          context.fill();
                                           context.restore(); //(restore -> 2) 
                                           context.restore(); // restore 1
                
        }

    



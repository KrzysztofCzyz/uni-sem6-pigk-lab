function dosrodka(){
    if ($(this).hasClass('animacja-in')){
        $(this).removeClass('animacja-in');
        $(this).addClass('animacja-out');
        setTimeout(function (object) {
            $(object).addClass('ani-hover');
            $(object).removeClass('animacja-out');
        },1000,this);
    }
    else {
        $(this).addClass('animacja-in');
        $(this).removeClass('ani-hover');
    }
}

function rozsypse(){
    $("p").css("position", "relative");
    
    $("p").each(function(i,obj){
        let rand = Math.floor(Math.random()*100);
        $(obj).css("top",rand);
        $(obj).css("left",rand);
    })
}
rozsypse();
$('.card-pic,.card-dd').addClass('ani-hover');
$('.card-pic').click(dosrodka);
$("p").addClass('dodomu');
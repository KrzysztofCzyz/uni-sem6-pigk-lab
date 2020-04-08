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

// malo elastyczne jest to setTimeout w tym wypadku
function dubel(){
    if ($(this).hasClass('card-double')){
        $(this).removeClass('card-double');
        $(this).addClass('animacja-out');
        setTimeout(function (object) {
            $(object).addClass('ani-hover');
            $(object).removeClass('animacja-out');
        },1000,this);
    }
    else {
        $(this).addClass('card-double');
        $(this).removeClass('ani-hover');
    }
}

$('.card-pic,.card-dd').addClass('ani-hover');
$('.card-pic').click(dosrodka);
$('.card-dd').click(dubel);
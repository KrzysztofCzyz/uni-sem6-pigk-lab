function dosrodka(){
    if ($(this).hasClass('animacja-in')){
        $(this).removeClass('animacja-in');
        $(this).addClass('animacja-out');
    }
    else {
        $(this).removeClass('animacja-out');
        $(this).addClass('animacja-in');
    }

}

$('.card-pic').click(dosrodka);
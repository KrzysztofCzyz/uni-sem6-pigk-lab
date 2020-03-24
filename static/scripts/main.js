var availableTags = [
    "dolnośląskie",
    "kujawsko-pomorskie",
    "lubelskie",
    "lubuskie",
    "łódzkie",
    "małopolskie",
    "mazowieckie",
    "opolskie",
    "podkarpackie",
    "podlaskie" ,
    "pomorskie" ,
    "śląskie" ,
    "świętokrzyskie" ,
    "warmińsko-mazurskie" ,
    "wielkopolskie" ,
    "zachodniopomorskie"
];

function dodajdane() {
    text = "<tr>" +
        "<th scope=\"row\">" + $( "#Col1" ).val() + "</th>" +
        "<td>" + $( "#Col2" ).val() + "</td>" +
        "<td>" + $( "#Col3" ).val() + "</td>" +
        "</tr>"
    $( "#tabelka-lab2 tbody" ).append(text)
}

function sprawdz() {
    date1 = $( "#datepicker" ).datepicker( "getDate" );
    date2 = $( "#datepicker2" ).datepicker( "getDate" );
    if (date1 != null && date2 != null)
    if (date1 <= date2){
        alert("Zle wpisales/as")
    }
}

function dodajtekst() {
    if( ($( "#spinner" ).spinner( "value" ) != null) && ($( "#slider" ).slider( "option", "value" ) != null) && ($( "#selection" ).val() != null)){
        text = "<h3> Spinner </h3>" +
            "<p class=\"text-center\">" + $( "#spinner" ).spinner( "value" ) + "</p>"+
            "<h3> Slider </h3>" +
            "<p class=\"text-center\">" + $( "#slider" ).slider( "option", "value" ) + "</p>"+
            "<h3> selectMenu </h3>" +
            "<p class=\"text-center\">" + $( "#selection" ).val() + "</p>"+
            "<p class=\"text-right\">To je so poprawne dane.</p>";
    }
    else text ="<p class=\"text-right\">To nie so poprawne dane.</p>";
    $("#lab2-modal2").html(text);
}

$( "#accordion" ).accordion();
$( "#tabs" ).tabs();
$( "#zapisz-dane" ).click(dodajdane);




$( "#control-group" ).controlgroup();
$( "#tags" ).autocomplete({
    source: availableTags
});

$( "#datepicker" ).datepicker();
$( "#datepicker2" ).datepicker();
$( "#datepicker2" ).click(sprawdz);

// TAB3
$( "#selection" ).selectmenu();
$( "#slider" ).slider();
$( "#spinner" ).spinner({
    classes: {
        "ui-spinner": "text-black-50"
    }
});

$.extend( $.ui.dialog.prototype.options.classes, {
    "ui-dialog": "modal-content",
    "ui-dialog-titlebar": "modal-header",
    "ui-dialog-title": "modal-title",
    "ui-dialog-titlebar-close": "close",
    "ui-dialog-content": "modal-body",
    "ui-dialog-buttonpane": "modal-footer"
});

$( "#but2").click(dodajtekst);
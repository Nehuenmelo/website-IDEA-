$(document).ready(function(){

    $("#home-areas").css({"width" : "100%",
                     "height" : "200px"
    });

    $("html").hide();
    $("#color-box h1").hide();
    $("p").hide();

    setTimeout( ()=> {
        $("html").fadeIn(300);
        $("#color-box h1").slideDown(500);
        $("p").show(800);
    }, 100);



    /* MOSTRAR ELEMENTOS MODO MOBILE */
    var ancho = window.innerWidth;
    var alto = window.innerHeight;

    if(ancho <= 1000){

        $(".rrss h3").html("Seguinos!");

    } else { /* MOSTRAR  ELEMENTOS MODO PC */
        
        $(".rrss h3").html("Seguinos en las redes");
    };
})


$(document).ready(function(){

    $("header").css({"width" : "100%",
                     "height" : window.innerHeight
    });
    
    $("html").hide();

    setTimeout( ()=> {
        $("html").fadeIn(300);
    }, 100);

    /* ESCONDER ELEMENTOS AL INICIO */
    $(function(){
        $("#logo").hide();
        $("#mobile-nav-button").hide();
        $("#mobile-nav").hide();
        $("#soy-nuevo").hide();
        $("#rrss").hide();
        $("#somos-flia").hide();

        /* MOSTRAR ELEMENTOS MODO MOBILE */
        var ancho = window.innerWidth;
        var alto = window.innerHeight;

        if(ancho <= 800){
            setTimeout(function() {
                $("#logo").slideDown(300);
                $("#mobile-nav-button").slideDown(300);
                $("#somos-flia").slideDown(1500);
            }, 100);

            /* ESTILOS MENU MOBILE */
            var navMenuButtonSpan = $("#mobile-nav-button span");
            var navMenuButton = $("#mobile-nav-button");
            var topHeader = $("#top-header");
            var logo = $("#logo");
            var logoImg = $("#logo img");
            var topBar = $("#top-bar");
            var mobileNav = $("#mobile-nav");

            $("#somos-flia").css({
                'padding-top': '60vh'
            });
            mobileNav.css({
                'height': alto,
                'margin-bottom': '500px'
            });
            topHeader.css({
                'position': 'fixed',
                'width': ancho
            });
            logoImg.css({
                'position': 'fixed'
            });

            $("figcaption").addClass("area-mobile");
            $("figure").removeClass("effect-romeo");

                /* ESTILOS MENU MOBILE - BEHAVIOR SCROLL DOWN */
            $(function() {
                //caches a jQuery object containing the header element
                $(window).scroll(function() {
                    var scroll = $(window).scrollTop();
                    
            
                    if (scroll >= (alto-60)) { /* SCROLL +30PX */
                        
                        topBar.addClass("top-bar");

                        logo.addClass("sm-logo");

                        logoImg.addClass("sm-logoImg", 500);

                        navMenuButton.addClass("sm-navMenuButton");

                        navMenuButtonSpan.addClass("sm-navMenuButtonSpan");
                    
                        
                    } else { /* SCROLL -30PX */
                    
                        topBar.removeClass("top-bar");
                        
                        logo.removeClass("sm-logo");

                        logoImg.removeClass("sm-logoImg", 500);

                        navMenuButton.removeClass("sm-navMenuButton", 500);

                        navMenuButtonSpan.removeClass("sm-navMenuButtonSpan", 500);
                        
                    }
                });
            });

            var indicador = 1;
            $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
                $(this).toggleClass('open');

                
                $(function(){
                    if(indicador == 1){ /* MOSTRAR MOBILE NAV */
                        setTimeout(function(){
                            
                            topBar.removeClass("top-bar");
                            
                            mobileNav.show("slide", { direction: "right" }, 500);
                            
                            $("body,html").css('overflow-y', 'hidden');
                            
                        });

                    indicador = 0;
                    } else { /* ESCONDER MOBILE NAV */
                        setTimeout(function(){
                            

                            mobileNav.hide("slide", { direction: "right" }, 500);
                            
                            $("body,html").css('overflow-y', 'auto');

                        });

                        $(function() {
                            var scrollB = $(window).offset().top;

                            if (scrollB >= (alto)) { /* SCROLL +30PX */
                                
                                topBar.addClass("top-bar");
                            
                            } 
                        });

                        
                        indicador = 1;
                    }
                });
            });
            

            /* CERRAR NAV MOBILE AL HACER CLICK EN LINK DENTRO DE NAV MOBILE */
            $(".nav-section").click(function(){
                $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
                setTimeout(function(){
                    mobileNav.hide("slide", { direction: "right" }, 500);
                    $('body,html').css({
                        'overflow-y':'auto'
                    });
                });
                
                
                indicador = 1;
            });

        } else { /* MOSTRAR  ELEMENTOS MODO PC */
            setTimeout(function() {
                $("#logo").slideDown(300);
                $("#soy-nuevo").slideDown(300);
                $("#rrss").slideDown(300);
                $("#somos-flia").slideDown(1500);
            },100);
        };
    });

});

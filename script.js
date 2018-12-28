$(document).ready(function() {
	
	// $('.topmenu' ).click(function() {
	// $( this ).toggleClass( "topmenu_open", 1000 );
	// });

	$( ".topmenu" ).on( "click", function() {
    $( this ).toggleClass( "topmenu_open" );
    $( ".biotext" ).toggleClass( "biotext_open" );
    $( ".nametext" ).toggleClass( "nametext_open" );
    $( ".topmenu_icon" ).toggleClass( "topmenu_icon_open" );
    $( ".bottommenu_icon" ).toggleClass( "bottommenu_icon_open" );
    });

	$( "#button_b").on( "click", function() {
    $( ".buttonB" ).toggleClass( "buttonB buttonB_on");
    $( ".buttonA_on").toggleClass("buttonA_on buttonA");
    $( ".info" ).toggleClass( "info info_open" );
    $( ".projects").fadeOut();
    });

    $( "#button_a").on( "click", function() {
    $( ".buttonA").toggleClass("buttonA buttonA_on");
    $( ".buttonB_on" ).toggleClass( "buttonB_on buttonB");
    $( ".info_open" ).toggleClass( "info info_open" );
    $( ".projects").fadeIn();
    });

    $( "#button_e").on( "click", function() {
        $( ".project_open" ).toggleClass( "project_open project");
        $( ".projects").fadeTo("1000", 1.0);
    });

	$( ".image_hover" ).on( "click", function() {
        $( ".project" ).toggleClass( "project project_open");
        $( ".projects").fadeTo("1000", 0.0);
    });

	$( ".project_splash" ).mousemove(function(){
	$( this ).fadeOut();
	});

    idleTimer = null;
    idleState = false;
    idleWait = 2000;
        
    $( "body" ).bind('mousemove keydown scroll', function () {
    
        clearTimeout(idleTimer);
                
        if (idleState == true) { 
                     
        }
        
        idleState = false;
        
        idleTimer = setTimeout(function () { 
            
            // Idle Event
                document.getElementById("button_a").style.top = "20px";
                document.getElementById("button_b").style.top = "20px";
                document.getElementById("button_c").style.top = "20px";
                document.getElementById("button_d").style.top = "20px";

            idleState = true; }, idleWait);
    });
    

    $( ".topmenu").on( "mouseover", function() {
        document.getElementById("button_a").style.top = "55px";
        document.getElementById("button_b").style.top = "55px";
        document.getElementById("button_c").style.top = "55px";
        document.getElementById("button_d").style.top = "55px";
    });


    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
     var currentScrollPos = window.pageYOffset;
     if (prevScrollpos > currentScrollPos) {
        document.getElementById("button_a").style.top = "55px";
        document.getElementById("button_b").style.top = "55px";
        document.getElementById("button_c").style.top = "55px";
        document.getElementById("button_d").style.top = "55px";
     } else {
        document.getElementById("button_a").style.top = "20px";
        document.getElementById("button_b").style.top = "20px";
        document.getElementById("button_c").style.top = "20px";
        document.getElementById("button_d").style.top = "20px";
    }
    prevScrollpos = currentScrollPos;
    }


});


$(document).ready(function() {
	$( ".project_bottomClose" ).on( "click", function() {
    $( ".project_open" ).toggleClass( "project_open project");
    $( ".project_splash_open" ).toggleClass( "project_splash_open project_splash" );
    });
});
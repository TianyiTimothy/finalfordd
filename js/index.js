$(document).ready(function () {

    var index = 0;
    function print(word) {
        $("#text").text(word.substring(0, index++));
    }
    function cleanText(){
        
        clearInterval(welcomeHandler);
        // clear current text
        $("#text")
            .fadeOut(300, 
                // callback function: execute after hide(300)
                function () { $("#text").text(''); })
            .fadeIn(300);
        index=0;
    }

    var welcomeHandler = setInterval(() => {
        print("Hi, welcome to my site.                                         (click anywhere)")
    }, 50);

    // sorry for the mass, if i have time i will try to fix it using recursive function.
    $(window).click(function () {
        cleanText();
        // change click function
        $(window).unbind("click");
        
        (function (){
            setTimeout(
                function(){
                    welcomeHandler = setInterval(() => {
                        print("This is my magic cube.           Let's see how it works, shall we?");
                    }, 50);
                    $(window).click(function (){
                        cleanText();

                        // zoom the cube
                        $("#cube").css("animation","cubebackorigin 3s 1 ease forwards");


                    });
                }
                , 500);
            
        })();
    });

});
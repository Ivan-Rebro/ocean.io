(function() {

    logInfo("client init");

    assets();

    var game = Game({
        context: document.getElementById("game-screen").getContext("2d"),
        sockets: io()
    });

    logInfo("client loading success");

    document.onkeydown = function(event) {
        game.keyPress(event.keyCode, true);
        //logInfo("onkeydown keyCode: " + event.keyCode);
    };

    document.onkeyup = function(event) {
        game.keyPress(event.keyCode, false);
        //logInfo("onkeyup keyCode: " + event.keyCode);
    };

} ());

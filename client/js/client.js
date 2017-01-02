(function () {

    logInfo("client init");

    var game = Game({
        context: document.getElementById("game-screen").getContext("2d")
    });

    logInfo("client loading success");

    document.onkeydown = function(event) {
        game.keyPress(event.keyCode, true);
        logInfo("onkeydown keyCode: " + event.keyCode);
    };

    document.onkeyup = function(event) {
        game.keyPress(event.keyCode, false);
        logInfo("onkeyup keyCode: " + event.keyCode);
    };

} ());
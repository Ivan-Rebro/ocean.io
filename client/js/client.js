(function () {

    var game = Game({
        context: document.getElementById("game-screen").getContext("2d")
    });

    document.onkeydown = function(event) {
        game.keyPress(event.keyCode, true);
    };

    document.onkeyup = function(event) {
        game.keyPress(event.keyCode, false);
    };

} ());
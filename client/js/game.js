var Game = function (options) {

    logInfo("game init");

    var self = {
        context: options.context,
        scene: Scene({ context: options.context }),
        fps: 60
    };

    logInfo("game init success");

    self.keyPress = function(keyCode, isPressed) {
        alert(keyCode + ' ' + isPressed)
    };

    setInterval(function() {
        logInfo("start update");
        self.scene.update();
        self.scene.render();
        logInfo("game updated");
    }, self.fps);

    return self;
};

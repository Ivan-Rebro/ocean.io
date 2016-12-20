var Game = function (options) {

    var self = {
        context: options.context,
        scene: Scene({ context: options.context }),
        fps: 60
    };

    self.keyPress = function(keyCode, isPressed) {
        alert(keyCode + ' ' + isPressed)
    };

    setInterval(function() {
        self.scene.update();
        self.scene.render();
    }, self.fps);

    return self;
};

var Game = function(options) {

    logInfo('game start init');

    var self = {
        context: options.context,
        scene: Scene({
            context: options.context
        }),
        sockets: options.sockets,
        fps: 50
    };

    self.keyPress = function(keyCode, isPressed) {
        self.sockets.emit('input-event', {
                 keyCode: keyCode,
                 state: isPressed
             }
        );
    };

    setInterval(function() {
        self.scene.update();
        self.scene.render();
    }, self.fps);

    self.sockets.on('world-map', function(worldMap) {
        self.scene.setWorldMapToScene(worldMap);
    });

    logInfo('game init success');

    return self;
};

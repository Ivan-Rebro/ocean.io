/**
 * Игра - создание сцены,
 *        отправка события ввода сокетом,
 *        получение сокета с картой мира,
 *        отрисовка сцены
 * @param options
 * @returns {{context: *, scene: {context: *, layers: Array}, sockets: *, fps: number}}
 * @constructor
 */
var Game = function(options) {

    console.log('game init start');

    var self = {
        context: options.context,
        scene: Scene({
            context: options.context
        }),
        sockets: options.sockets,
        fps: 60
    };

    self.keyPress = function(keyCode, isPressed) {
        self.sockets.emit('input-event', {
                keyCode: keyCode,
                isPressed: isPressed
             }
        );
    };

    self.sockets.on('world-map', function(worldMap) {
        self.scene.setWorldMapToScene(worldMap);
    });

    setInterval(function() {
        self.scene.update();
        self.scene.render();
    }, self.fps);

    console.log('game init success');
    return self;
};

/**
 * Сцена
 * @param options
 * @returns {{context: *, layers: Array}}
 * @constructor
 */
var Scene = function (options) {

    var backgroundLayer = new BackgroundLayer({
        context: options.context
    });

    var actorsLayer = new ActorsLayer({
        context: options.context
    });

    var self = {
        context: options.context,
        layers:
            [
                backgroundLayer,
                actorsLayer
            ]
    };

    self.setWorldMapToScene = function(worldMap) {
        actorsLayer.setWorldMapActors(worldMap);
    };

    self.update = function() {
        self.layers.forEach(function(layer) {
            layer.update();
        });
    };

    self.render = function() {
        self.layers.forEach(function(layer) {
            layer.render();
        });
    };

    return self;
};

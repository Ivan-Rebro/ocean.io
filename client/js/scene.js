/**
 * Сцена
 * @param options
 * @returns {{context: *, layers: Array}}
 * @constructor
 */
var Scene = function (options) {
    var self = {
        context: options.context,
        layers:
            [
                new BackgroundLayer({
                    context: options.context
                }),
                new ActorsLayer({
                    context: options.context
                })
            ]
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

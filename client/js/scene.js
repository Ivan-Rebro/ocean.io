/**
 * Сцена
 * @param options
 * @returns {{context: *, layers: Array}}
 * @constructor
 */
var Scene = function (options) {
    var self = {
        context: options.context,
        layers: []
    };

    var backgroundLayer = BackgroundLayer({
            context: options.context
        });

    self.layers.push(backgroundLayer);

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

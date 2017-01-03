var ActorsLayer = function(options) {

    var self = {
        context: options.context,
        actors: []
    };

    self.setWorldMapActors = function(worldMap) {

        var actors = [];

        for(var i in worldMap) {

            var gameObject = worldMap[i];

            actors.push(new Actor({
                context: options.context,
                posX: gameObject.posX,
                posY: gameObject.posY,
                type: gameObject.type,
                isInvert: gameObject.isInvert
            }));
        }

        self.actors = actors;
    };

    self.update = function() {
        // TODO: убрать метод
    };

    self.render = function() {
        self.actors.forEach(function(actor) {
            actor.render();
        });
    };


    return self;
};

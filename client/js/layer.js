var Layer = function(options) {

    var self = {
        context: options.context,
        actors: []
    };

    self.addActor = function(newActor) {
        actors.push(newActor);
    };

    self.update = function() {
        self.actors.forEach(function(actor) {
            actor.update();
        });
    };

    self.render = function() {
        self.actors.forEach(function(actor) {
            actor.render();
        });
    };

    return self;
};

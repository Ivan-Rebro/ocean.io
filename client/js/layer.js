var Layer = function(options) {

    var self = {
        context: options.context,
        actors: [],
        val1: "val1111"
    };

    self.addActor = function(newActor) {
        self.actors.push(newActor);
    };

    self.update = function() {
        self.actors.forEach(function(actor) {
            actor.update();
        });
    };

    self.render = function() {
        alert('101: ' + self.actors.length);
        self.actors.forEach(function(actor) {
            actor.render();
        });
    };

    return self;
};

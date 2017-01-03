var ActorsLayer = function(options) {

    var self = {
        context: options.context
    };

    self.__proto__ = new Layer({
        context: options.context
    });

    var shark = new Actor({
        context: options.context,
        posX: 100,
        posY: 200,
        width: 200,
        height: 150,
        img: imgFromFile(assets.IMG_SPRITES_SHARK),
        imgX: 0,
        imgY: 0
    });

    self.actors.push(shark);

    self.setActors = function(data) {
        if (self.actors.length > 0) {
            self.actors[0].posX = data[0].x;
            self.actors[0].posY = data[0].y;
        }
    };

    return self;
};

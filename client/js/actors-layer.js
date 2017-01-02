var ActorsLayer = function(options) {

    var self = {
        context: options.context
    };

    self.__proto__ = new Layer({
        context: options.context
    });

    self.actors.push(new Actor({
        context: options.context,
        posX: 100,
        posY: 200,
        width: 250,
        height: 187,
        img: imgFromFile(assets.IMG_SPRITES_SHARK),
        imgX: 0,
        imgY: 0
    }));

    alert(self.actors.length);

    return self;
};

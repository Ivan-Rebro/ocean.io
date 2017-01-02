var Actor = function(options) {
    var self = {
        context: options.context,
        posX:    options.posX,
        posY:    options.posY,
        width:   options.width,
        height:  options.height,
        img:     options.img,
        imgX:    options.imgX,
        imgY:    options.imgY
    };

    self.render = function() {
        alert('123');
        self.context.drawImage(
            self.img,
            self.imgX,
            self.imgY,
            self.width,
            self.height,
            self.posX,
            self.posY,
            self.width,
            self.height
        );
    };

    return self;
};

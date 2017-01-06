var Actor = function(options) {
    var self = {
        context: options.context,
        posX: options.posX,
        posY: options.posY,
        type: options.type,
        isInvert: options.isInvert
    };

    self.render = function() {

        switch (self.type)
        {
            case 1:
                self.img = getImgFromFile(assets.IMG_SPRITES_FISH1);
                break;
            case 2:
                self.img = getImgFromFile(assets.IMG_SPRITES_FISH2);
                break;
            case 3:
                self.img = getImgFromFile(assets.IMG_SPRITES_FISH3);
                break;
            case 4:
                self.img = getImgFromFile(assets.IMG_SPRITES_FISH4);
                break;
            case 5:
                self.img = getImgFromFile(assets.IMG_SPRITES_FISH5);
                break;
            default:
                self.img = getImgFromFile(assets.IMG_SPRITES_SHARK);
                break;
        }

        if (self.isInvert) {
            self.imgX = width;
            self.imgY = 0;
        } else {
            self.imgX = 0;
            self.imgY = 0;
        }

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

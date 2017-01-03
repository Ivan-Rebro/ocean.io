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
                width = 52;
                height = 50;
                img = imgFromFile(assets.IMG_SPRITES_FISH1);
                break;
            case 2:
                width = 65;
                height = 50;
                img = imgFromFile(assets.IMG_SPRITES_FISH2);
                break;
            case 3:
                width = 70;
                height = 50;
                img = imgFromFile(assets.IMG_SPRITES_FISH3);
                break;
            case 4:
                width = 101;
                height = 50;
                img = imgFromFile(assets.IMG_SPRITES_FISH4);
                break;
            case 5:
                width = 78;
                height = 50;
                img = imgFromFile(assets.IMG_SPRITES_FISH5);
                break;
            default:
                width = 52;
                height = 50;
                img = imgFromFile(assets.IMG_SPRITES_SHARK);
                break;
        }

        if (self.isInvert) {
            imgX = width;
            imgY = 0;
        } else {
            imgX = 0;
            imgY = 0;
        }

        self.context.drawImage(
            img,
            imgX,
            imgY,
            width,
            height,
            self.posX,
            self.posY,
            width,
            height
        );
    };

    return self;
};

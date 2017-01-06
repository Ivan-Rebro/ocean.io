var gameObjects = {};

var utils;
var assets;

module.exports.init = function(utilsModule, assetsModule) {
    utils = utilsModule;
    assets = assetsModule;
};

function getGameObjectByID(uid) {
    return gameObjects[uid];
}

function addGameObject(uid) {
    newGameObject = GameObject(uid);
    newGameObject.setType();
    gameObjects[uid] = newGameObject;
}

function removeGameObject(uid) {
    delete gameObjects[uid];
}

function setCommandToGameObject(uid, command, status) {

    var gameObject = getGameObjectByID(uid);

    switch (command)
    {
        case 'left':
            gameObject.movingLeft = status;
            break;
        case 'right':
            gameObject.movingRight = status;
            break;
        case 'down':
            gameObject.movingDown = status;
            break;
        case 'up':
            gameObjects.movingUp = status;
            break;
        default:
            break;
    }
}

var GameObject = function(uid) {

    console.log('generate game object ' + uid);

    var self = {
        id: uid,
        posX: assets.WORLD_WIDTH * utils.getRandom(),
        posY: assets.WORLD_HEIGHT * utils.getRandom(),
        type: 0,
        width: 0,
        height: 0,
        isInvert: false,
        movingRight: false,
        movingLeft: false,
        movingUp: false,
        movingDown: false,
        spdX: 0,
        spdY: 0,
        accelX: 0,
        accelY: 0
    };

    self.setType = function() {

        self.type = utils.getRandInt(1, 5);

        switch (self.type)
        {
            case 1:
                self.width = 52;
                self.height = 50;
                break;
            case 2:
                self.width = 65;
                self.height = 50;
                break;
            case 3:
                self.width = 70;
                self.height = 50;
                break;
            case 4:
                self.width = 101;
                self.height = 50;
                break;
            case 5:
                self.width = 78;
                self.height = 50;
                break;
            default:
                self.width = 52;
                self.height = 50;
                break;
        }

        console.log('выбран тип ' + type);
    };

    self.updatePosition = function() {

        // TODO: переписать используя класс physics

        if (self.movingRight) {
            self.accelX = 0.1;
            self.isInvert = true;
        }

        if (self.movingLeft) {
            self.accelX = -0.1;
            self.isInvert = false;
        }

        if (self.movingUp) {
            self.accelY = -0.1;
        }

        if (self.movingDown) {
            self.accelY = 0.1;
        }

        self.accelResX = self.accelX + (- self.spdX * 0.1);
        self.accelResY = self.accelY + (- self.spdY * 0.1);

        if ((self.spdX > -5 && self.spdX < 5)
            || (self.spdX > -5 && self.accelResX < 0)
            || (self.spdX < 5 && self.accelResX > 0)) {
            self.spdX += self.accelResX;
        }

        if ((self.spdY > -5 && self.spdY < 5)
            || (self.spdY > -5 && self.accelResY < 0)
            || (self.spdY < 5 && self.accelResY > 0)) {
            self.spdY += self.accelResY;
        }

        if ((self.posX > 0 && self.posX < (1280 - 100 /*self.width*/))
            || (self.posX > 0 && self.spdX < 0)
            || (self.posX < (1280 - 100) && self.spdX < 0)) {
            self.posX += self.spdX;
        }

        if ((self.posY > 0 && self.posY < (720 - 50 /*self.height*/))
            || (self.posY > 0 && self.spdY < 0)
            || (self.posY < (720 - 50) && self.spdY < 0)) {
            self.posY += self.spdY;
        }
    };

    return self;
};

module.exports.getGameObjectByID = getGameObjectByID;
module.exports.addGameObject = addGameObject;
module.exports.removeGameObject = removeGameObject;
module.exports.setCommandToGameObject = setCommandToGameObject;
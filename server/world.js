console.log('world module require');

const WORLD_WIDTH = 1280;
const WORLD_HEIGHT = 720;

function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min)
    return Math.round(rand);
}

var players = {};

var Player = function(id) {

    console.log("generate player " + id);

    var type = randomInteger(1, 5);

    console.log(type);

    var self = {
        id: id,
        posX: WORLD_WIDTH * Math.random(),
        posY: WORLD_HEIGHT * Math.random(),
        type: type,
        isInvert: false,
        movingRight: false,
        movingLeft: false,
        movingUp: false,
        movingDown: false,
        spdX: 0,
        spdY: 0,
        accelX: 0,
        accelY: 0,
        accelResX: 0,
        accelResY: 0

    };

    self.updatePosition = function() {

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


module.exports.onConnect = function(uid) {
    players[uid] = Player(uid);
};

module.exports.onDisconnect = function(uid) {
    delete players[uid];
};

module.exports.onInputEvent = function(uid, data) {

    var player = players[uid];

    switch (data.keyCode)
    {
        case 65: // a
            player.movingLeft = data.state;
            console.log('a');
            break;
        case 68: // d
            player.movingRight = data.state;
            console.log('d');
            break;
        case 83: // s
            player.movingDown = data.state;
            console.log('s');
            break;
        case 87: // w
            player.movingUp = data.state;
            console.log('w');
            break;
        default:
            console.log('pressed keyCode: ' + data.keyCode);
            break;
    }
};

/**
 *
 * @returns {Array}
 */
module.exports.getWorldMap = function() {

    var worldMap = [];

    for(var i in players) {
        var player = players[i];
        player.updatePosition();
        worldMap.push({
            posX: player.posX,
            posY: player.posY,
            isInvert: player.isInvert,
            type: player.type
        });
    }

    return worldMap;
};

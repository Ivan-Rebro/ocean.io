console.log('world module require');

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
        posX: 500,
        posY: 50,
        type: type,
        isInvert: false,
        movingRight: false,
        movingLeft: false,
        movingUp: false,
        movingDown: false,
        spd: 5
    };

    self.updatePosition = function() {

        if (self.movingRight && self.posX < 1280) {
            self.posX += self.spd;
            self.isInvert = true;
        } else if (self.movingLeft && self.posX > 0) {
            self.posX -= self.spd;
            self.isInvert = false;
        }

        if (self.movingUp && self.posY > 0) {
            self.posY -= self.spd;
        } else if (self.movingDown && self.posY < 720) {
            self.posY += self.spd;
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

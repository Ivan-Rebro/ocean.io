console.log('world module require');

var physics;
var input;
var gameObjects;
var utils;
var assets;

module.exports.init = function(
    inputModule,
    physicsModule,
    gameObjectsModule,
    utilsModule,
    assetsModule) {
    input = inputModule;
    physics = physicsModule;
    gameObjects = gameObjectsModule;
    utils = utilsModule;
    assets = assetsModule;

    gameObjects.init(utils, assets);
};

module.exports.onConnect = function(uid) {
    gameObjects.addGameObject(uid);
};

module.exports.onDisconnect = function(uid) {
    gameObjects.removeGameObject(uid);
};

module.exports.onInputEvent = function(uid, data) {
    var command = input.getCommandByKeyboard(data.keyCode);
    gameObjects.setCommandToGameObject(uid, command, data.status);
};

module.exports.getWorldMap = function() {

    // TODO: переписать
    var worldMap = [];

    for(var i in gameObjects) {
        var player = players[i];
        player.updatePosition();
        worldMap.push({
            posX: player.posX,
            posY: player.posY,
            isInvert: player.isInvert,
            width: player.width,
            height: player.height,
            type: player.type
        });
    }

    return worldMap;
};

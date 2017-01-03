console.log('socket-server module require');

var socketsClients = {};

/**
 *
 * @param localhostPort
 * @param appPath
 * @param clientFolderName
 * @param indexFileName
 * @returns {*}
 */
module.exports.serv = function(localhostPort, appPath,  clientFolderName, indexFileName) {

    var express = require('express');
    var app = express();
    var serv = require('http').Server(app);

    app.get('/', function(req, res) {
        res.sendFile(appPath + '/' + clientFolderName + '/' + indexFileName);
    });

    app.use('/' + clientFolderName, express.static(appPath + '/' + clientFolderName));
    serv.listen(process.env.PORT || localhostPort);


    console.log('local socket server started on http://localhost:' + localhostPort);
    return serv;
};

/**
 *
 * @param serv
 * @param onConnect
 * @param onDisconnect
 * @param onInputEvent
 */
module.exports.io = function(serv, onConnect, onDisconnect, onInputEvent) {

    var io = require('socket.io') (serv, {});

    io.sockets.on('connection', function(socket) {

        var uid = Math.random().toString(36).substr(2, 16);

        socket.id = uid;
        socketsClients[uid] = socket;

        onConnect(uid);

        socket.on('disconnect', function() {
            delete socketsClients[socket.id];
            onDisconnect(socket.id);

            console.log('socket disconnect id = ' + socket.id);
        });

        socket.on('input-event', function(data) {
            onInputEvent(socket.id, data);
            console.log("socket input-event");
        });

        console.log('new socket connection id = ' + uid);
    });

    console.log('socket server init io success');
};

/**
 *
 * @param worldMap
 */
module.exports.sendWorldMap = function(worldMap) {
    for(var i in socketsClients) {
        socketsClients[i].emit('world-map', worldMap);
    }
};
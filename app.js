console.log("ocean.io app lauching");

var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));

serv.listen(process.env.PORT || 2000);

console.log("ocean.io game server started http://localhost:2000");

var SOCKET_LIST = {};
var PLAYER_LIST = {};
var dt = 1000 / 25;

var Player = function(id) {

    console.log("create player " + id);

    var self = {
        id: id,
        x: 500,
        y: 250,
        isInvert: false,
        movingRight: false,
        movingLeft: false,
        movingUp: false,
        movingDown: false,
        spd: 10
    };

    self.updatePosition = function(){
        if(self.movingRight) {
            self.x += self.spd;
            self.isInvert = true;
        }
        if(self.movingLeft) {
            self.x -= self.spd;
            self.isInvert = false;
        }
        if(self.movingUp) {
            self.y -= self.spd;
        }
        if(self.movingDown) {
            self.y += self.spd;
        }
    };

    return self;
};

console.log("123");

var io = require('socket.io') (serv,{});

io.sockets.on('connection', function(socket){
    socket.id = Math.random();
    SOCKET_LIST[socket.id] = socket;

    var player = Player(socket.id);
    PLAYER_LIST[socket.id] = player;

    socket.on('disconnect',function(){
        delete SOCKET_LIST[socket.id];
        delete PLAYER_LIST[socket.id];
    });

    socket.on('keyEvent', function(data) {

        console.log("key");

        // switch (data.inputId) {
        //     case 'left':
        //         player.movingLeft = data.state;
        //         break;
        //     case 'right':
        //         player.movingRight = data.state;
        //         break;
        //     case 'up':
        //         player.movingUp = data.state;
        //         break;
        //     case 'down':
        //         player.movingDown = data.state;
        //         break;
        // }
    });
});

setInterval(function() {

    var pack = [];

    for(var i in PLAYER_LIST) {
        var player = PLAYER_LIST[i];
        player.updatePosition();
        pack.push({
            x: player.x,
            y: player.y,
            isInvert: player.isInvert
        });
    }

    for(var i in SOCKET_LIST) {
        var socket = SOCKET_LIST[i];
        socket.emit('newPositions',pack);
    }

}, dt);

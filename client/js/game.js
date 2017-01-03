var Game = function(options) {

    logInfo("game init");

    var self = {
        context: options.context,
        scene: Scene({ context: options.context }),
        sockets: options.sockets,
        fps: 60
    };

    logInfo("game init success");

    self.keyPress = function(keyCode, isPressed) {
        //alert(keyCode + ' ' + isPressed);

        // keyId = "";
        //
        // switch (keyCode)
        // {
        //     case 65: // a
        //         keyId = "left";
        //         break;
        //     case 68: // d
        //         keyId = "right";
        //         break;
        //     case 83: // s
        //         keyId = "down";
        //         break;
        //     case 87: // w
        //         keyId = "up";
        //         break;
        // }

        alert(keyCode + " " + isPressed);

        self.sockets.emit(
             'keyEvent',
             {
                 keyCode: keyCode,
                 state: isPressed
             }
        );

        alert("ok");
    };

    setInterval(function() {
        logInfo("start update");
        self.scene.update();
        self.scene.render();
        logInfo("game updated");
    }, self.fps);

    self.sockets.on('newPositions', function(data) {
        //for(var i = 0 ; i < data.length; i++) {
            self.scene.setActorsData(data);
        //}
    });

    return self;
};

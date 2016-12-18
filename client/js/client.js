(function() {

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];

    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
            || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(function () {

    var img = new Image();
    img.src = 'client/images/shark.png';

    var screen = document.getElementById("game-screen");
    var screenCtx = screen.getContext("2d");

    var shark = sprite({
        context: screenCtx,
        width: 250,
        height: 187,
        image: img
    });

    function sprite (options) {

        var that = {};

        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;

        that.render = function (x, y, isInvert) {

            var posX = 0;
            var posY = 0;

            if (isInvert === true) {
                posX = 250;
            } else {
                posX = 0;
            }

            // Draw the animation
            that.context.drawImage(
                that.image,
                posX,
                posY,
                that.width,
                that.height,
                x,
                y,
                that.width,
                that.height);
        };

        return that;
    }

    var socket = io();

    socket.on('newPositions',function(data) {
        // draw game objects
        screenCtx.clearRect(0, 0, screen.width, screen.height);

        for(var i = 0 ; i < data.length; i++) {
            shark.render(data[i].x, data[i].y, data[i].isInvert);
        }
    });

    document.onkeydown = function(event) {
        sendKeyPressSocket(event.keyCode, true);
    };

    document.onkeyup = function(event) {
        sendKeyPressSocket(event.keyCode, false);
    };

    function sendKeyPressSocket(keyCode, keyState) {

        switch (keyCode)
        {
            case 65: // a
                keyId = 'left';
                break;
            case 68: // d
                keyId = 'right';
                break;
            case 83: // s
                keyId = 'down';
                break;
            case 87: // w
                keyId = 'up';
                break;
        }

        socket.emit('keyPress', { inputId: keyId, state: keyState });
    }

} ());
var BackgroundLayer = function (options) {
    var img = new Image();
    img.src = 'client/images/background.jpg';

    var bubbles = [];

    var self = {
        context: options.context,
    };

    for (var i = 0; i < 40; i++) {
        createBubble();
    }

    self.update = function() {
        bubbles.forEach(function(bubble) {

            if (bubble[1] < 0) {
                bubble[0] = getRandom(0, 1280);
                bubble[1] = 720;
            }

            bubble[1] -= bubble[2];
        });
    };

    self.render = function() {
        self.context.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            0,
            0,
            img.width,
            img.height
        );

        bubbles.forEach(function(bubble) {
            drawBubble(bubble[0], bubble[1], bubble[2]);
        });
    };

    function drawBubble(centerX, centerY, radius) {
        self.context.beginPath();
        self.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        self.context.fillStyle = 'aqua';
        self.context.fill();
        self.context.lineWidth = 1;
        self.context.strokeStyle = 'white';
        self.context.stroke();
    }

    function createBubble() {
        bubbles.push([getRandom(0, 1280), getRandom(0, 720), getRandom(3, 7)]);
    }

    // возвращает случайное число [min; max)
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    return self;
};

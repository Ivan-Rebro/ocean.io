var BackgroundLayer = function(options) {

    var self = {
        context: options.context,
        backImg: imgFromFile(assets.IMG_BACKGROUND),
        bubbles: []
    };

    function createBubble() {
        self.bubbles.push({
            posX: getRandom(0, 1280),
            posY: getRandom(0, 720),
            radius: getRandom(3, 7)
        });
    }

    function updateBubble(bubble) {
        if (bubble.posY < 0) {
            bubble.posX = getRandom(0, 1280);
            bubble.posY = 720;
        } else {
            bubble.posY -= bubble.radius;
        }
    }

    function drawBubble(bubble) {
        self.context.beginPath();
        self.context.arc(bubble.posX, bubble.posY, bubble.radius,
            0, 2 * Math.PI, false);
        self.context.fillStyle = "rgba(255, 255, 255, 0.3)";
        self.context.fill();
        self.context.lineWidth = 1;
        self.context.strokeStyle = "rgba(255, 255, 255, 0.3)";
        self.context.stroke();
    }

    for (var i = 0; i < assets.PAR_BUBBLES_COUNT; i++) {
        createBubble();
    }

    self.update = function() {
        self.bubbles.forEach(updateBubble);
    };

    self.render = function() {
        self.context.drawImage(
            self.backImg,
            0, 0, self.backImg.width, self.backImg.height,
            0, 0, self.backImg.width, self.backImg.height
        );

        self.bubbles.forEach(drawBubble);
    };

    return self;
};

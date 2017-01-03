function assets() {

    const IMAGES_PATH = "client/images/";
    const IMAGES_SPRITES_PATH = IMAGES_PATH + "sprites/";

    function settings() {
        assets.PAR_BUBBLES_COUNT = 50;
    }

    function images() {
        assets.IMG_BACKGROUND = IMAGES_PATH + "background.jpg";
        assets.IMG_SPRITES_SHARK = IMAGES_SPRITES_PATH + "shark.png";
    }

    settings();
    images();
}
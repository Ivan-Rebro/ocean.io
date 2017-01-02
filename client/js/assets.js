function assets() {

    const IMAGES_PATH = "client/images/";

    function settings() {
        assets.PAR_BUBBLES_COUNT = 50;
    }

    function images() {
        assets.IMG_BACKGROUND = IMAGES_PATH + "background.jpg";
        assets.IMG_SPRITES_SHARK = IMAGES_PATH + "shark.png";
    }

    settings();
    images();
}
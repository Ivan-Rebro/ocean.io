/**
 * Определения ресурсов игры
 */
function assets() {

    const IMAGES_PATH = 'client/images/';
    const IMAGES_SPRITES_PATH = IMAGES_PATH + 'sprites/';

    /**
     * Определения настроек
     */
    function settings() {
        assets.PAR_BUBBLES_COUNT = 50;
        assets.PAR_BUBBLES_MIN_RADIUS = 2;
        assets.PAR_BUBBLES_MAX_RADIUS = 7;
    }

    /**
     * Определения изображений
     */
    function images() {
        assets.IMG_BACKGROUND = IMAGES_PATH + 'background.jpg';

        assets.IMG_SPRITES_SHARK = IMAGES_SPRITES_PATH + 'shark.png';

        assets.IMG_SPRITES_FISH1 = IMAGES_SPRITES_PATH + 'fish1.png';
        assets.IMG_SPRITES_FISH2 = IMAGES_SPRITES_PATH + 'fish2.png';
        assets.IMG_SPRITES_FISH3 = IMAGES_SPRITES_PATH + 'fish3.png';
        assets.IMG_SPRITES_FISH4 = IMAGES_SPRITES_PATH + 'fish4.png';
        assets.IMG_SPRITES_FISH5 = IMAGES_SPRITES_PATH + 'fish5.png';
    }

    settings();
    images();
}

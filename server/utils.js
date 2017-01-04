/**
 * возвращает случайное дробное число [min; max)
 * @param min
 * @param max
 * @returns {*}
 */
function getRandNum(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * возвращает случайное целочисленное число [min; max)
 * @param min
 * @param max
 * @returns {*}
 */
function getRandInt(min, max) {
    return Math.round(getRandNum(min, max));
}

function imgFromFile(src) {
    var img = new Image();
    img.src = src;
    return img;
}

function getNowDateTime() {
    // TODO: не работает через format("...") ???

    function addZero(num) {
        if (num < 10) {
            num = "0" + num;
        }

        return num;
    }

    function getTime(now) {
        var ss = addZero(now.getSeconds());
        var mm = addZero(now.getMinutes());
        var hh = addZero(now.getHours());

        return hh + ":" + mm + ":" + ss;
    }

    function getDate(now) {
        var dd = addZero(now.getDate());
        var mm = addZero(now.getMonth() + 1); // начинает с нуля
        var yyyy = now.getFullYear();

        return dd + ":" + mm + ":" + yyyy;
    }

    var now = new Date();

    return getDate(now) + " " + getTime(now);
}

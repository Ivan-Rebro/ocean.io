/**
 * Форматирование строки
 * @type {String.f}
 */
String.prototype.format = String.prototype.f = function() {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function(m, n) {
        return args[n] ? args[n] : m;
    });
};

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

/**
 * Загрузка изображения из файла
 * @param src
 * @returns {*}
 */
function getImgFromFile(src) {
    var img = new Image;
    img.src = src;
    return img;
}

/**
 * Сделать число двухзначным
 * @param num
 * @returns {*}
 */
function addZero(num) {
    if (num < 10) {
        num = '0' + num;
    }

    return num;
}

/**
 * Получить текущее время
 * @returns {string}
 */
function getNowTime() {
    var now = new Date;
    var ss = addZero(now.getSeconds());
    var mm = addZero(now.getMinutes());
    var hh = addZero(now.getHours());

    return hh + ':' + mm + ':' + ss;
}

/**
 * Получить текущую дату
 * @returns {string}
 */
function getNowDate() {
    var now = new Date;
    var dd = addZero(now.getDate());
    var mm = addZero(now.getMonth() + 1); // начинает с нуля
    var yyyy = now.getFullYear();

    return dd + ':' + mm + ':' + yyyy;
}

/**
 * Получить текущие дату и время
 * @returns {string}
 */
function getNowDateTime() {
    return getNowDate() + ' ' + getNowTime();
}

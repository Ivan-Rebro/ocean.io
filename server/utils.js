/**
 * возвращает случайное положительное число
 * @returns {number}
 */
module.exports.getRandom = function() {
    return Math.random();
};

/**
 * возвращает случайное дробное число [min; max)
 * @param min
 * @param max
 * @returns {*}
 */
module.exports.getRandNum = function(min, max) {
    return Math.random() * (max - min) + min;
};

/**
 * возвращает случайное целочисленное число [min; max)
 * @param min
 * @param max
 * @returns {*}
 */
module.exports.getRandInt = function(min, max) {
    return Math.round(getRandNum(min, max));
};

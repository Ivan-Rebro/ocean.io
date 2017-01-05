/**
 * Коэффициент сопротивления среды
 * @type {number}
 */
const K = 0.1;

/**
 * Вычисляет массу игрового объекта
 * m = p * V = p * d * S
 * m = width * height <-- приблизительно
 * @param width
 * @param height
 * @returns {number}
 */
function getObjectWeight(width, height) {
    return width * height;
}

/**
 * Сопротивление среды,
 * зависит от текущей скорости тела
 * @param vel
 * @returns {number}
 */
function getResistance(vel) {
    return K * vel;
}

/**
 * Ускорение тела, за счет приложенной к нему силе
 * a = F / m
 * @param power
 * @param width
 * @param height
 * @returns {number}
 */
function getPowerAccel(power, width, height) {
    var weight = getObjectWeight(width, height);
    return power / weight;
};

/**
 * Сила действующая на объект при движении
 * @type {number}
 */
module.exports.Power = 10;

/**
 * Ускорение тела, к которому приложена сила,
 * и движущегося в среде с сопротивлением
 * @param curAccel
 * @param power
 * @param width
 * @param height
 * @param curVel
 * @returns {number}
 */
module.exports.getResultPowerAccel = function(curAccel, power, width, height, curVel) {
    var powerAccel = getPowerAccel(power, width, height);
    var resistance = getResistance(curVel);
    return curAccel + powerAccel - resistance;
};

/**
 * Вычисляет изменение скорости объекта
 * @param curAccel
 * @param curVel
 * @returns {*}
 */
module.exports.getResultVelocity = function(curAccel, curVel) {
    return curVel + curAccel;
};

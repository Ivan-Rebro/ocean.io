/**
 * Определение комманды по нажалой клавише на клавиатуре
 * @param keyCode
 * @returns {string|string|string|string|string|string|*}
 */
module.exports.getCommandByKeyboard = function(keyCode) {
    switch (keyCode)
    {
        case 27:
            command = 'escape';
            console.log('key esc');
            break;
        case 32:
            command = 'space';
            console.log('key space');
            break;
        case 37:
            command = 'left';
            console.log('key left');
            break;
        case 38:
            command = 'up';
            console.log('key up');
            break;
        case 39:
            command = 'right';
            console.log('key right');
            break;
        case 40:
            command = 'down';
            console.log('key down');
            break;
        case 65:
            command = 'left';
            console.log('key a');
            break;
        case 68:
            command = 'right';
            console.log('key d');
            break;
        case 83:
            command = 'down';
            console.log('key s');
            break;
        case 87:
            command = 'up';
            console.log('key w');
            break;
        default:
            command = 'unknown';
            console.log('pressed keyCode: ' + keyCode);
            break;
    }

    return command;
};
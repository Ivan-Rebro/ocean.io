/**
 * Клиент игры - создание экземпляра игры,
 *               подключение сокетов,
 *               обработка событий ввода
 */

console.log('client start loading');

assets();

var gameScreen = document.getElementById('game-screen');

var game = Game({
    context: gameScreen.getContext('2d'),
    sockets: io()
});

document.onkeydown = function(event) {
    game.keyPress(event.keyCode, true);
    console.log('key-down code: ' + event.keyCode);
};

document.onkeyup = function(event) {
    game.keyPress(event.keyCode, false);
    console.log('key-up code: ' + event.keyCode);
};

console.log('client loading success');

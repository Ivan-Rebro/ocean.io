console.log('application ocean.io start lauching');

/**
 * Номер порта локального сервера
 * @type {number}
 */
const LOCALHOST_PORT = 2000;

/**
 * Путь к директории приложения
 * @type {string}
 */
const APP_PATH = __dirname;

/**
 * Название директории с клиентской частью
 * @type {string}
 */
const CLIENT_FOLDER_NAME = 'client';

/**
 * Название директории с серверной частью
 * @type {string}
 */
const SERVER_FOLDER_NAME = 'server';

/**
 * Индексный файл
 * @type {string}
 */
const INDEX_FILENAME = 'index.html';

/**
 * Частота кадров
 * @type {number}
 */
const FPS = 50;

/**
 * Интервал между обновлениями клиента
 * @type {number}
 */
const UPDATE_INTERVAL = 1000 / FPS;

console.log('LOCALHOST_PORT: ' + LOCALHOST_PORT);
console.log('APP_PATH: ' + APP_PATH);
console.log('CLIENT_FOLDER_NAME: ' + CLIENT_FOLDER_NAME);
console.log('SERVER_FOLDER_NAME: ' + SERVER_FOLDER_NAME);
console.log('INDEX_FILENAME: ' + INDEX_FILENAME);
console.log('FPS: ' + FPS);
console.log('UPDATE_INTERVAL: ' + UPDATE_INTERVAL);

var servModule = require(APP_PATH + '/' + SERVER_FOLDER_NAME + '/socket-server');
var worldModule = require(APP_PATH + '/' + SERVER_FOLDER_NAME + '/world');
var physicsModule = require(APP_PATH + '/' + SERVER_FOLDER_NAME + '/physics');
var inputModule = require(APP_PATH + '/' + SERVER_FOLDER_NAME + '/input');

var serv = servModule.serv(LOCALHOST_PORT, APP_PATH, CLIENT_FOLDER_NAME, INDEX_FILENAME);
servModule.io(serv, worldModule.onConnect, worldModule.onDisconnect, worldModule.onInputEvent);

setInterval(function() {
    var worldMap = worldModule.getWorldMap();
    servModule.sendWorldMap(worldMap);
}, UPDATE_INTERVAL);

console.log('lauching success');
const sendCommand = require('../sonos.sendCommand.js');

module.exports = function getMuted(params){
    return sendCommand('getMuted', params, []);
};
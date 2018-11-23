const sendCommand = require('../sonos.sendCommand.js');

module.exports = function getVolume(params){
    return sendCommand('getVolume', params, []);
};
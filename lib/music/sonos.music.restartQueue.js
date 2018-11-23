const sendCommand = require('../sonos.sendCommand.js');

module.exports = function restartQueue(params){
    return sendCommand('selectTrack', params, [1]);
};
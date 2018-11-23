const sendCommand = require('../sonos.sendCommand.js');

module.exports = function restartTrack(params){
    return sendCommand('seek', params, [0]);
};
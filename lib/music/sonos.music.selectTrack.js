const sendCommand = require('../sonos.sendCommand.js');

module.exports = function selectTrack(params){
    return sendCommand('selectTrack', params, [params.trackNumber]);
};
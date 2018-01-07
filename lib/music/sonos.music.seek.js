const sendCommand = require('../sonos.sendCommand.js');

module.exports = function seek(params){
    return sendCommand('seek', params, [params.seconds]);
};
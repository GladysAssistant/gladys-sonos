const sendCommand = require('../sonos.sendCommand.js');

module.exports = function queue(params){
    var paramsArray = [params.uri];
	if (params.positionInQueue) {
		paramsArray.push(params.positionInQueue);
	}

    return sendCommand('queue', params, paramsArray);
};
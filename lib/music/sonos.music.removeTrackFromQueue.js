const sendCommand = require('../sonos.sendCommand.js');

module.exports = function removeTrackFromQueue(params){
	var endpoint = '/MediaRenderer/AVTransport/Control';
	var action = 'urn:schemas-upnp-org:service:AVTransport:1#RemoveTrackFromQueue';
	var body = '<u:RemoveTrackFromQueue xmlns:u="urn:schemas-upnp-org:service:AVTransport:1"><InstanceID>0</InstanceID><ObjectID>Q:0/' + params.trackNumber + '</ObjectID></u:RemoveTrackFromQueue>';
	var responseTag = 'u:RemoveTrackFromQueueResponse';
	
	var paramsArray = [endpoint, action, body, responseTag];

    return sendCommand('request', params, paramsArray);
};
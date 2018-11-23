const sendCommand = require('../sonos.sendCommand.js');

module.exports = function playTuneinRadio(params){
    var paramsArray = [];

    if(!params.hasOwnProperty('stationId')) return Promise.reject(new Error('sonos.playTuneinRadio() : params "stationId" is required.'));
    if(!params.hasOwnProperty('stationTitle')) return Promise.reject(new Error('sonos.playTuneinRadio() : params "stationTitle" is required.'));
    
    // plays a TuneIn station (queue isn't used)
    if(params.stationId) paramsArray.push(params.stationId);
    if(params.stationTitle) paramsArray.push(params.stationTitle);

    return sendCommand('playTuneinRadio', params, paramsArray);
};
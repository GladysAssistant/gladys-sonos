Gladys Sonos
=======================

This module allows you to control your Sonos speakers in Gladys.

### Installation

To install this module :

- Install the module in Gladys 
- Reboot Gladys 
- Go on the dashboard on `Module` view, then in the module list press the `config` button on the sonos module.
- Your Sonos speakers should appear in the device list


### Usage

You can use this module in Gladys directly using the music API.

#### playTuneinRadio

To play music from the Radio, you can use this function: 

```javascript
gladys.modules.sonos.music.playTuneinRadio({
    deviceType: {
        device: YOUR_SONOS_DEVICE_ID
    },
    stationId: 50776,
    stationTitle: 'NRJ'
});
```

You can replace stationId with the stationId you want to listen.
To find the stationId, see help here => [https://help.tunein.com/customer/en/portal/articles/2232669-what-is-my-station-or-program-id-](https://help.tunein.com/customer/en/portal/articles/2232669-what-is-my-station-or-program-id-)

The stationTitle is the name of the radio.
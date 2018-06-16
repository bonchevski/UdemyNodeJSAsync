const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyCtvsVQ6oVRgv4wmB8i5kiWW7dGZSBFKbs',
    json: true,

}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`latitude: ${body.results[0].geometry.location.lat}`);
    
    console.log(`longtitude: ${body.results[0].geometry.location.lng}`);
});
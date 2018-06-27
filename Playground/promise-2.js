const request = require('request');


const geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);

        request(
          {
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCtvsVQ6oVRgv4wmB8i5kiWW7dGZSBFKbs`,
            json: true
          },
          (error, response, body) => {
            if (error) {
              reject('Unable to connect to Google servers');
            } else if (body.status === 'ZERO_RESULTS') {
              reject('Unable to find that address');
            } else if (body.status === "OK") {
              resolve({
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longtitude: body.results[0].geometry.location.lng
              });
            }
          }
        );
    });
}

geocodeAddress('0053125932185913200').then((location) => {
    console.log(JSON.stringify(location, undefined , 2));
}, (errorMessage) => {
    console.log(errorMessage);
});
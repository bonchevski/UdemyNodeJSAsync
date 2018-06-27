const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/7b18d75b31dea8798e13e131c29c1d69/${lat},${lng}`,
        json: true,
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to the forecast.io server.');
        }
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports.getWeather = getWeather;


const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longtitude, (errorMessage, weatherResults) => {
      if(errorMessage){
        console.log(errorMessage);
      } else{
        console.log(`It's currently  ${weatherResults.temperature}.  It feels like ${weatherResults.apparentTemperature}.`)
      }
  });
  }
});


//7b18d75b31dea8798e13e131c29c1d69


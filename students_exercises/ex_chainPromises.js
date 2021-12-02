/*
    Get sunrise/sunset information of a city with the following 2 apis by chaining promises.
    First get the coordinates of the city with mapquest api and then use them with sunrise-sunset api.
*/

const axios = require("axios");
const API_KEY = 'AslyL2n4doXKGqMoYaDpQvPNo4x9TwaC';
const MAPQUEST_URL = `https://www.mapquestapi.com/geocoding/v1/address?key=${API_KEY}`;
const SS_API = 'https://api.sunrise-sunset.org/json?';

const cityName = process.argv[2] || 'Trento';
const cityMapUrl = `${MAPQUEST_URL}&location=${cityName}`;

console.log(`Sunrise/sunset in: ${cityName}`);

//implement your solution here

/*
  - call mapquestapi and get the response object
  - get the coordinates from the response object (the needed information is results[0].locations[0].latLng)
  - call sunset api with the coordinates from mapquest api
  - get the final information and print it on the console
*/


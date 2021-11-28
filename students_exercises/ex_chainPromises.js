/*
    Get sunrise/sunset information of a city with the following 2 apis by chaining promises.
    First get the coordinates of the city with mapquest api and then use them with sunrise-sunset api.

    Hint:   fetch(<api_url>) returns a promise which resolves a response object. 
            response.json() returns a promise which resolves the json content of the response object.
*/

const fetch = require('node-fetch');
const API_KEY = 'AslyL2n4doXKGqMoYaDpQvPNo4x9TwaC';
const MAPQUEST_URL = `https://www.mapquestapi.com/geocoding/v1/address?key=${API_KEY}`;
const SS_API = 'https://api.sunrise-sunset.org/json?';

const cityName = process.argv[2] || 'Trento';
const cityMapUrl = `${MAPQUEST_URL}&location=${cityName}`;

console.log(`Sunrise/sunset in: ${cityName}`);

//write your solution here

/*
  - call mapquestapi and get the response object
  - call json() to get the coordinates from the response object (the needed information is results[0].locations[0].latLng)
  - call sunset api with the coordinates from mapquest api
  - call json() to get the final information and print it on the console
*/


/*
    Use Promise.all to retrieve in parallel the data of the scottish parliament using the following 3 apis. 
    Return the first 3 results of each api.
    
    Note:   fetch(<api_url>) returns a promise which resolves a response object. 
            response.json() returns a promise which resolves the json content of the response object.

    Hint: chain 2 Promise.all 
*/

const fetch = require("node-fetch")

let members = "https://data.parliament.scot/api/members";
let parties = "https://data.parliament.scot/api/parties";
let websites = "https://data.parliament.scot/api/websites";



//write your solution here


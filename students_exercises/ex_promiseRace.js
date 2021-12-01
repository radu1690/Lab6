const axios = require("axios");

let AAPL_iex = "https://cloud.iexapis.com/stable/tops?token=sk_39e2cb3e32164d37a803f076854623e0&symbols=aapl";
let AAPL_alpha = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=ULXJO68TUQ6OBQ4E";

//write your solution here
// Hint: The two APIs will return different json (paste the urls in your browser to find out what they return). 
// Use Promise chaining (.then(...)) on each promise and extract
// the price before you put it in Promise.race. 

// Step 1: Query the price from iex exchange and use promise chaining to extract the price

// Step 2: Query the price from Alpha Vantage exchange and use promise chaining to extract the price.
// Multiple prices are given. Use the most recent one (first element in the time series) => Object.keys(...)[0], and then element "4. close"

// Step 3: use Promise.race to log the price (whichever arrives first) to the console


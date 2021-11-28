//traditional function
function increment(input){
    return input+1;
}

//or

var increment = function(input){
    return input+1;
}

//step by step decomposition of functions

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
var increment = (input) => {
    return input + 1;
}

// 2. Remove the body braces and word "return" -- the return is implied.
var increment = (input) => input+1;

// 3. Remove the argument parentheses
var increment = input => input+1;


// Note 1: parenthesis are required if there are multiple arguments or no arguments
var sum = (a, b) => a+b;
var useless = () => 1;

// Note 2: if the body requires additional lines of processing, you'll need to re-introduce braces PLUS the "return" 
var sum = (a, b) =>{
    let c = 5;
    return a+b+c;
}


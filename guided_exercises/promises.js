function func1(input){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            console.log("waited for 1 second");
            input = input + 1 ; 
            //reject("Something went wrong!")
            resolve(input);
    }, 1000);
    })
}
function func2(input){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            console.log("waited for 2 seconds");
            input = input + 2;
            //reject("Something went wrong!");
            resolve(input);
    }, 2000);
    })
}

function func3(input){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            console.log("waited for 3 seconds");
            input = input + 3;
            //reject("Something went wrong!");
            resolve(input);
    }, 3000);
    })
}

/* //one promise
func1(0)
.then(result => console.log(result))
.catch(error => console.log(error))
.finally(() => console.log("Ended"))  //optional */



/* //chaining promises
func1(0)
.then(result => func2(result))
.then(result => func3(result))
.then(result => console.log(result))
.catch(error => console.log(error))
.finally(() => console.log("Ended")); //optional */




/* //the above is equivalent to:

func1(0)
    .then(func2)
    .then(func3)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log("Ended")); //optional */



/* //Promise and api example
const fetch = require ('node-fetch');
const url = 'http://api.icndb.com/jokes/random';

fetch(url)
    .then(res => res.json())
    .then(json => console.log(json.value.joke))
    .catch(err => console.error(err))
    .finally(() => console.log("\nDone!")); */



/* //Promise.all example
Promise.all([func1(0), func2(0), func3(0)])
    .then(values => console.log(values))
    .catch((error) => console.log(error)); */


/* // AllSettled example
Promise.allSettled([func1(0), func2(0), func3(0)])
    .then(values => console.log(values))
    .catch((error) => console.log(error)); */


/* // Any example
Promise.any([func1(0), func2(0), func3(0)])
    .then(values => console.log(values))
    .catch((error) => console.log(error)); */


/* // Race example
Promise.race([func1(0), func2(0), func3(0)])
    .then(values => console.log(values))
    .catch((error) => console.log(error)); */
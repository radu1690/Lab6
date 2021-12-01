function findMostBeautifulCityByCoutryCode(countryCode, onSuccess, onFailure){
    console.log(`City Researcher: I am starting to look for the most beautfil city in ${countryCode}`)

    // Pretend that calculating the most beutiful city takes a long time 
    setTimeout(() => {
        capitals = {
            "IT": "Trento",
            "DE": "Hamburg",
            "US": "San Francisco"
        }

        if (!(countryCode in capitals)) {
            onFailure(`Country code ${countryCode} is unknown`);
        }else{
            mostBeautifulCity = capitals[countryCode];

            console.log(`City Researcher: I found it! It is ${mostBeautifulCity}. I will notify the callback now.`)
            onSuccess(mostBeautifulCity);
        }

    }, 4000);
}

function announceMostBeautifulCity(city){
    console.log(`The most beautiful city is ${city}`);
}


console.log("Example started: Using Callbacks")

//named function for onSuccess
//lambda function for onFailure
findMostBeautifulCityByCoutryCode("IT", announceMostBeautifulCity, (errorMessage) => console.log(errorMessage));

console.log("Program is doing something else...");
setTimeout(() => console.log('Program did in bg some other task that took 2 seconds'), 2000);



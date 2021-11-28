function example(number, callback){
    console.log("Function "+number+" started")

    setTimeout(() => {
        callback(number);
    }, 1000);
}

function hello(input){
    console.log("Hello from: "+input);
}


//callback with named function
example(1, hello);

//callback with anonymous function
example(2, function(number){
    console.log("Hello from: "+ number);
})

//callback with lambda function

//version 1
example(3, (number) => console.log("Hello from: " + number));

//version 2
example(4, (number) => {
    //you use the brackets when if the body of the function requires multiple lines
    console.log("I require more lines!");
    console.log("Hello from: " + number);
})


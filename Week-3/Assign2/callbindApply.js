// Create 3 simple functions where call, bind and apply are used. The intention of this exercise isto understand how they work and their differences
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

car.displayDetails(); // GA12345 Toyota

var myCarDetails =  car.displayDetails;
myCarDetails();

// The bind() Method
// For such cases we can use the ECMAScript 5 bind() method of the Function.prototype property. This means bind() can be used by every single function.

var myCarDetails = car.displayDetails.bind(car); 
myCarDetails(); // GA12345 Toyota

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(ownerName){
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }
}

// Example of passing arguments with bind():

var myCarDetails = car.displayDetails.bind(car, "Vivian"); 
    // Vivian, this is your car: GA12345 Toyota


// call() and apply() methods::
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}

//the apply() function:

displayDetails.apply(car, ["Vivian"]); // Vivian, this is your car: GA12345 Toyota

//call() function:
displayDetails.call(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota

// Note that when using the apply() function the parameter must be placed in an array. Call() accepts both an array of parameters and a parameter itself. Both are great tools for borrowing functions in JavaScript.

// bind(), call() and apply() functions can make your life easier when you need to set the value of ‘this’. Hope the post was helpful.
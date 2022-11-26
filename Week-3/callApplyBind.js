const car = {
  registrationNumber: "GA12345",
  brand: "Kia",

  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  },
};

car.displayDetails(); // GA12345 Kia

const myCarDetails = car.displayDetails;
myCarDetails(); // “this” will be now assigned to the global context which doesn’t have neither the registrationNumber nor the brand property.

// The bind() method creates a new function where “this” refers to the parameter in the parenthesis in the above case “car”.
var myCarDetails1 = car.displayDetails.bind(car);
myCarDetails1(); // GA12345 Kia

var car1 = {
  registrationNumber: "GA12345",
  brand: "Kia",

  displayDetails: function (ownerName) {
    console.log(
      ownerName +
        ", this is your car: " +
        this.registrationNumber +
        " " +
        this.brand
    );
  },
};
// argument to the function bind()
var myCarDetails2 = car1.displayDetails.bind(car, "Parveen"); // parveen, this is your car: GA12345 Kia
myCarDetails2();

// This time there is a car object without the displayDetails function, which is located in the global context.
var car2 = {
  registrationNumber: "GA12345",
  brand: "Kia",
};

function displayDetails(ownerName) {
  console.log(
    ownerName +
      ", this is your car: " +
      this.registrationNumber +
      " " +
      this.brand
  );
}

displayDetails.apply(car2, ["parveen"]); // parveen, this is your car: GA12345 Kia
displayDetails.call(car2, "Narwal"); // Narwal, this is your car: GA12345 Kia
// Note that when using the apply() function the parameter must be placed in an array. Call() accepts both an array of parameters and a parameter itself

// The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);
console.log(car1.model)


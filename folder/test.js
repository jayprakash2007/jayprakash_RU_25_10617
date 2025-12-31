// Creating an object using object literal
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  start: function() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
};

car.start(); // Output: Toyota Corolla is starting...

// Creating a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an object from the class
const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
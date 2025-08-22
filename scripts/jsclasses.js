class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`)
    }
}

const person1 = new Person("Anna", 25);
person1.greet();

class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
        this.isOn = false;
    }
    start(){
        console.log(`This ${this.brand} ${this.model} is now ON`);
    }
    stop(){
        console.log(`This ${this.brand} ${this.model} is now OFF`);
    }
}
const myCar = new Car("Toyota", "Tacoma");
myCar.start();
myCar.stop();

class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log(`Makes a sound... ${this.name}`);
    }
}

class Dog extends Animal{
    makeSound(){
        console.log("Woof!");
    }
}

const dog = new Dog("Buddy");
dog.makeSound();

const animal1 = new Animal("Girafe");
animal1.makeSound();
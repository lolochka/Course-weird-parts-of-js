"use strict";

/*var person = {
    name: 'name',
    surname: 'surname',
    getFullName: function() {
        return 'My name ' + this.name + ' ' + this.surname;
    }
}

var john = {
    name: 'John',
    surname: 'Doe'
}

//DON'T USE IT
john.__proto__ = person;


function getOwnProp(obj) {
    for (var prop in obj) {
        if (john.hasOwnProperty(prop)) {
        console.log(prop + ' : ' + obj[prop]);
        }
    }
} 

getOwnProp(john);

var jane = {
    address: 'Lenina 111',
    getFullName: function() {
        return this.surname + ', ' + this.name;
    }
}

var jim = {
    getName: function() {
        return this.name;
    }
}

_.extend(john, jane, jim);

console.log(john);*/

//function Count() {
//    var invoked = 0;
//    return function Person(name, surname) {
//        this.name = name;
//        this.surname = surname;
//        invoked ++;
//        console.log('Invoked ' + invoked);
//    }
//}
//
//var PersonCounted = Count();
//
//PersonCounted.prototype.getName = function() {
//    return this.name + ' ' + this.surname;
//}
//
//var john = new PersonCounted('John', 'Doe');//new create object
//console.log(john);
//
//var jane = new PersonCounted('Jane', 'Doe');
//console.log(jane);
//
//PersonCounted.prototype.getFullName = function() {
//    return this.name + ' !!!! ' + this.surname;
//}
//
//console.log(john.getFullName());

//String.prototype.isLengthGreaterThan = function(limit) {
//    var lentgh = this.length;
//    return lentgh > limit;
//}
//
//Number.prototype.isEven = function() {
//    return Boolean(!(this % 2));
//}
//
//var a = 20;
//
//console.log(a.isEven());


//var arr = ['Jane', 'John', 'Bill'];
//
//Array.prototype.myCustom = 'cool!';
//
//for (var prop in arr) {
//    console.log(prop + ': ' + arr[prop]);
//}


///POLYFIL
//if(!Object.create) {
//    Object.create = function(o) {
//        if (arguments.length > 1) {
//            throw new Error('Object.create implementation' + ' only accepts the first parameter.');
//        }
//        function F() {}
//        F.prototype = o;
//        return new f();
//    }
//}
//
//var person = {
//    name: 'name',
//    surname: 'surname',
//    greet: function() {
//        return 'Hi ' + this.name;
//    }
//}
//
//var john = Object.create(person);
//john.name = 'John';
//john.surname = 'Doe';
//console.log(john);
//
//person.getFullName = function() {
//    return this.name + ' ' + this.surname;
//}
//
//console.log(john.getFullName());


class Person {
    constructor(firstname, lastname) {
        this.name = firstname;
        this.surname = lastname;
    }
    
    greet() {
        return 'Hi ' + this.name;
    }
    
    bye() {
        return 'Goodbye ' + this.name;
    }
}

var john = new Person('John', 'Doe');
console.log(john.greet());

class InformalPerson extends Person {
    greet() {
        return 'Yo ' + this.name;
    }
    
    bye() {
        return 'Bye ' + this.name;
    }
}

var bill = new InformalPerson('Bill', 'Doe');
console.log(bill.greet());

console.log(john.bye());
console.log(bill.bye());




















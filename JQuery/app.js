'Use strict'

var q = $('ul.people li');
console.log(q);

var Person = function(name, surname) {
    this.name = name;
    this.surname = surname;
    return this;
}

var john = new Person('John', 'Doe');

Person.prototype.greet = function() {
    console.log('Hello, my name is '+ this.name);
    return this;
}

Person.prototype.bye = function(word) {
    var word = word || this.byeWord || 'Bye';
    console.log(word);
    this.byeWord = word;
    return this;
}

john.greet().bye('Goodbye');
john.bye();
john.bye('Papa');
john.bye();
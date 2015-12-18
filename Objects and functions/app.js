//By values and references

/*var a = {
    c: 4,
    d: 5
}

var b = a;
console.log(b.c);

b.c = 7;
console.log(a.c);

function change(obj) {
    obj.c = 'HI';
}*/



//Objects, function and this
/*console.log(this);

function a() {
    console.log(this);
    this.newVar = 'hi';
}

var b = function() {
    console.log(newVar);
}

a();
b();

var c = {
    name: 'my name!!',
    hi: function() {
        var self = this;
        self.name = 'HELLO';
        console.log(this);
        var setname = function(nam) {
            self.name = nam;
        }
        setname('UPDATED AGAIN!');
        console.log(this);
    },
    obj: {
        objName: 'OBJECT',
        func: function() {
            console.log(this);
        }
    }
}

c.hi();
c.obj.func();*/



//Arrays
/*var arr = [
    1,
    false,
    {
        name: 'Olga',
        age: 24
    },
    function(name) {
        console.log('Hello ' + name);
    },
    'Jane'
];
arr[3](arr[2].name);*/

//Arguments

/*function greet(a,b,c, ...other) {
    if (arguments.length === 0) {
        console.log('No args');
        console.log('-------------');
        return;
    }
    console.log(`${a} ${b} ${c}`);
    console.log(arguments);
    console.log(other);
    console.log('-------------')
}

greet();
greet('John');
greet('John', true);
greet('John', true, 15, 17, 'Main street', 'And');*/


//IIFEs

//function statement
/*function greetSt(name) {
    console.log(`Hello ${name}`);
}
greetSt('John');

//function expression
var greetExp = function(name) {
    console.log(`Hello ${name}`);
};

greetExp('John');

//IIFE
var greetIIFE = function(name) {
    return `Hello ${name}`;
}('John');

console.log(greetIIFE);*/

//II noname function
/*var greet = 'Hola';
(function(name) {
   
    console.log(`${greet || 'Hello'} ${name}`);

})('John');*/


//CLOSURES

/*function greet(whattosay, word) {
    var word = word || 'good';
    return function (name) {
        console.log(`${whattosay} ${word} ${name}`);
    }
}

greet('Hi', 'smart')('Tony');
var sayHola = greet('Hola');
console.log(sayHola);
sayHola('Olga');*/

//We return function and after that invoke function that was return

/*function buidFunctions() {
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        arr.push (
            function() {
                console.log(i);
            }
        )
    }
    
    return arr;
}

var fs = buidFunctions();

fs[0]();
fs[1]();
fs[2]();


/////////////////////////////////////////////

function buidFunctions2() {
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        (function(j) {
            arr.push (
                function() {
                    console.log(j);
                }
            )
        })(i);
    }
    
    return arr;
}

var fs2 = buidFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

///////////////////////////////////////////////


function buidFunctions3() {
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        arr.push (
            (function(j) {
               return function() {
                    console.log(j);
                }
            }(i))
        )
    }
    
    return arr;
}

var fs3 = buidFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();*/

/*function makeGreet(lang) {
    
    return function(name, surname) {
        
        if (lang === 'en') {
            console.log(`Hello ${surname} ${name}`);
        }
        
        if (lang === 'es') {
            console.log(`Hola ${surname} ${name}`);
        }
        
    }
    
}

var greetEn = makeGreet('en');
var greetEs = makeGreet('es');

greetEn('Olga','Shkoda');
greetEs('Olga','Amigo');*/


//CLOSURES AND CALLBACKS

/*function sayHiLater(name) {
    var greeting = 'Hi';
    
    setTimeout(function() {
        console.log(`${greeting} ${name}!`);
    }, 3000);
}

sayHiLater('Olga');

console.log('HIIII');


function tellMeDone(callback) {
    arr = [];
    for (var i = 0; i <= 5500000; i++) {
        arr.push(i);
    }
    console.log(arr);
    callback();
}


tellMeDone(function() {
    console.log('DONEEEE!');
})

tellMeDone(function() {
    console.log('DONE THIS');
})*/


//CALL, APPLY, BIND 

/*var man = {
    name: 'John',
    surname: 'Doe',
    getFullName: function() {
        var fullname = this.name + ' ' + this.surname;
        return fullname;
    }
}

var olga = {
    name: 'Olga',
    surname: 'Shkoda'
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log(lang1 + ' ' + lang2);
    console.log('-----------------');
}

logName.bind(man)('en', 'es');
logName.call(man, 'en', 'es');
logName.apply(man, ['en', 'es']);

(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log(lang1 + ' ' + lang2);
    console.log('-----------------');
}).apply(man, ['es', 'en']);

console.log(man.getFullName.call(olga));
console.log(man.getFullName.apply(olga));
console.log(man.getFullName.bind(olga)());*/

//function curring - creating a copy of function with preset parameter

/*function divide(a, b) {
    console.log(b/a);
}

function divideByTwo(b) {
    var a = 2;
    console.log(b/a);
}

var divideByTwo = divide.bind(this, 2);

divide(2,56);
divideByTwo(56);*/

// FUNCTIONAL PROGRAMMING
/*function mapForEach(arr, fn) {
    
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    }
    
    return newArr;
}

function checkPastLimit(limiter, item) {
    if (item > limiter) { 
        return 'greater than ' + limiter; 
    } else if (item === limiter) {
        return 'equal ' + limiter;
    } else {
        return 'smaller than ' + limiter;
    }
}

function checkPastLimitSimple(limiter) {
    return function(item) {
        if (item > limiter) { 
            return 'greater than ' + limiter; 
        } else if (item === limiter) {
            return 'equal ' + limiter;
        } else {
            return 'smaller than ' + limiter;
        }
    }
}

var arr1 = [1,2,3,4,5,6];
console.log(arr1);

var arr2 = mapForEach(arr1, function(a){return a*2});
console.log(arr2);

var arr3 = mapForEach(arr1, checkPastLimit.bind(this,2));
console.log(arr3);

var arr4 = mapForEach(arr1, function(a){return 'This is ' + a});
console.log(arr4);

var arr5 = mapForEach(arr1, checkPastLimitSimple(5));
console.log(arr5);

var arr6 = mapForEach(arr1, function(item) { return item * 3 });
console.log(arr6);

var arr7 = _.filter(arr1, function(item) { return item % 2 === 0});
console.log(arr7);*/

var arr1 = [1,5,3,6,5,6];

var arr2 = _.uniq(arr1);
console.log(arr2);















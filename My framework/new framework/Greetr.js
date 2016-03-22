'use strict';
(function(global, $) {
    
    var Person = function(name, lastname, age) {
        return new Person.init(name, lastname, age);
    }
    
    var greetings = {
        young: 'Hi',
        adult: 'Greetings'
    }
    
    var byes = {
        young: 'Bye',
        adult: 'Goodbye'
    }
    
    var persons = {};
    
    function objPropToString (obj) {
        
        var keys = [];
        for (var key in obj) {
            keys.push(key);
        }
        
        return keys.join(', ');
    };
    
    Person.prototype = {
            
        say: function(selector, msg) {
            
            if(!$) {
                throw 'jQuery not loaded';
            }
      
            if (!selector) {
                throw 'Missing jQuery selector';
            }
            
            $(selector).html(msg);
            return this;
        },
        
        come: function() {
            var all = objPropToString(persons);
            console.log(greetings[this.age] + ((all ? ', ' + all : false) || 'everyone'));
            persons[this.name] = this;
            return this;
        },
        
        bye: function() {
            delete persons[this.name];
            var all = objPropToString(persons);
            console.log(byes[this.age] + ((all ? ', ' + all : false) || 'everyone'));
            return this;
        }
    
    }
    
    Person.init = function(name, lastname, age) {
        var self = this;
        self.name = name || '';
        self.lastname = lastname || '';
        self.age = age || 'adult';
    }
    
    Person.init.prototype = Person.prototype;
    
    global.Person = global.$P = Person;
    
}(window, jQuery));
(function (global, $) {
    // 1. greetr function returns a new 'greetr.init'
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola',
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion',
    };
    // 4. theses are all methods available on our custom prototype
    // any methods inside here, the 'this' variable will have access to when creating a new greetr object
    Greetr.prototype = {
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function () {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'invalid Language';
            }
        },

        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        // lets make a greet method that will decide if formal or informal
        greet: function (formal) {
            var msg;
            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            if (console) {
                console.log(msg);
            }
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function () {
            if (console) {
                console.log(
                    logMessages[this.language] + ': ' + this.fullName()
                );
            }
            return this;
        },

        setLang: function (lang) {
            this.language = lang;

            this.validate();

            return this;
        },
    };
    // 2. the new greetr.init builds the object and sets the values
    Greetr.init = function (firstName, lastName, language) {
        var self = this;
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.language = language || 'en';
    };
    // 3. all objects create from here have all methods created on the prototype property
    // any greetr function created will have the greet prototype
    Greetr.init.prototype = Greetr.prototype;

    //attach to global
    global.Greetr = global.G$ = Greetr;

    // when invoking pass global object and jquery
})(window, jQuery);

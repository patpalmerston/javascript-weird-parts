(function (global, $) {
    // 1. greetr function returns a new 'greetr.init'
    // 'new' an object
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    // hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en', 'es'];

    // informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola',
    };

    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
    };

    // logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion',
    };

    // 4. theses are all methods available on our custom prototype
    // any methods inside here, the 'this' variable will have access to when creating a new greetr object

    // prototype holds methods (to save memory space)
    Greetr.prototype = {
        // 'this referes to the calling object at execution time
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function () {
            // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'invalid Language';
            }
        },

        // retrieve messages from object by referring to properties using [] syntax
        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        // lets make a greet method that will decide if formal or informal
        // chainable methods
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
            // set the language
            this.language = lang;
            // validate
            this.validate();
            // make chainable
            return this;
        },

        HTMLGreeting: function (selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            // determine the message
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            // inject the message in the chosen place in the DOM
            $(selector).html(msg);
            // make chainable
            return this;
        },
    };
    // 2. the new greetr.init builds the object and sets the values
    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function (firstName, lastName, language) {
        var self = this;
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.language = language || 'en';

        // call validate when initiating the object
        self.validate();
    };
    // 3. all objects create from here have all methods created on the prototype property
    // any greetr function created will have the greet prototype

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    //attach our greetr to the global object, and provide a shorthand '$G' for ease
    global.Greetr = global.G$ = Greetr;

    // when invoking pass global object and jquery
})(window, jQuery);

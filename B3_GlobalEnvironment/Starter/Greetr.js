(function (global, $) {
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
    };

    Greetr.init = function (firstName, lastName, language) {
        var self = this;
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.language = language || 'en';
    };
    // any greetr function created will have the greet prototype
    Greetr.init.prototype = Greetr.prototype;

    //attach to global
    global.Greetr = global.G$ = Greetr;

    // when invoking pass global object and jquery
})(window, jQuery);

(function (global, $) {
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    Greetr.prototype = {};

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

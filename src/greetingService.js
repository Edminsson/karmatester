"use strict";
var Dummy;
(function (Dummy) {
    var GreetingService = /** @class */ (function () {
        function GreetingService() {
            this.greeting = 'hejsan';
        }
        return GreetingService;
    }());
    Dummy.GreetingService = GreetingService;
})(Dummy || (Dummy = {}));

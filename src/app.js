"use strict";
var Dummy;
(function (Dummy) {
    angular.module('app', [])
        .controller('mainController', Dummy.MainController)
        .service('greetingService', Dummy.GreetingService);
    angular.module('second', [])
        .service('dataService', Dummy.DataService)
        .controller('secondController', Dummy.SecondController);
})(Dummy || (Dummy = {}));

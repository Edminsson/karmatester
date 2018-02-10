"use strict";
var Dummy;
(function (Dummy) {
    var MainController = /** @class */ (function () {
        function MainController($scope, greetingService) {
            $scope.name = "Main";
            $scope.nameWithGreeting = greetingService.greeting + " " + $scope.name;
        }
        return MainController;
    }());
    Dummy.MainController = MainController;
})(Dummy || (Dummy = {}));

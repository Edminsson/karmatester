"use strict";
var Dummy;
(function (Dummy) {
    var SecondController = /** @class */ (function () {
        function SecondController($scope) {
            $scope.name = "Second";
        }
        return SecondController;
    }());
    Dummy.SecondController = SecondController;
})(Dummy || (Dummy = {}));

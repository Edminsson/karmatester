"use strict";
var Dummy;
(function (Dummy) {
    var SecondController = /** @class */ (function () {
        function SecondController($scope, dataService) {
            $scope.name = "Second";
            $scope.getData = dataService.getData();
        }
        return SecondController;
    }());
    Dummy.SecondController = SecondController;
})(Dummy || (Dummy = {}));

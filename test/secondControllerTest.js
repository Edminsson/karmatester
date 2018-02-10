"use strict";
var Tester;
(function (Tester) {
    describe('SecondControllerTest', function () {
        var $location;
        var $scope;
        var $controller;
        beforeEach(angular.mock.module('second'));
        beforeEach(angular.mock.inject(function (_$controller_) {
            $scope = {
                getData: function () { }
            };
            $controller = _$controller_;
            //We dont need to inject dataService manually when creating the controller
            _$controller_('secondController', { $scope: $scope });
            spyOn($scope, "getData");
        }));
        it('Name is correct', function () {
            expect($scope.name).toEqual("Second");
        });
        it('getData not called', function () {
            expect($scope.getData).not.toHaveBeenCalled();
        });
        it('getData is called', function () {
            var data = $scope.getData();
            expect($scope.getData).toHaveBeenCalled();
        });
    });
})(Tester || (Tester = {}));

"use strict";
var Tester;
(function (Tester) {
    describe('SecondControllerTest', function () {
        var $location;
        var $scope;
        beforeEach(angular.mock.module('second'));
        beforeEach(angular.mock.inject(function (_$controller_) {
            $scope = {};
            _$controller_('secondController', { $scope: $scope });
        }));
        it('Name is correct', function () {
            expect($scope.name).toEqual("Second");
        });
    });
})(Tester || (Tester = {}));

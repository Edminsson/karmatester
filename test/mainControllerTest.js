"use strict";
var Tester;
(function (Tester) {
    describe('MainControllerTest', function () {
        var $controller;
        describe('Without mocking service', function () {
            beforeEach(angular.mock.module('app'));
            beforeEach(angular.mock.inject(function (_$controller_) {
                $controller = _$controller_;
            }));
            it('Name is correct', function () {
                var $scope = {};
                $controller('mainController', { $scope: $scope });
                expect($scope.name).toEqual("Main");
            });
            it('Name with greeting is correct', function () {
                var $scope = {};
                $controller('mainController', { $scope: $scope });
                expect($scope.nameWithGreeting).toEqual("hejsan Main");
            });
        });
        describe('Mocking service', function () {
            beforeEach(angular.mock.module('app'));
            beforeEach(angular.mock.module({
                greetingService: {
                    greeting: 'hola'
                }
            }));
            beforeEach(angular.mock.inject(function (_$controller_) {
                $controller = _$controller_;
            }));
            it('Name with greeting is correct when mocking Service', function () {
                var $scope = {};
                $controller('mainController', { $scope: $scope });
                expect($scope.nameWithGreeting).toEqual("hola Main");
            });
        });
    });
})(Tester || (Tester = {}));

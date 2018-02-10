"use strict";
var Tester;
(function (Tester) {
    describe('GreetingServiceTest', function () {
        var service;
        var saludo;
        it('greeting is correct', function () {
            angular.mock.module('app');
            angular.mock.inject(function (greetingService) {
                service = greetingService;
                saludo = service.greeting;
            });
            expect(saludo).toEqual('hejsan');
        });
        it('mocking greetingService', function () {
            angular.mock.module('app');
            angular.mock.module({
                greetingService: {
                    greeting: 'whot?'
                }
            });
            angular.mock.inject(function (greetingService) {
                service = greetingService;
                saludo = service.greeting;
            });
            expect(saludo).toEqual('whot?');
        });
    });
})(Tester || (Tester = {}));

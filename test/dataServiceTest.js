"use strict";
var Tester;
(function (Tester) {
    describe('DataServiceTest', function () {
        var service;
        it('correct number of dataitems', function () {
            angular.mock.module('second');
            angular.mock.inject(function (dataService) {
                service = dataService;
            });
            expect(service.getData().length).toEqual(3);
        });
    });
})(Tester || (Tester = {}));

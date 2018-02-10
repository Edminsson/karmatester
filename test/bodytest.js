"use strict";
var Tester;
(function (Tester) {
    describe('Tester', function () {
        it('First', function () {
            expect(1).toEqual(1);
        });
        it('bodytest', function () {
            var test = Dummy.isBodyPresent();
            expect(test).toEqual(1);
        });
        it('elementtest', function () {
            var test = Dummy.isElementPresent('saludo');
            expect(test).toEqual(0);
        });
        it('htmltest', function (done) {
            var test = $.get('./base/mini.html').then(function (res) {
                expect(false).toBeFalsy();
                done();
            });
        });
    });
})(Tester || (Tester = {}));

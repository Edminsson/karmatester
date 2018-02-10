"use strict";
var Dummy;
(function (Dummy) {
    var DataService = /** @class */ (function () {
        function DataService() {
            this.data = [
                { id: 1, svenska: "ett", spanska: "uno" },
                { id: 2, svenska: "två", spanska: "dos" },
                { id: 3, svenska: "tre", spanska: "tres" }
            ];
        }
        DataService.prototype.getData = function () {
            return this.data;
        };
        return DataService;
    }());
    Dummy.DataService = DataService;
})(Dummy || (Dummy = {}));

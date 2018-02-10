"use strict";
var Dummy;
(function (Dummy) {
    function isBodyPresent() {
        return $(document.body).length;
    }
    Dummy.isBodyPresent = isBodyPresent;
    function isElementPresent(id) {
        return $("#" + id).length;
    }
    Dummy.isElementPresent = isElementPresent;
})(Dummy || (Dummy = {}));

(function () {
    "use strict";

    function yyyymmddhhmmss(tarih, middleChar) {
        var yyyy = tarih.getFullYear().toString()
        var mm = (tarih.getMonth() + 1).toString() // getMonth() is zero-based
        var dd = tarih.getDate().toString()
        var HH = tarih.getHours().toString()
        var min = tarih.getMinutes().toString()
        var sec = tarih.getSeconds().toString()
        return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]) + (middleChar ? middleChar : ' ') + (HH[1] ? HH : "0" + HH[0]) + ':' + (min[1] ? min : "0" + min[0]) + ':' + (sec[1] ? sec : "0" + sec[0])
    }

    function simdi() {
        var s = '[' + yyyymmddhhmmss(new Date()) + ']'
        return s
    }

    exports.eventLog = function (obj, ...placeholders) {
        console.log(simdi(), obj, ...placeholders)
    }
    exports.errorLog = function (obj, ...placeholders) {
        console.error(simdi().red, obj, ...placeholders)
    }

}).call(this)

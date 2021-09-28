//Oefenen met functies
var kwadraat = function (num) { return Math.pow(num, 2); };
function Anonymous(text, separator) {
    if (separator === void 0) { separator = "-"; }
    return text.split(separator);
}
var product = function () {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    var pro = 1;
    for (var index = 0; index < arguments.length; index++) {
        pro *= arguments[index];
    }
    return pro;
};
console.log(product(5, 5, 5, 2));
function GSM(jaar, klantNr, bestelNr) {
    var arrJaar = [0, 0, 0];
    var arrKlant = [0, 0, 0, 0];
    var arrBestelNr = [0, 0, 0];
    for (var i = 0; i < jaar.toString().length; i++) {
        arrJaar[arrJaar.length - 1 - i] = parseInt(jaar.toString()[jaar.toString().length - 1 - i]);
    }
    for (var i = 0; i < klantNr.toString().length; i++) {
        arrKlant[arrKlant.length - 1 - i] = parseInt(klantNr.toString()[klantNr.toString().length - 1 - i]);
    }
    for (var i = 0; i < bestelNr.toString().length; i++) {
        arrBestelNr[arrBestelNr.length - 1 - i] = parseInt(bestelNr.toString()[bestelNr.toString().length - 1 - i]);
    }
    var checksum = parseInt("" + arrJaar.join('') + arrKlant.join('') + arrBestelNr.join('')) % 97;
    return "+++" + arrJaar.join('') + "/" + arrKlant.join('') + "/" + arrBestelNr.join('') + checksum + "+++";
}
console.log(GSM(2017, 123, 1));
console.log(GSM(17, 123, 1));

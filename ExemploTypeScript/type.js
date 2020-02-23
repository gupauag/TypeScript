"use strict";
exports.__esModule = true;
var Default = /** @class */ (function () {
    function Default() {
        this.metodo();
    }
    Default.prototype.metodo = function () {
        this.boleano = true;
        this.numero = 10;
        this.texto = "\u00C9 um Alert Simples em type script " + this.numero;
        this.array = [{
                teste: 'teste'
            }];
        return alert(this.texto);
    };
    return Default;
}());
var use = {
    name: 'teste',
    idade: 12
};

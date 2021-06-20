"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var inmuebles_1 = require("./inmuebles");
var Departamento = /** @class */ (function (_super) {
    __extends(Departamento, _super);
    function Departamento(tipo, ubicacion, dormitorios, area, precioV, precioA) {
        var _this = _super.call(this, tipo, ubicacion, area, precioV, precioA) || this;
        _this.dormitorios = dormitorios;
        return _this;
    }
    Departamento.prototype.verDatos = function () {
        console.info("Inmueble: \nTipo: " + this.tipo + "\nUbicaci\u00F3n: " + this.ubicacion + "\nDormitorios: " + this.dormitorios + " \n\u00C1rea: " + this.area + " metros \nOperaci\u00F3n: Venta o Alquiler ");
    };
    Departamento.prototype.alquilar = function () {
        console.info("El inmueble " + this.tipo + " fue alquilado, el precio mensual es $" + this.precioA + " y un unico deposito de $" + (this.precioA / 1.7).toFixed(2));
    };
    Departamento.prototype.vender = function () {
        return _super.prototype.vender.call(this);
    };
    return Departamento;
}(inmuebles_1["default"]));
exports["default"] = Departamento;

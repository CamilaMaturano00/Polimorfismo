"use strict";
exports.__esModule = true;
var Inmueble = /** @class */ (function () {
    function Inmueble(tipo, ubicacion, area, precioV, precioA) {
        this.tipo = tipo;
        this.ubicacion = ubicacion;
        this.area = area;
        this.precioV = precioV;
        this.precioA = precioA;
    }
    Inmueble.prototype.verDatos = function () {
        console.info("Inmueble: \nTipo: " + this.tipo + "\nUbicaci\u00F3n: " + this.ubicacion + "\nArea: " + this.area + " m \nOperaci\u00F3n: Venta o Alquiler ");
    };
    Inmueble.prototype.alquilar = function () {
        console.info("El inmueble " + this.tipo + ", ubicado en " + this.ubicacion + " fue alquilado por " + this.precioA + " pesos");
    };
    Inmueble.prototype.vender = function () {
        console.info("El inmueble " + this.tipo + ", ubicado en " + this.ubicacion + " fue vendido por " + this.precioV + " pesos");
    };
    return Inmueble;
}());
exports["default"] = Inmueble;

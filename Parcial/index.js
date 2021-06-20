"use strict";
exports.__esModule = true;
// Polimorfimos
// Tenemos una clase en general padre llamda Inmuebles y 3 clases hijas llamadas casa, departamento, local
// inmuebles va a tener como atributo tipo, direccion, precio y funciones como vender, alquilar, verDatos
var casa_1 = require("./casa");
var departamento_1 = require("./departamento");
var localComercial_1 = require("./localComercial");
console.info("--------- Ejemplo Casa -----------");
var casa1 = new casa_1["default"]("Casa de Campo", "Alto Maipú", 250, 3, 10000000, 25000);
casa1.verDatos();
casa1.vender();
casa1.alquilar();
console.info("--------- Ejemplo Departamento -----------");
var dept = new departamento_1["default"]("Duplex", "Lulunta", 1, 80, 2000000, 15000);
dept.verDatos();
dept.vender();
dept.alquilar();
console.info("--------- Ejemplo Local -----------");
var local = new localComercial_1["default"]("Oficina", "Centro de Maipú", 80, 5000000, 30000);
local.verDatos();
local.vender();
local.alquilar();

// Polimorfimos
// Tenemos una clase en general padre llamda Inmuebles y 3 clases hijas llamadas casa, departamento, local
// inmuebles va a tener como atributo tipo, direccion, precio y funciones como vender, alquilar, verDatos
import Casa from "./casa"
import Departamento from "./departamento"
import LocalComercial from "./localComercial"

console.info("--------- Ejemplo Casa -----------")
const casa1 = new Casa("Casa de Campo","Alto Maipú",250,3,10000000,25000);
casa1.verDatos()
casa1.vender()
casa1.alquilar()

console.info("--------- Ejemplo Departamento -----------")
const dept = new Departamento("Duplex","Lulunta",1,80,2000000,15000);
dept.verDatos()
dept.vender()
dept.alquilar()

console.info("--------- Ejemplo Local -----------")

const local = new LocalComercial("Oficina","Centro de Maipú",80,5000000,30000);
local.verDatos()
local.vender()
local.alquilar()



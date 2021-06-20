import Inmueble from "./inmuebles"

class LocalComercial extends Inmueble {
    constructor(tipo: string,ubicacion: string, area: number, precioV: number, precioA: number){
        super(tipo,ubicacion,area,precioV,precioA)
    }
    verDatos(){
        console.info(`Inmueble: \nTipo: ${this.tipo}\nUbicación: ${this.ubicacion}\nÁrea: ${this.area} metros \nOperación: Venta o Alquiler `)
    }
    alquilar(){
        console.info(`El inmueble ${this.tipo} fue alquilado, el precio mensual es $${this.precioA} y un unico deposito de $${this.precioA}`)
    }
    vender(){
        return super.vender()
    }    
}
export default LocalComercial

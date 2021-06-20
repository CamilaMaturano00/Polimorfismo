import Inmueble from "./inmuebles"

class Departamento extends Inmueble {
    dormitorios: number;
    constructor(tipo: string,ubicacion: string, dormitorios: number, area: number, precioV: number, precioA: number){
        super(tipo,ubicacion,area,precioV,precioA)
        this.dormitorios = dormitorios;
    }
    verDatos(){
        console.info(`Inmueble: \nTipo: ${this.tipo}\nUbicación: ${this.ubicacion}\nDormitorios: ${this.dormitorios} \nÁrea: ${this.area} metros \nOperación: Venta o Alquiler `)
    }
    alquilar(){
        console.info(`El inmueble ${this.tipo} fue alquilado, el precio mensual es $${this.precioA} y un unico deposito de $${(this.precioA/ 1.7).toFixed(2)}`)
    }
    vender(){
        return super.vender()
    }    
}
export default Departamento

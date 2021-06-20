import Inmueble from "./inmuebles"
class Casa extends Inmueble {
    dormitorios: number;
    constructor(tipo: string,ubicacion: string,area: number, dormitorios: number, precioV: number, precioA: number){
        super(tipo,ubicacion,area,precioV,precioA)
        this.dormitorios = dormitorios;
    }
    verDatos(){
        console.info(`Inmueble: \nTipo: ${this.tipo}\nUbicación: ${this.ubicacion}\nArea: ${this.area} m \nDormitorios: ${this.dormitorios} \nOperación: Venta o Alquiler `)
    }
    alquilar(){
        console.info(`El inmueble ${this.tipo} fue alquilado, el precio mensual es $${this.precioA} y un unico deposito de $${this.precioA / 2}`)
    }
    vender(){
        return super.vender()
    }    
}
export default Casa

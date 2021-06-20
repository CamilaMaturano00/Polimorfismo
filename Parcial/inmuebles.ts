abstract class  Inmueble {
    protected tipo: string;
    protected ubicacion: string;
    protected area: number;
    protected precioV: number;
    protected precioA: number;

    constructor(tipo: string, ubicacion: string, area: number, precioV: number, precioA: number){
        this.tipo = tipo;
        this.ubicacion = ubicacion;
        this.area = area;
        this.precioV= precioV;
        this.precioA= precioA;
    }

    protected verDatos(){
        console.info(`Inmueble: \nTipo: ${this.tipo}\nUbicación: ${this.ubicacion}\nArea: ${this.area} m \nOperación: Venta o Alquiler `)
    }
    protected alquilar(){
        console.info(`El inmueble ${this.tipo}, ubicado en ${this.ubicacion} fue alquilado por ${this.precioA} pesos`)
    } 
    protected  vender(){
        console.info(`El inmueble ${this.tipo}, ubicado en ${this.ubicacion} fue vendido por ${this.precioV} pesos`)
    }         
}

export default Inmueble



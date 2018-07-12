function Persona() {
    this.nombre = "Fernando";
    this.apellido = "Herrera";
    this.edad = 31;
    this.pais = "Costa Rica";

}
Persona.prototype.imprimirInfo = function () {
    console.log( this.nombre + " "+ this.apellido + " ("+ this.edad + ")")
};
var fer = new Persona();
Number.prototype.esPositivo = function () {
    if(this > 0){
        return true;
    }else{
        return false;
    }
};
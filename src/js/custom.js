// If ... Else
/*
var nota = 55;
if( nota >= 90 ){
   console.log("A")
}else if( nota >= 80){
    console.log("B")
}else if( nota >= 70){
    console.log("C")
}else if( nota >= 60){
    console.log("D")
}else{
    if ( nota > 50){
        console.log("F");
    }
    console.log("Algo paso por aqui..")
}
console.log("termino el codigo");*/
/*var a = undefined;
var b = 20;*/
// if de Validación Corta
//var c = ( a > b)? a : b;


// Avanzado
/*var c = ( a > b)? function () {
    console.log("A es mayor a B");
    return a;
}() : function () {
    console.log("B es mayor a A");
    return b;
}();
console.log(c);*/
/*if( a > b){
    c = a;
}else{
    c = b;
}
console.log(c);*/
//
// var c = a || b;
// console.log(c);
//Funciones que esperan parametros
function getNombre( nombre, apellido ) {
    var nomb = nombre || null || "sin apellido";
    console.log( nomb );
}
getNombre();
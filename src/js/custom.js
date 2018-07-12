// Poliformismo
// es una funcion que recibe diferentes tipos de datos valida y comprueba que dato es
function determinaDato(a) {
    if( a === undefined){
        console.log("A es undefined... y no se que hacer");
    }
    if (typeof a === "number"){
        console.log("A es un numero, y se puede sumar.");
    }
    if (typeof a === "string"){
        console.log("A es un texto, y puedo hacer op con textos");
    }
    if (typeof a === "object"){
        console.log("A es un objeto... pero puede ser cualquier cosa");
        if (a instanceof Number){
            console.log("A es un objeto numerico");
        }
        if (a instanceof String){
            console.log("A es texto");
        }
    }
}
//var b = new Number(3);
var b = new String("tres");
console.log(b);
determinaDato(b);
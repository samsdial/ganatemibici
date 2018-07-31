//Json
// Objeto a Json
var objetoJS = {
    nombre: "fernanod",
    edad: 30,
    imprimir: function () {
        console.log(this.nombre + this.edad);
    }
};
console.log("objeto literal", objetoJS);
var jsnString = JSON.stringify( objetoJS ); // parceamos a Json
console.log(jsnString);
// Json A objeto

var objetoDesdeJason = JSON.parse( jsnString );
console.log(objetoDesdeJason);
console.log(objetoDesdeJason.nombre);
console.log(objetoDesdeJason.edad);

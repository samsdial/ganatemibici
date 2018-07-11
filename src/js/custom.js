/*
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.slider').slick({
        autoplay: true
    });
});*/
// Valores con estructura dinamica(suvalor puede cambiar)
/*var num = 10; // Numero
var str = "texto"; // String
var bol = true; //Boleano
var und = undefined; // indefinido
var nul = null; // Nulo*/
// Objeto coleccion de datos primitivos
// nomencaltura de pares
/*var obj = {
    numero: 10,
    texto: "nuevo texto",
    objHijo: {
        numero: 22
    }

};
console.log(obj.texto + obj.numero);
console.log(obj.objHijo.numero);
// Valor Por Referencia
// Las Variables primitivas siempre se pasan por valor
var a = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);

var a = 20;

console.log("a: ", a);
console.log("b: ", b);*/

// cuando son objetos se pasan por referencia (Ambas variables son afectadas si es un objeto)
/*var c = {
    nombre: "Juana"
};
var d = c;

console.log("c: ", c);
console.log("d: ", d);

c.nombre = "maria";

console.log("c: ", c);
console.log("d: ", d);*/

//Notación de Punto y corchetes
/*var persona = {
    nombre: "Junana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "colombia",
        ciudad: "Bogotá",
        edificio: {
            nombre: "Ed Principal",
            telefono: "322-333"
        }
    }
};*/
//console.log(persona.direccion.pais);
//console.log(persona.direccion.ciudad);
//persona.direccion.zipcode = 11101;
/*console.log(persona.direccion);
console.log(persona.direccion.edificio.telefono);*/
//
/*
var edificio = persona.direccion.edificio;
edificio.nopiso = "8vo piso";
console.log(persona);
*/
// Notacion de corchete
/*
var campo = "edad";

console.log(persona[campo]);
*/
//Funciones:
//Un Tipo de Instruccion.
//Siempre regresan un valor
/*
function primeraFuncion() {
    //var a = 20;
    // Entorno Global

}
var a = primeraFuncion();
console.log(a);
*/

// Parametros para las funciones
/*
* Cualquier variable primitiva es inicializada es reservada en memoria
* */
/*
function  imprimir( nombre, apellido) {
    apellido = apellido || "xxx";
    /!*if( apellido === undefined ){
        apellido = "XXX";
    }*!/
    console.log(nombre + " " + apellido);
}
var nombre = "Juan"; // Variable Explicita
imprimir("juan", "Padilla"); // Variable anonima*/
/*
function imprimir( persona ) {
    console.log( persona.nombre + " " + persona.apellido)
}
var obj = {
    nombre: "Juan",
    apellido: "Padilla"
};
// objeto anonimo
imprimir(obj);
*/
//Enviar una Funcion a una Funcion
/*
function imprimir( fn ) {
    fn();
}
var obj = {
    nombre: "Juan",
    apellido: "Padilla"
};
// funcion explicita
var miFuncion = function () {
  console.log("miFuncion");
};

// las funciones son OBJ

imprimir( miFuncion );

imprimir(function () {
    console.log("Funcion anónima");
});*/
// El retorno de las funciones
/*
Que puede retornar una funcion js:
primitivo
undefined
obj
funciones
null
*/
/*
function obtenerAleatorio() {
    return Math.random();
}
function obtenernombre() {
    return "Juan";
}
console.log( obtenernombre() + " Padilla");*/
//Retornar boleano
/*function obtenerAleatorio() {
    return Math.random();
}
function esMayor05() {
    if ( obtenerAleatorio() > 0.5 ){
        return true;
    }else{
        return false;
    }
}*/
/*
console.log( esMayor05() );
*/
/*
if( esMayor05() ) {
    console.log("Es Mayor a 0.5");
}else{
    console.log("Es Menor a 0.5")
}
function crearPersona( nombre, apellido) {
    //var obj = {};
    return {
        nombre: nombre,
        apellido: apellido
    }
}
var persona = crearPersona("Maria", "Pavel");
console.log(persona.nombre);
console.log(persona.apellido);*/
// FUNCIONES QUE REGRESAN FUNCIONES
/*
 function crearPersona( nombre, apellido) {
 //var obj = {};
 return {
 nombre: nombre,
 apellido: apellido
 }
 }
 var persona = crearPersona("Maria", "Pavel");

 function crearFuncion() {
 return function (nombre) {
 console.log("Me creo!! " + nombre);
 return function (apellido) {
 console.log("Otro!! " + apellido);
 console.log("Segunda Funcion");
 return function () {

 console.log("tercera Funcion")
 }
 }
 }
 }
 var nuevaFuncion = crearFuncion();
 var segundaFuncion = nuevaFuncion(persona.nombre);
 var terceraFuncion = segundaFuncion(persona.apellido);
 segundaFuncion();
 terceraFuncion();
 */
// Funciones de primera CLASE
/*function a() {
    console.log("Función a");
}
a();
a.name = "Maria";*/
// Ojo con las propiedades del Objeto
// Metodos y el objeto this
/*
var nombre = "Juan";
var persona = {
    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function () {
        console.log( this.nombre + " "+ this.apellido  );
    },
    direccion:{
        pais: "costa rica",
        obtenerPais:function () {
            //console.log( this );
            var self = this;
            var nuevaDireccion = function () {
                console.log( self );
                console.log("Direccion: " + self.pais);
            };
            nuevaDireccion();
        }
    }
};

persona.imprimirNombre();
persona.direccion.obtenerPais();
*/
//LA PALABRA RESERVADA new
/*
function Persona(nombre,apellido,edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.imprimirPersona = function () {
        return this.nombre + " "+ this.apellido + " (" + this.edad +")"
    }
}
var juan = new Persona("Juan","Mendoza","30"); //invocacion de funcion
console.log( juan.imprimirPersona() );*/

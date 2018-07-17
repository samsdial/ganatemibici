// Expresiones Regulares
// Mecanismo Excelente dentro de las cadenas regulares. Clases:
// Explicita
var reg1 = RegExp("A");
// Literal
var reg2 = /a/;


// ExREg de un arreglo /^n/ primer
// ExREg de un arreglo /n$/ ultimo
// ExREg de un arreglo /.../ los tres primeros
// ExREg de un arreglo /[]/ buscar rango de numero o caracteres
// ExREg de un arreglo /\s/ Primer Espacio
// ExREg de un arreglo /[a-zA-Z0-9] = /\w/ Buscar en el rango del abecedario y numero
// ExREg de un arreglo /[0-9] = /\d/ Buscar en el rango de numero (d=decimal)
// ExREg de un arreglo /[aeiou]|[áéíóúñ]/ Buscar en el rango texto con tildes | = o expReg
// ExREg de un arreglo por estructura de repetición /n+/g n representa la busqueda y el + sus repeteciones /g es el controlador todas las apariciones!


// ExREg de un arreglo por estructura de repetición /n?/g n representa la busqueda y el ? todos los caracteres del arreglo(ALERTA Si el string esta basio cuenta como expresion ) /g es el controlador todas las apariciones!

// ExREg de un string por estructura de repetición /n*/g n de 0 o mas veces es similar al anterio busca la expresion  y calza las demas letras
// ExREg de un string por estructura de repetición /n{2,4}/g n representa la busqueda y el numero de veces

// ExREg tienen tres controladores que nos permite controlar su comportamiento:

// i = insensible a las Mayus o min
// g = Todas las papairiciones
// m = Multilinea
// Lo importante no es saber si no saber quien sabe!!
var texto = "la Respuesta de la suma es: 45 + 60 = 105";

console.log(texto);
var arr = texto.match( /\d{1,}|respuesta/ig ); // Return NUll

console.log( arr );
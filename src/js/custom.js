// Objeto Math
// Reside en el ObjetoGlobal
var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);
var num1 = 10.956789;

console.log( num1 );
// REdodndear numeros
console.log( Math.round( num1 ));
console.log( Math.round( num1*100 ) / 100 );// Dos decimales

console.log( Math.floor( num1 )); // quita todos los decimales sin redondeo

//var rnd = Math.random();
//console.log( rnd );
function randomEntre( min, max ) {
        return Math.floor( Math.random() * (max-min + 1) + min)
}
console.log( randomEntre( 500,1000 ));

console.log( Math.sqrt( 10 )); // Raiz cuadrada
console.log( Math.pow( 7, 3 )); // Exponentes
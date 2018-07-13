// Objetos Tipo Numero.
var a = 10.456789; //Tiene el valor de 10
//var b = new Number(10); // Es un objeto Tipo numero que tiene el valor de 10

// Los nuemero tienen ciertas funciones en su prototipo
// Metodos que traen por defecto
// MET. toFixed formatea en numero a una catidad de datos decimales que necesite
// --- console.log( a.toFixed(4) );
// MET. toString --  Darnos el valor textual de una cadena de caracteres.
/*
a = a.toString();
console.log( a );
*/
// MET. toPrecision -- Formatea un número a una logitud especifica
console.log(a);
console.log( a.toPrecision(4) );
a =  -10;
console.log( a );
// MET. valueOf --
var b = new Number("20");
console.log(b);
console.log( b.valueOf());
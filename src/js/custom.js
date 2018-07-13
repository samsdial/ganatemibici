// Los Objetos String
// la variables tipo texto o cadena
// En Js es un objeto
var b = "Herrera";
var a = new String("Fernando Herrera Pineda Chacon");
console.log( a[0]);
// MET. a Mayusculas
console.log(a.toUpperCase());
// MET. A minusculas
console.log(a.toLowerCase());
// MET. el primer index
var i = a.indexOf("Herrera");
console.log("la letra esta: ", i);
// MET. El ultimo index
var i = a.lastIndexOf("n");
console.log("la letra esta: ", i);
// MET. Desde donde quiero cortar el String
var nombre = a.substr(0, a.indexOf(" "));
console.log( nombre.toUpperCase() );
// MET. Split Crea un Ojb con nuestra variable
var split = a.split(" ");
console.log( split );
console.log( split.length );
//=====
// MET.
document.write( a.bold().fontcolor("red"));
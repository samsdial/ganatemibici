// Los Objetos Boleanos
//var a = true;
//var b = false;
// El valor por defecto es false si y solo si es 0 -0 -1 undefined, string vacio.
//var a = new Boolean(null);
//console.log( a );

var a = new Boolean();
console.log( a.valueOf() );

if( a.valueOf() ){
    console.log("me imprimi!!");
}
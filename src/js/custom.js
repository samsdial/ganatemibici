//Objeto Fecha
//La fechas son Objetos
var hoy = new Date();
var fMili = new Date(0);
//var fFija = new Date( año, mes, dia, hora,min, seg, mili );
var fFija = new Date( 2016, 9, 17, 23, 10, 15, 1 );

console.log( hoy );
console.log( fMili );
console.log( fFija );

console.log( hoy.getFullYear() );
//console.log( hoy.getYear() ); no Usar
console.log( hoy.getDay());
console.log( hoy.getHours());
console.log( hoy.getMilliseconds());
console.log( hoy.getMonth());
console.log( hoy.getSeconds());
console.log( hoy.getTime()); // Cuanto tiempo tarda en hacer un proceso.

var inicio = new Date();
for (var i = 0; i < 15000 ; i ++){
    console.log("Algo:...");
}
var fin = new Date();

/*
console.log( inicio );
console.log( fin );*/
var duracion = fin.getTime() - inicio.getTime();
console.log(duracion, "milisegundos");
console.log(duracion/1000, "Segundos");
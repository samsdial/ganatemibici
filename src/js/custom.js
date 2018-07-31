//funciones de tiempo:
// cuando queremos que se ejecute cuando pase x cantidad de segundos.
/*

setTimeout( function () {
    console.log("paso un segundo")
}, 1000);
*/

// cuando queremos que se ejecute numero de veces.
var segundos = 0;
/* infinito
setInterval( function () {
    segundos ++;
    console.log("seg", segundos);
}, 1000);*/
/*var intervalo = setInterval( function () {
    segundos ++;
    console.log("seg", segundos);
    if( segundos === 5){
        clearInterval( intervalo );
    }
}, 1000);*/
var juan = {
    nombre: "juan",
    edad: 30,
    imprimir: function () {
        var self = this;
        setTimeout( function () {
            console.log(self);
            console.log(self.nombre, self.edad);
        },1000);

    }
};

juan.imprimir();
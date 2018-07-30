// Funciones especiales: call, apply, bind
var carro = {
    color: "carro",
    marca: "mazda",
    imprimir: function () {
        var salida = this.marca + " - " + this.color;
        return salida;
    }
};
var carro2 = {
    color: "rojo",
    marca: "toyoya"
};
console.log( carro.imprimir() );
var logCarro = function ( arg1, arg2 ) {
  console.log("Carro:  ", this.imprimir());
  console.log("Argunentos:  ", arg1, arg2);
  console.log("===================");
};
var logModeloCarro = logCarro.bind( carro );

logModeloCarro();
logModeloCarro("abc", "xyz");
logModeloCarro.call( carro, "123", "456" );
logModeloCarro.apply( carro, ["123", "456"] );

// Sirven para:
// funciones prestadas
console.log( carro.imprimir.call( carro2 ) );
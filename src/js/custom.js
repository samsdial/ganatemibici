//For
/*for (var i=0; i < 10; i++){
    if( i == 5){
        continue
    }
    console.log(i);
}*/
// For in
var Persona = function(){
  this.nombre = "Juan";
  this.apellido = "Pineda";
  this.edad = 30;
};
var juan = new Persona();
Persona.prototype.direction = "San José";

// Reflejo se evalua en si mismo para saber si es una caracteristica del objeto.
for( var prop in juan ){
    console.log( juan.hasOwnProperty( prop ));
    console.log( prop,": ", juan[prop]);
}
for( var num in [1,2,3,4,5]){
    console.log(num)
}
// For eache de los arreglos
[1,true,3,false,"nombre"].forEach(function ( val ) {
   console.log( val );
});
/*

for( prop in juan ){
    console.log( prop, juan[prop]);
}*/

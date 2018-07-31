"use strict";var Persona=function(){this.nombre="Juan",this.apellido="Pineda",this.edad=30},juan=new Persona;Persona.prototype.direction="San José";for(var prop in juan)console.log(juan.hasOwnProperty(prop)),console.log(prop,": ",juan[prop]);for(var num in[1,2,3,4,5])console.log(num);[1,!0,3,!1,"nombre"].forEach(function(o){console.log(o)});
//# sourceMappingURL=custom.js.map

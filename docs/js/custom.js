"use strict";var objetoJS={nombre:"fernanod",edad:30,imprimir:function(){console.log(this.nombre+this.edad)}};console.log("objeto literal",objetoJS);var jsnString=JSON.stringify(objetoJS);console.log(jsnString);var objetoDesdeJason=JSON.parse(jsnString);console.log(objetoDesdeJason),console.log(objetoDesdeJason.nombre),console.log(objetoDesdeJason.edad);
//# sourceMappingURL=custom.js.map

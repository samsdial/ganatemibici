"use strict";var arr=[!0,{nombre:"Fernando",apellido:"ruiz"},function(){console.log("estoy en array")},function(o){console.log(o.nombre+" "+o.apellido)},["Fernando","Carlos","Hernando","Melisa",["Juan","Pedro","Patricia",function(){console.log(this)}]]];console.log(arr.length),console.log(arr),console.log(arr[0]),console.log(arr[1].nombre+" "+arr[1].apellido),arr[2](),arr[3](arr[1]),console.log(arr[4][4][1]);var arreglo2=arr[4][4];arreglo2[1]="Camilo!",console.log(arreglo2),console.log(arr),arreglo2[3]();
//# sourceMappingURL=custom.js.map

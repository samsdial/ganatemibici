"use strict";var carro={color:"carro",marca:"mazda",imprimir:function(){return this.marca+" - "+this.color}},carro2={color:"rojo",marca:"toyoya"};console.log(carro.imprimir());var logCarro=function(o,r){console.log("Carro:  ",this.imprimir()),console.log("Argunentos:  ",o,r),console.log("===================")},logModeloCarro=logCarro.bind(carro);logModeloCarro(),logModeloCarro("abc","xyz"),logModeloCarro.call(carro,"123","456"),logModeloCarro.apply(carro,["123","456"]),console.log(carro.imprimir.call(carro2));
//# sourceMappingURL=custom.js.map

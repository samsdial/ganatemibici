"use strict";function registroError(r){var e=new Date;console.log("Se Registro un erro: ",r,"a las: ",e.getTime())}try{throw new Error("nombre de erro")}catch(r){registroError(r)}finally{console.log("Finalmente")}
//# sourceMappingURL=custom.js.map

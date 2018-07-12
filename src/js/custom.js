// Funciones Anonimas
// Como cualquier tipo de función la diferenca es que no tiene un nombre
// NOs permite esconder las variable en el obj global
// si tenemos varios archivos JS que tengan la variable (a) no sera afectada
/*
( function() {
    var a = 10;
    console.log( a );
    function cambiarA() {
        a = 20;
    }
    cambiarA();
    console.log( a );
})();
*/
function ejecutarFuncion( fn ) {
    if( fn() === 1 ){
        return true;
    }else{
        return false;
    }
}
console.log(
    ejecutarFuncion( function () {
        console.log("funcion Anonima Ejecutada!");
        return 0;
    })
);
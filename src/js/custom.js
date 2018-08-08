// evntos 101
//click
//focus
//tipo de evento
/*
function evento( arg ) {
 console.log("me dispare");
 console.log( arg.x, arg.y );
}
var objeto = document.getElementById('demoObj');

objeto.addEventListener("click", evento);*/
// Bloqueado el click derecho:
document.onmousedown = function (arg) {
    // click en Boton Derecho
    if(arg.button === 2 ){
        alert("click bloqueado");
        return;
    }
    // click en Boton izq
    console.log("no hay problema")
};
// Seleccionar lo que esta el la pagina web
document.onmouseup = function () {
    var texto = window.getSelection().toString();
    console.log(texto);

}
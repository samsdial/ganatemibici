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
    if(arg.button === 2 ){
        alert("click bloqueado");
        return;
    }
    console.log("no hay problema")
};
document.onmouseup = function () {
    var texto = window.getSelection().toString();
    console.log(texto);

}
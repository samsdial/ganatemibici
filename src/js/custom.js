// Funciones TypeOf e Instanceof
/*function identifica(param) {
    //console.log( typeof param)
    if ( typeof param == "function"){
        param();
    }else{
        console.log( param );
    }
}*/

// Se Recomienda revisar que tipo de dato se esta tabajando
function identifica(param) {
    console.log( param instanceof  Persona );
    console.log( typeof param)
}
function Persona() {
    this.nombre = "fernando";
    this.edad = 30;
}
var fernando = new Persona();
identifica(fernando);
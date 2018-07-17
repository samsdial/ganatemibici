// Manejo de errores en JavaScript

//intenta
/*
try {
    var a = 100;
    if(a === 101){
        throw 'Que mal'
    }else{
        throw 'oh oh!'
    }
    console.log("el: ", a);
}
// Si no intenta esto
//Opcional
catch (e){
    if(e === "Que mal"){
        console.log( "Error tipo 1" );
    }
    if(e == "oh oh!"){
        console.log( "Error tipo 2" );
    }
}
//
finally {
    console.log( "Finalmente" );
}*/
// 2manera
/*
try {
    throw new Error('Error tipo 1');
    console.log("el:");
}

catch (e){
    console.log(  e.message );
}

finally {
    console.log( "Finalmente" );
}*/
/*
try {
    //Mandar un Objeto
    throw {
        nombreError: "error tipo 1",
        acccio: "salir",
        coderror: 1
    };
    console.log("el:");
}

catch (e){
    console.log( e );
    console.log( e.nombreError );
    console.log( e.acccio );
    console.log( e.coderror );
    console.log(  "Parte del catch" );
}

finally {
    console.log( "Finalmente" );
}*/
/*
try {
    // Mandando una Funcion
    throw function () {
        console.log( "Funcion del thorw" );
    };
    console.log("el:");
}

catch (e){
    e();
    console.log(  "parte del catch" );
}

finally {
    console.log( "Finalmente" );
}*/
try {
    //throw 1; //n Cualquier numero
    // se recomienda usar el new Error por un error de Js
    throw new Error('nombre de erro');
}

catch (e){
    registroError( e );
}

finally {
    console.log( "Finalmente" );
}
function registroError(e) {
    var ahora = new Date();
    console.log( "Se Registro un erro: ", e, "a las: ", ahora.getTime() );
}
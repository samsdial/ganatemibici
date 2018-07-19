// Cookies -- Escape, unescape
//Es informacion que se guarda en la maquina del cliente:
function  crearCookies( nombre, valor ) {
    // Se denomina escape a el formato html de una Cookie para evitar errores al guardar
    valor = escape(valor);
    var hoy = new Date();
    hoy.setMonth( hoy.getMonth() + 1 );
    document.cookie = nombre + "=" + valor +";expieded="+ hoy.toUTCString() +";";
}
/*var demo = "123;123*123'123/ 123";
console.log( demo );
console.log( escape(demo) );
// inverso del escape
console.log( unescape( escape(demo) ) );*/

// FN borrar cukie
function borrarCookie( nombre ) {
    var hoy = new Date();
    hoy.setMonth( hoy.getMonth() - 1 );
    document.cookie = nombre+"=x;expieres="+hoy.toUTCString() +";";

}
// Guardar cookies
function getCookie( nombre ) {
    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");
    console.log( cookieArr );

    for( var i = 0; i < cookieArr.length; i++){
        var parArr = cookieArr[i].split("=");
        cookieArr[i] = parArr;
        if( parArr[0] === nombre){
            return unescape( parArr[1] );
        }
    }
    return undefined; //
}
console.log( getCookie("nombre") );
crearCookies( "nombre", "Sams" );
crearCookies( "apellido", "Martinez" );
//borrarCookie( "Nombre" );
//document.cookie = "Nombre=fern;ado"
//var  cookies = document.cookie;
//console.log( cookies );

// cookie siempre se puden ver
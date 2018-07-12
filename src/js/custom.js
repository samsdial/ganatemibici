// argumentos
function miFuncion(a,b,c,d) {
    if(arguments.length !== 4){
        console.log("Necitas 4 parm");
        return;
    }
    //console.log(arguments);
    console.log(a+b+c+d);
}
miFuncion(10, 20, 30, 70, 30);
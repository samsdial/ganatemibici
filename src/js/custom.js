// Arreglos
// Son una colección de datos
//var arr = new Array();
var arr = [5, 4, 3, 2, 1];
console.log(arr[0], arr[4] );
// los Arreglos en Js son con base 0
// los Arreglos y sus funciones
// fun reverse -- Cambiar order
arr.reverse(); // Cambiar el order de imprimir
console.log(arr, arr[0], arr[4] );
//Fun map
arr = arr.map( function (elem) {
    elem *= elem;
    return elem;
} );
console.log(arr);
// raiz Cuadrada función Mat
arr = arr.map( Math.sqrt );
console.log(arr);
// Fun join --
arr = arr.join("|");
console.log(arr);

//Fun opuesta del join = a Split
arr = arr.split("|");
console.log(arr);
//Fun Push  -- se usa para agregar un elemento en la ultima pos del al array
arr.push("6");
console.log(arr);
//Fun unshif  -- se usa para agregar un elemento en la ultima pos del al array
arr.unshift("0");
console.log(arr);
//to toString -- hacer la representación textual del arreglo
console.log(arr.toString());
//Pop -- eliminar un elemento del arreglo
var elimine = arr.pop();
console.log(arr, elimine);
//Splice -- Parametros (escoger)
//Splice -- Parametros (escoger, eliminar(n)Cantidad)
//Splice -- Parametros (escoger, eliminar(n)Cantidad, Cambiar(n)Cantidad)
arr.splice( 1, 1, "10", "20" );
console.log(arr);
//Fun slice -- parametros (desde, hasta)
arr = arr.slice(3, 5);
console.log(arr);
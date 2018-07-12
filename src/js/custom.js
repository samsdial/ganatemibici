//Arreglos Parte dos
var arr = [
    true,
    {
        nombre:"Fernando",
        apellido:"ruiz"
    },
    function () {
        console.log("estoy en array")
    },
    function ( persona ) {
        console.log( persona.nombre + " " + persona.apellido);

    },
    [
        "Fernando",
        "Carlos",
        "Hernando",
        "Melisa",
        [
            "Juan",
            "Pedro",
            "Patricia",
            function () {
                console.log( this );
            }
        ]
    ]
];
//Fun length -- Saber la cantidad de elementos de un arreglo
console.log(arr.length);
console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre + " " + arr[1].apellido);
arr[2]();
arr[3](arr[1]);
//1ro Consulto la poscion del arreglo con el nombre arr que tiene un un arreglo y su poscion continene el nombre asi:
console.log(arr[4][4][1]);
var arreglo2 = arr[4][4];
arreglo2[1] = "Camilo!";
console.log(arreglo2);
console.log(arr);
arreglo2[3]();
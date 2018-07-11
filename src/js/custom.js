//GAME EL SEÑOR DE LOS ANILLOS
// Declarando el Jugador (funcion de primera clase se indica con la primera letra Mayuscula)
function Jugador(nombre) {
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;
    //1er METH **Curar a un jugador
    this.curar = function(jugadorObjetivo) {
        //jugadorObjetivo.pv = jugadorObjetivo.pv + 20; // Forma Larga
        if( this.sp >= 40 ){
            this.sp -= 40;
            jugadorObjetivo.pv += 20; // Forma corta
        }else{
            console.info(this.nombre + " no tiene SP");
        }
        this.estado( jugadorObjetivo );
    };
    //2do METH **TirarFlecha a un jugador
    this.tirarFlecha = function ( jugadorObjetivo ) {
        if ( jugadorObjetivo.pv > 40){
            jugadorObjetivo.pv -= 40;
        }else{
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre + " Está muerto.");
        }
        this.estado( jugadorObjetivo );
    };
    //2do METH **TirarFlecha a un jugador
    this.golpearEspada = function ( jugadorObjetivo ) {
        if ( jugadorObjetivo.pv > 20){
            jugadorObjetivo.pv -= 20;
        }else{
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre + " Está muerto.");
        }
        this.estado( jugadorObjetivo );
    };
    // METH **Estado de un jugador
    this.estado = function ( jugadorObjetivo) {
        console.info( this );
        console.info( jugadorObjetivo );
    }
};
// Definiendo mis jugadores
var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");
var aragon = new Jugador("aragon");

console.log( gandalf );
console.log( legolas );

gandalf.curar( legolas );
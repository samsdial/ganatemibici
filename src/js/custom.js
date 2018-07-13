// Operaciones con Fechas
var fecha = new Date(2018, 9, 20, 12, 59);
// console.log( fecha );
// Las fechas tienen un SEt
// fecha.setDate( 32 );
// console.log( fecha );

Date.prototype.sumarDias = function ( dias ) {
    this.setDate( this.getDate() + dias );
    return this;
};

Date.prototype.sumarAnios = function ( anios ) {
    this.setFullYear( this.getFullYear() + anios );
    return this;
};

Date.prototype.sumarHoras = function ( horas ) {
    this.setHours( this.getHours() + horas );
    return this;
};

Date.prototype.sumarSegun = function ( segundos ) {
    this.setSeconds( this.getSeconds() + segundos );
    return this;
};

console.log( fecha );
console.log( fecha.sumarDias(1) );
console.log( fecha.sumarAnios(15) );
console.log( fecha.sumarHoras(6) );
console.log( fecha.sumarSegun(60) );
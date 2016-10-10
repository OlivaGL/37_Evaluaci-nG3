/*
Piedra Papel o tijera

INICIO
3 turnos

jugadorUno
JugadorDos

piedra
papel
tijera

Combinaciones
piedra-papel = GANA PAPEL
piedra-tijera = GANA PIEDRA
tijera-papel = GANA TIJERA
papel-papel = EMPATE
piedra-piedra = EMPATE
tijera-tijera = EMPATE


Esta operación se repite 3 veces (turnos)
{
	Pide al jugadorUno un dato
	almacénalo en una variable datoJugadorUno

	Pide al jugadorDos un dato
	almacénalo en una variable datoJugadorDos
	
	Compara los datos proporcionados por los jugadores
	
	De acuerdo a las combinaciones, indica quién ganó y quién perdió.
}
Comprara los tres resultados e
Indica cuál jugador es el ganador final
FIN
*/

var combinacion = [];

for(i=1; i<=3; i++)
{
	var datoJugadorUno = prompt('Escribe el dato de tu elección: piedra, papel o tijera.');
	var datoJugadorDos = prompt('Escribe el dato de tu elección: piedra, papel o tijera.');
		
	if{
		datoJugadorUno = ("piedra") && datoJugadorDos = ("papel");
		
	}
}
alert("El ganador de este turno es el Jugador Uno");

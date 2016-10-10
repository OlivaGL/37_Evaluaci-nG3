/*
INICIO
Declara variable array vacía NOMBRES = [];
for (iteración comienza en 1;
la iteración va a parar hasta que sea menor o igual a 3;
la iteración aumenta de uno en uno)
{
Solicita al usuario que dé un nombre propio
guarda ese dato en una variable nueva USUARIONOMBRES
en el arreglo NOMBRES, almacena/agrega cada uno de los nombres nombres.push(usuarioNombres);
}
envía mensaje alert("Estos son los tres nombres que escribiste: " + nombres);
FIN
*/

var nombres = [];

for(i=1; i<=3; i++)
{
	var usuarioNombres = prompt('Escribe un nombre propio');
	nombres.push(usuarioNombres);
}
alert("Estos son los tres nombres que escribiste: " + nombres);
// Simulador de cajero de banco

/*
 * 1.Pedir que ingrese un monto a retirar 
    * 1.1 Que el monto sea un numero valido
    * 1.2 Que el numero sea positivo
 * 2.Que el monto no exceda sus fondos
 * 3.Retire su dinero
 * 4.Su fondo es ....
 */

let retirar = parseInt(prompt("Ingrese el monto a retirar de su cuenta"));
let fondosCuenta = 1000;
const contraseña = 1234;

while (isNaN(retirar) || retirar <= 0) {
    console.log("Número inválido");
    retirar = parseInt(prompt("Ingrese el monto a retirar de su cuenta"));
}
while (retirar > fondosCuenta) {
    console.log("Fondos insuficientes");
    retirar = parseInt(prompt("Ingrese un monto menor"));
}
let clave = parseInt(prompt("Digite contraseña"))
if (contraseña === clave) {
    console.log("Contraseña correcta \n Transacción válida");
    fondosCuenta = fondosCuenta - retirar;
    console.log("Su fondo actual es: $" + fondosCuenta);
} else {
    console.log("Contraseña incorrecta");
    retirar = parseInt(prompt("Ingrese nuevamente su contraseña"));
}
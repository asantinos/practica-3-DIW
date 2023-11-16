/**
 * Author: Alejandro Santos Garcia
 * 
 * Github Repository: https://github.com/asantinos/practica-3-DIW.git
 */

import { openNewWindow } from "./abrirVentanaExterior.js";
import { estacion } from "./estacion.js";
import { calcularEdad } from "./calcularEdad.js";
import { validarFecha } from "./validarFecha.js";

document.addEventListener("DOMContentLoaded", () => {
    // Declaramos las variables que vamos a utilizar.
    let nombre = "";
    let apellidos = "";
    let dia = "";
    let mes = "";
    let year = "";
    let fechaCorrecta = false;

    // Solicita al usuario que introduzca su nombre y apellidos.
    while (nombre === "") {
        nombre = prompt("¿Cuál es tu nombre?");
    }
    while (apellidos === "") {
        apellidos = prompt("¿Cuáles son tu apellidos?");
    }

    while (!fechaCorrecta) {
        // Solicita al usuario que introduzca el día de su nacimiento/
        while (isNaN(dia) || dia === "" || dia < 1 || dia > 31) {
            dia = prompt("¿Cuál es tu día de nacimiento?");
        }

        // Solicita al usuario que introduzca el mes de su nacimiento.
        while (isNaN(mes) || mes === "" || mes < 1 || mes > 12) {
            mes = prompt("¿Cuál es tu mes de nacimiento?");
        }

        // Solicita al usuario que introduzca el año de su nacimiento.
        while (isNaN(year) || year === "" || year > new Date().getFullYear()) {
            year = prompt("¿Cuál es tu año de nacimiento?");
        }

        // Comprabamos que el mes contenga el dia introducido.
        fechaCorrecta = validarFecha(parseInt(dia), parseInt(mes));

        // Si no es correcta, reiniciamos los valores de dia, mes y year, y volvemos a pedirlos.
        if (!fechaCorrecta) {
            alert("Fecha incorrecta. Introduzca una fecha válida.");
            dia = "";
            mes = "";
            year = "";
        }
    }

    // Abrimos el documento para escribir en él.
    document.open();

    // Titulo "PRACTICA 3 - DWEC"
    document.write("<h1>PRACTICA 3 - DWEC</h1> <hr>");

    // Saluda al usuario con "Buenos días nombre mostrandolo en parrafos html".
    document.write(`<p>Buenos días, <b>${nombre}</b></p>`);

    // Calcula la longitud del nombre del usuario, incluyendo espacios, y muestra "Tu nombre tiene XX caracteres, incluidos espacios."
    document.write(
        `<p>Tu nombre tiene <b>${
            nombre.length + apellidos.length
        }</b> caracteres, incluidos espacios.</p>`
    );

    // Encuentra la posición de la primera letra 'A' en el nombre del usuario y muestra "La primera letra A de tu nombre está en la posición: X".
    document.write(
        `<p>La <b>primera letra 'A'</b> de tu nombre está en la posición <b>${
            nombre.toLowerCase().indexOf("a") + 1
        }</b></p>`
    );

    // Encuentra la posición de la última letra 'A' en el nombre del usuario y muestra "La última letra A de tu nombre está en la posición: X".
    document.write(
        `<p>La <b>última letra 'A'</b> de tu nombre está en la posición <b>${
            nombre.toLowerCase().lastIndexOf("a") + 1
        }</b></p>`
    );

    // Muestra el nombre del usuario sin las tres primeras letras: "Tu nombre menos las 3 primeras letras es: XXXXXXXX".
    document.write(
        `<p>Tu nombre <b>menos las 3 primeras letras</b> es <b>${nombre.slice(
            3
        )} ${apellidos}</b></p>`
    );

    // Muestra el nombre del usuario en mayúsculas: "Tu nombre todo en mayúsculas es: XXXXXXXX".
    document.write(
        `<p>Tu nombre <b>todo en mayúsculas</b> es <b>${nombre.toUpperCase()} ${apellidos.toUpperCase()}</b></p>`
    );

    // Calcula la edad del usuario en años y muestra "Tu edad es: XX años".
    const edad = calcularEdad(parseInt(dia), parseInt(mes), parseInt(year));
    document.write(`<p>Tu edad es <b>${edad}</b> años</p>`);

    // Muestra la fecha de nacimiento del usuario como "Naciste un feliz XXXXXX del año XXXX".
    const estacionText = estacion(parseInt(dia), parseInt(mes));
    document.write(
        `<p>Naciste un feliz <b>${estacionText}</b> del año <b>${year}</b></p>`
    );

    // Calcula el coseno de 180 y muestra "El coseno de 180 es: XXXXXXXXXX".
    // 180 grados = PI radianes
    document.write(
        `<p>El <b>coseno de 180</b> es <b>${Math.cos(Math.PI)}</b></p>`
    );

    // Encuentra el número mayor de la lista (34, 67, 23, 75, 35, 19) y muestra "El número mayor de (34,67,23,75,35,19) es: XX".
    const numeros = [34, 67, 23, 75, 35, 19];
    document.write(
        `<p>El número mayor de <b>(${numeros})</b> es ${Math.max(
            ...numeros
        )}</p>`
    );

    // Genera un número aleatorio y muestra un ejemplo de número al azar: "Ejemplo de número al azar: XXXXXXXXXX".
    // Entre 0 y 100
    const numeroAleatorio = Math.floor(Math.random() * 100 + 1);
    document.write(
        `<p>Ejemplo de número al azar entre 0 y 100: <b>${numeroAleatorio}</b></p>`
    );

    document.close();

    // Crea un botón que al pulsarlo abra una nueva ventana no redimensionable.
    const newWindowButton = document.createElement("button");
    newWindowButton.textContent = "Abrir ventana";
    newWindowButton.addEventListener("click", openNewWindow);
    document.body.appendChild(newWindowButton);

    // Crea un botón que al pulsarlo recargue la página actual.
    const reloadButton = document.createElement("button");
    reloadButton.textContent = "Reiniciar";
    reloadButton.addEventListener("click", () => {
        window.location.reload();
    });
    document.body.appendChild(reloadButton);
});

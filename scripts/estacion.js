// Funcion para calcular la estacion del año en funcion de la fecha de nacimiento.

export const estacion = (dia, mes) => {
    if (
        (dia >= 21 && mes === 3) ||
        mes === 4 ||
        mes === 5 ||
        (dia <= 20 && mes === 6)
    ) {
        return "primavera";
    } else if (
        (dia >= 21 && mes === 6) ||
        mes === 7 ||
        mes === 8 ||
        (dia <= 22 && mes === 9)
    ) {
        return "verano";
    } else if (
        (dia >= 23 && mes === 9) ||
        mes === 10 ||
        mes === 11 ||
        (dia <= 20 && mes === 12)
    ) {
        return "otoño";
    } else if (
        (dia >= 21 && mes === 12) ||
        mes === 1 ||
        mes === 2 ||
        (dia <= 20 && mes === 3)
    ) {
        return "invierno";
    }
};

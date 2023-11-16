// Funcion para validar la fecha de nacimiento del usuario pasandole dia, mes y año de nacimiento.

export const validarFecha = (dia, mes) => {
    if (mes === 2 && dia > 29) {
        return false;
    } else if (
        (mes === 4 || mes === 6 || mes === 9 || mes === 11) &&
        dia > 30
    ) {
        return false;
    } else if (
        (mes === 1 ||
            mes === 3 ||
            mes === 5 ||
            mes === 7 ||
            mes === 8 ||
            mes === 10 ||
            mes === 12) &&
        dia > 31
    ) {
        return false;
    } else {
        return true;
    }
};

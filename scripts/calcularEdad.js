// Funcion para calcular la edad del usuario en años pasandole dia, mes y año de nacimiento.

export const calcularEdad = (dia, mes, year) => {
    if (mes > new Date().getMonth() + 1) {
        return new Date().getFullYear() - year - 1;
    } else if (mes === new Date().getMonth() + 1) {
        if (dia > new Date().getDate()) {
            return new Date().getFullYear() - year - 1;
        } else {
            return new Date().getFullYear() - year;
        }
    } else {
        return new Date().getFullYear() - year;
    }
};

// Crear funcion que abra una nueva ventana no redimensionable

export const openNewWindow = () => {
    window.open("ventanaExterior.html", "", "resizable=no");
};

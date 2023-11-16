document.addEventListener("DOMContentLoaded", () => {
    document.open();
    document.write(
        `
        <h1>Ejemplo de Ventana Nueva</h1>
        <p><b>URL Completa:</b> ${window.location.href}</p>
        <p><b>Protocolo utilizado:</b> ${window.location.protocol}</p>
        <iframe width="800" height="600" src="https://hotellallastra.app/inicio"></iframe>
        <br>
        <button onclick="window.close()">Cerrar ventana</button>
        `
    );
    document.close();
});

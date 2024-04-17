document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Dibujar el rectángulo vertical con círculos
    drawShapes();

    // Función para dibujar el rectángulo y los círculos
    function drawShapes() {
        // Dibujar el rectángulo vertical
        ctx.fillStyle = "lightblue";
        ctx.fillRect(150, 50, 100, 300);

        // Dibujar los círculos dentro del rectángulo
        // Primer círculo (arriba)
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(200, 100, 30, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke(); // Dibujar borde negro
        // Segundo círculo (centro)
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.arc(200, 200, 30, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke(); // Dibujar borde negro
        // Tercer círculo (abajo)
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(200, 300, 30, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke(); // Dibujar borde negro
    }
});

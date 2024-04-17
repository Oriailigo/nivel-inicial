document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const redButton = document.getElementById("redButton");

    let isPainting = false;
    let lastX = 0;
    let lastY = 0;
    let currentColor = "red"; // Color de pintura inicial

    // Cargar la imagen en el canvas
    const image = new Image();
    image.onload = function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    image.crossOrigin = "anonymous"; // Permitir el uso de imágenes desde dominios externos
    image.src = "https://storage.googleapis.com/artlab-public.appspot.com/share/LCTYA5PHCZX4.png";

    // Función para iniciar la pintura al hacer clic y mover el mouse
    canvas.addEventListener("mousedown", function(e) {
        isPainting = true;
        draw(e);
    });

    canvas.addEventListener("mousemove", function(e) {
        if (isPainting) {
            draw(e);
        }
    });

    canvas.addEventListener("mouseup", function() {
        isPainting = false;
    });

    // Función para dibujar un trazo con el color actual
    function draw(e) {
        if (isPainting) {
            const x = e.offsetX;
            const y = e.offsetY;
            ctx.fillStyle = currentColor;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Evento clic para cambiar el color de pintura al rojo
    redButton.addEventListener("click", function() {
        currentColor = "red";
    });

    // Función para limpiar el canvas y restaurar la imagen original
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }

    // Evento clic para limpiar el canvas
    document.getElementById("clearButton").addEventListener("click", clearCanvas);
});

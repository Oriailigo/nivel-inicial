document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    let isDrawing = false;

    // Iniciar dibujo en blanco y negro
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Función para colorear al hacer clic y mover el mouse
    canvas.addEventListener("mousedown", function(e) {
        isDrawing = true;
        draw(e);
    });

    canvas.addEventListener("mousemove", function(e) {
        if (isDrawing) {
            draw(e);
        }
    });

    canvas.addEventListener("mouseup", function() {
        isDrawing = false;
    });

    function draw(e) {
        if (isDrawing) {
            const x = e.offsetX;
            const y = e.offsetY;
            const color = ctx.fillStyle;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// Función para cambiar el color de dibujo
function setColor(color) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
}

// Función para limpiar todo el dibujo en el lienzo
function clearCanvas() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Función para restablecer el color de dibujo al color negro
function resetColor() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
}

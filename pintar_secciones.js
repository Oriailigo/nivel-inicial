document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const redButton = document.getElementById("redButton");
    const greenButton = document.getElementById("greenButton");
    const yellowButton = document.getElementById("yellowButton");

    let isPainting = false;
    let currentColor = "red"; // Color de pintura por defecto

    // Cargar la imagen en el canvas
    const image = new Image();
    image.onload = function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    image.crossOrigin = "anonymous";
    image.src = "https://storage.googleapis.com/artlab-public.appspot.com/share/AVUZ5ER7K77O.png";

    // Función para pintar un área en blanco con el color actual
    function fillArea(startX, startY) {
        const stack = [[startX, startY]];
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        const targetColor = getColorArray(currentColor);

        while (stack.length > 0) {
            const [x, y] = stack.pop();
            const index = (y * canvas.width + x) * 4;

            if (data[index] === 255 && data[index+1] === 255 && data[index+2] === 255) {
                // Llenar el píxel con el color actual
                data[index] = targetColor[0];   // Componente rojo
                data[index+1] = targetColor[1]; // Componente verde
                data[index+2] = targetColor[2]; // Componente azul

                if (x > 0) stack.push([x - 1, y]); // Izquierda
                if (x < canvas.width - 1) stack.push([x + 1, y]); // Derecha
                if (y > 0) stack.push([x, y - 1]); // Arriba
                if (y < canvas.height - 1) stack.push([x, y + 1]); // Abajo
            }
        }

        // Aplicar los datos modificados al canvas
        ctx.putImageData(imageData, 0, 0);
    }

    // Función para obtener el array de colores según el nombre
    function getColorArray(color) {
        switch(color) {
            case "red":
                return [255, 0, 0];   // Rojo
            case "green":
                return [0, 255, 0];   // Verde
            case "yellow":
                return [255, 255, 0]; // Amarillo
            default:
                return [0, 0, 0];     // Negro (en caso de error)
        }
    }

    // Evento clic para cambiar el color de pintura a rojo
    redButton.addEventListener("click", function() {
        currentColor = "red";
    });

    // Evento clic para cambiar el color de pintura a verde
    greenButton.addEventListener("click", function() {
        currentColor = "green";
    });

    // Evento clic para cambiar el color de pintura a amarillo
    yellowButton.addEventListener("click", function() {
        currentColor = "yellow";
    });

    // Evento clic en el canvas para iniciar el llenado de área
    canvas.addEventListener("click", function(e) {
        const x = e.offsetX;
        const y = e.offsetY;
        fillArea(x, y);
    });
});

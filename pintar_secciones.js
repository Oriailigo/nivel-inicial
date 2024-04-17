document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const redButton = document.getElementById("redButton");

    let isPainting = false;
    let currentColor = "red"; // Color de pintura

    // Cargar la imagen en el canvas
    const image = new Image();
    image.onload = function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    image.crossOrigin = "anonymous"; // Permitir el uso de imágenes desde dominios externos
    image.src = "https://storage.googleapis.com/artlab-public.appspot.com/share/LCTYA5PHCZX4.png";

    // Función para pintar un área en blanco con el color rojo al hacer clic
    canvas.addEventListener("click", function(e) {
        const x = e.offsetX;
        const y = e.offsetY;
        const imageData = ctx.getImageData(x, y, 1, 1); // Obtener los datos de píxeles en el punto de clic
        const pixelColor = imageData.data; // Array con los componentes RGBA del píxel

        // Verificar si el píxel está en blanco (R = 255, G = 255, B = 255)
        if (pixelColor[0] === 255 && pixelColor[1] === 255 && pixelColor[2] === 255) {
            fillArea(x, y, currentColor);
        }
    });

    // Función para llenar un área en blanco con el color especificado
    function fillArea(startX, startY, color) {
        const stack = [[startX, startY]]; // Pila para almacenar los píxeles a llenar
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        while (stack.length > 0) {
            const [x, y] = stack.pop();

            // Verificar si el píxel en la posición (x, y) está en blanco
            const index = (y * canvas.width + x) * 4;
            if (data[index] === 255 && data[index+1] === 255 && data[index+2] === 255) {
                // Llenar el píxel con el color especificado
                data[index] = color === "red" ? 255 : data[index]; // Componente rojo
                data[index+1] = color === "red" ? 0 : data[index+1]; // Componente verde
                data[index+2] = color === "red" ? 0 : data[index+2]; // Componente azul

                // Agregar píxeles adyacentes a la pila (arriba, abajo, izquierda, derecha)
                if (x > 0) stack.push([x - 1, y]); // Izquierda
                if (x < canvas.width - 1) stack.push([x + 1, y]); // Derecha
                if (y > 0) stack.push([x, y - 1]); // Arriba
                if (y < canvas.height - 1) stack.push([x, y + 1]); // Abajo
            }
        }

        // Aplicar los datos de píxeles modificados al canvas
        ctx.putImageData(imageData, 0, 0);
    }

    // Evento clic para cambiar el color de pintura al rojo
    redButton.addEventListener("click", function() {
        currentColor = "red";
    });
});

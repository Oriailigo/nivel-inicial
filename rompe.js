document.addEventListener('DOMContentLoaded', function() {
    const originalImage = document.getElementById('original-image');
    const imageContainer = document.querySelector('.original-image');

    // Dividir la imagen en dos piezas
    const piece1 = createPiece(0, 0, 200, 400);
    const piece2 = createPiece(-200, 0, 200, 400);

    // Agregar las piezas al contenedor de la imagen original
    imageContainer.appendChild(piece1);
    imageContainer.appendChild(piece2);

    // Función para crear una pieza de la imagen
    function createPiece(x, y, width, height) {
        const piece = document.createElement('div');
        piece.className = 'piece';
        piece.style.backgroundImage = `url('/icons/pintar.png')`;
        piece.style.backgroundSize = 'cover';
        piece.style.backgroundPosition = `${-x}px ${-y}px`;
        piece.style.left = `${x}px`;
        piece.style.top = `${y}px`;
        piece.style.width = `${width}px`;
        piece.style.height = `${height}px`;

        // Event listeners para mover la pieza con el mouse
        let isDragging = false;
        let offsetX, offsetY;

        piece.addEventListener('mousedown', function(e) {
            isDragging = true;
            offsetX = e.clientX - parseInt(piece.style.left);
            offsetY = e.clientY - parseInt(piece.style.top);
        });

        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                const newX = e.clientX - offsetX;
                const newY = e.clientY - offsetY;

                piece.style.left = `${newX}px`;
                piece.style.top = `${newY}px`;
            }
        });

        piece.addEventListener('mouseup', function() {
            isDragging = false;
        });

        return piece;
    }
});

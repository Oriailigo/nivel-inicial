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
    

   // https://media.istockphoto.com/vectors/black-and-white-child-helping-old-woman-cross-the-street-vector-id1197449058?k=20&m=1197449058&s=170667a&w=0&h=nMgnJlsLHCIYhzgW8x1mHxUmlhMKVplT8J7EDOgb60Q=
// https://www.bing.com/images/search?view=detailV2&ccid=uTc5A2NO&id=107B5F0C5647589A3522E6A78FC59E39E5C12D7B&thid=OIP.uTc5A2NOqBIbcnZnQCS6awHaHa&mediaurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fpolice-helping-old-woman-coloring-page-kids_576561-5317.jpg%3Fw%3D1060&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.b9373903634ea8121b7276674024ba6b%3Frik%3Dey3B5TmexY%252bn5g%26pid%3DImgRaw%26r%3D0&exph=1060&expw=1060&q=crear+una+imagen+en+blanco+y+negro+de+un+ni%c3%b1o+con+su+madre+cruzando+la+calle.+debe+representar+la+seguridad+vial.+tipo+caricatura.&simid=607995425144461976&form=IRPRST&ck=EF8940DE9C4A178D0A4A806D356BED1F&selectedindex=3&itb=0&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_KR2aWX6o*cp_C8DCF97E535D062A620C48BA7513481C*mid_658C7D726F22747EAEA1DE4BE943C479A9410ED1*simid_608018712402004627*thid_OIP.KR2aWX6o0703OslXyYNJHgAAAA&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0
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

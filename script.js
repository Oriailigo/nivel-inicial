// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {

  var loadingVideo = document.getElementById("loading-video");
  var content = document.getElementById("mostrarContenido");

    // Temporizador para ocultar el video después de 10 segundos
    setTimeout(function() {

      loadingVideo.style.display = "none";
      content.style.display = "block";
      

    }, 11000); // 10000 milisegundos = 10 segundos


  });
  
  
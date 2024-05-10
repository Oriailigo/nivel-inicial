// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Temporizador para ocultar el video después de 10 segundos
    setTimeout(function() {
      var loadingVideo = document.getElementById("loading-video");
      var content = document.getElementById("mostrarContenido");
      loadingVideo.style.display = "none";
      content.style.display = "block";
    }, 5000); // 10000 milisegundos = 10 segundos
  });
  
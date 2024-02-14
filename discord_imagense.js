function getImagesByAltAndDownload(alt) {
    var allImages = document.querySelectorAll('img[alt="' + alt + '"]');
    var images = [];
    for (var i = 0, len = allImages.length; i < len; ++i) {
        images.push(allImages[i].src.split("?")[0] + '?size=4096');
    }
  
    var consoleData = images.join('\n'); // Convertir las URL de las imágenes en una sola cadena separada por saltos de línea

    var file = new Blob([consoleData], { type: 'text/plain' });

    var a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = 'images.txt'; // Nombre del archivo a descargar

    // Simular un clic en el enlace para iniciar la descarga
    a.click();

    // Liberar el objeto URL creado para evitar fugas de memoria
    URL.revokeObjectURL(a.href);
}

// Ejemplo de uso: Llama a esta función pasando el atributo "alt" deseado para obtener las imágenes y descargar sus URL en un archivo
getImagesByAltAndDownload('alt_deseado');

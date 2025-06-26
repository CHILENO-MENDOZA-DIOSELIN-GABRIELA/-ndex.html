document.getElementById('addImageBtn').addEventListener('click', function() {
    const imageUrl = document.getElementById('imageUrl').value;
    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Imagen de la galería';
        img.addEventListener('click', function() {
            selectImage(img);
        });
        document.getElementById('gallery').appendChild(img);
        document.getElementById('imageUrl').value = ''; // Limpiar el campo de entrada
    } else {
        alert('Por favor, ingresa una URL de imagen válida.');
    }
});

function selectImage(selectedImg) {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.classList.remove('selected');
    });
    selectedImg.classList.add('selected');
}

document.getElementById('removeImageBtn').addEventListener('click', function() {
    const selectedImg = document.querySelector('.gallery img.selected');
    if (selectedImg) {
        selectedImg.remove();
    } else {
        alert('No hay ninguna imagen seleccionada para eliminar.');
    }
});

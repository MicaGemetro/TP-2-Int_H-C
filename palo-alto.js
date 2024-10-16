<script>
    // Función para cambiar la imagen principal al hacer clic en una miniatura
    document.querySelectorAll('.thumbnail-images img').forEach(img => {
        img.addEventListener('click', function() {
            document.getElementById('mainImage').src = this.src;
        });
    });
</script>

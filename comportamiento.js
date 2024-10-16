function initMap() {
    var options = {
      zoom: 13,
      center: {lat: -34.603722, lng: -58.381592}  // Ajusta según tu ubicación deseada
    }
    var map = new google.maps.Map(document.getElementById('mapa'), options);

    // Añadir un pin de ejemplo
    var marker = new google.maps.Marker({
      position: {lat: -34.54771, lng: -58.46931},
      map: map
    });

    var marker = new google.maps.Marker({
      position: {lat: -34.57901, lng: -58.47865},
      map: map
    });

    var marker = new google.maps.Marker({
      position: {lat: -34.59095, lng: -58.42892},
      map: map
    });

    var marker = new google.maps.Marker({
      position: {lat: -34.59358, lng: -58.40492},
      map: map
    });

    var marker = new google.maps.Marker({
      position: {lat: -34.59843, lng: -58.40807},
      map: map
    });

    var marker = new google.maps.Marker({
      position: {lat: -34.61768, lng: -58.40646},
      map: map
    });

    var marker = new google.maps.Marker({
      position: {lat: -34.60612, lng: -58.39811},
      map: map
    });

    var marker = new google.maps.Marker({
      position: {lat: -34.6117, lng: -58.38351},
      map: map
    });

    var marker = new google.maps.Marker({
      position: {lat: -34.61494, lng: -58.37664},
      map: map
    });

    var marker = new google.maps.Marker({
      position: {lat: -34.60374, lng: -58.37851},
      map: map
    });

  }


function toggleDatos() {
    const movil = document.getElementById('busqueda-movil');
    const bajarIcon = document.getElementById('bajar');

    // Verificamos si los datos están ocultos o visibles
    if (movil.style.display === 'none' || movil.style.display === '') {
        // Si están ocultos, los mostramos
        movil.style.display = 'block';
        // Cambiamos el icono a una flecha hacia arriba
        bajarIcon.classList.remove('fa-chevron-down');
        bajarIcon.classList.add('fa-chevron-up');
    } else {
        // Si están visibles, los ocultamos
        movil.style.display = 'none';
        // Cambiamos el icono a una flecha hacia abajo
        bajarIcon.classList.remove('fa-chevron-up');
        bajarIcon.classList.add('fa-chevron-down');
    }
}

function toggleDatos() {
    const busquedaMovil = document.getElementById("busqueda-movil");
    const searchBoton = document.getElementById("search-boton");
    
    // Mostrar u ocultar el cuadro de búsqueda móvil
    if (busquedaMovil.style.display === "block") {
        busquedaMovil.style.display = "none";
    } else {
        busquedaMovil.style.display = "block";
    }
}

window.addEventListener('resize', function () {
    const busquedaMovil = document.getElementById("busqueda-movil");
    const width = window.innerWidth;

    // Ocultar el cuadro de búsqueda móvil en pantallas grandes
    if (width > 768) {
        busquedaMovil.style.display = "none";
    }
});




window.onload = function() {

    // Definir los alojamientos
    const alojamientos = [
        { 
            id: 1, 
            nombre: 'Palo Alto Student House', 
            precio: 10000, 
            ubicacion: 'Palermo', 
            caracteristicas: ['wifi', 'amueblado', 'aire acondicionado', 'casa compartida'], 
            imagen: 'palo-alto.jpg', 
            descripcion: 'Un alojamiento cómodo para estudiantes de todo el mundo. Habitaciones con aire acondicionado (frio/calor), cama sommier, placard, escritorio de estudio y baño compartido o privado. Además de terraza, jardin con parrilla y cocina totalmente equipada.'
        },
        { 
            id: 2, 
            nombre: 'Casarica Coliving Obelisco', 
            precio: 12500, 
            ubicacion: 'ciudad autónoma Buenos Aires', 
            caracteristicas: ['wifi', 'casa compartida', 'estacionamiento'], 
            imagen: 'casarica.jpg', 
            descripcion: 'Alojamiento para jóvenes de todo el mundo que vengan a buenos aires a estudiar, trabajar o viajar. Habitaciones privadas y compartidas (individuales, dobles y triples). Cocina totalmente equipada, comedor, estar, microcine, sala de estudio. Ubicada cerca del Obelisco, en el centro de la ciudad de Buenos Aires.'
        },
        { 
            id: 3, 
            nombre: 'Residencia Universitaria Olivia', 
            precio: 8500, 
            ubicacion: 'Núñez', 
            caracteristicas: ['wifi', 'amueblado', 'departamento'], 
            imagen: 'olivia.jpg', 
            descripcion: 'Residencia cercana a Universidades de Belgrano y Palermo. Disponemos de estufa de tiro balanceado, ventilador de techo y un escritorio individual para cada persona. Hay dos terrazas para recreación y lavadero. Cocinas totalmente equipadas, heladeras, anafes, hornos eléctricos y microondas.'
        },
        { 
            id: 4, 
            nombre: 'JCF Residence', 
            precio: 9000, 
            ubicacion: 'ciudad autónoma Buenos Aires', 
            caracteristicas: ['wifi', 'amueblado', 'estacionamiento', 'aire acondicionado', 'departamento'], 
            imagen: 'jcf.jpg', 
            descripcion: 'Alojamiento cercano a Universidades como la UBA y la de Palermo. equipado con aire acondicionado (frio/calor), placard personal y amplias mesas para estudiar. Cocinas equipadas con anafes y hornos eléctricos, microondas, heladera/freezer, alacenas y utensilios. Ambiente tranquilo y seguro.'
        },
        { 
            id: 5, 
            nombre: 'Residencia Scala Coeli', 
            precio: 7850, 
            ubicacion: 'ciudad autónoma Buenos Aires', 
            caracteristicas: ['wifi', 'amueblado', 'aire acondicionado', 'casa compartida'], 
            imagen: 'coeli.png', 
            descripcion: 'Alojamiento ubicada en el centro de la ciudad de Buenos Aires, para estudiantes locales y extranjeros. Con distancias mínimas a Universidades. Cuenta con cocina completa, sala comedor, sala de estudios, sala de estar y las sábanas estan incluidas. Además se encuentra a 10 cuadras del Obelisco.'
        },
        { 
            id: 6, 
            nombre: 'Residencia Universitaria Gusti', 
            precio: 15650, 
            ubicacion: 'ciudad autónoma Buenos Aires', 
            caracteristicas: ['wifi', 'amueblado', 'estacionamiento', 'aire acondicionado', 'casa compartida'], 
            imagen: 'gusti.jpg', 
            descripcion: 'Alojamiento cerca de Universidades, de Centros de Estudios de Idiomas y Tango. Cuenta con comedor, lavadero, área con aire acondicionado, emergencias médicas y cocina completa con microondas. Ambiente para estudiantes de todas las edades y carreras.'
        }
    ];

    // Obtener los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    
    // Obtener valores de los filtros
    const precio = params.get('precio');
    const ubicacion = params.get('ubicacion');
    const caracteristicas = params.getAll('caracteristica'); // Devuelve una lista de características seleccionadas

    // Si no se especifica ningún filtro, mostrar todos los alojamientos
    if (!precio && !ubicacion && caracteristicas.length === 0) {
        mostrarResultados(alojamientos);
        return; // Salir de la función si se muestran todos
    }

    // Filtrar los alojamientos por precio
    let resultadosPorPrecio = precio ? 
        alojamientos.filter(alojamiento => alojamiento.precio === parseInt(precio)) :
        [];

    // Filtrar los alojamientos por características
    let resultadosPorCaracteristicas = caracteristicas.length > 0 ? 
        alojamientos.filter(alojamiento => 
            caracteristicas.some(caract => alojamiento.caracteristicas.includes(caract))
        ) : 
        []; 

    // Filtrar los alojamientos por ubicación
    let resultadosPorUbicacion = ubicacion ? 
        alojamientos.filter(alojamiento => 
            alojamiento.ubicacion.toLowerCase().includes(ubicacion.toLowerCase())
        ) : 
        [];

    // Combinar todos los resultados (eliminando duplicados)
    let resultados = [...new Set([...resultadosPorPrecio, ...resultadosPorCaracteristicas, ...resultadosPorUbicacion])];

    // Mostrar resultados
    mostrarResultados(resultados);
};

// Función para mostrar resultados
function mostrarResultados(resultados) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpiar el contenedor de resultados


    if (resultados.length > 0) {
        if (resultados.length === 1) {
            resultadosDiv.classList.add('resultado-uno'); // Clase especial si solo hay un resultado
        } else {
            resultadosDiv.classList.remove('resultado-uno'); // Elimina la clase si hay más de uno
        }

        resultados.forEach(alojamiento => {
            const alojamientoDiv = document.createElement('div');
            alojamientoDiv.className = 'alojamiento';


            // Aquí se determina si hay una página específica para el alojamiento
            let detallesUrl = '';
            if (alojamiento.nombre === 'Palo Alto Student House') {
                detallesUrl = 'palo-alto.html'; // Página personalizada para "Palo Alto"
            } else if (alojamiento.nombre === 'Casarica Coliving Obelisco') {
                detallesUrl = 'casarica-obelisco.html'; // Página personalizada para "Casarica"
            } else {
                detallesUrl = `detalles.html?id=${alojamiento.id}`; // Página genérica para otros alojamientos
            }

            alojamientoDiv.innerHTML = `
                <img src="${alojamiento.imagen}" alt="${alojamiento.nombre}">
                <h3>${alojamiento.nombre}</h3>
                <p><b>Precio:</b> ${alojamiento.precio}</p>
                <p><b>Ubicación:</b> ${alojamiento.ubicacion}</p>
                <p>${alojamiento.descripcion}</p>
                <a href="${detallesUrl}" class="btn-detalles">Ver más detalles</a>
            `;
            resultadosDiv.appendChild(alojamientoDiv);
        });
    } else {
        resultadosDiv.innerHTML = '<p>No se encontraron resultados que coincidan con los filtros seleccionados.</p>';
    }
}
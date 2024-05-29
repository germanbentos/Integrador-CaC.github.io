document.addEventListener("DOMContentLoaded", function() {
    function ejecutar(parametro) {
        const path = "https://image.tmdb.org/t/p/original/";
        const contenedor = document.getElementById("contenedor");
        const API_KEY = "6ef51d843bfe08d642d218c1c25c2915";
        const URL_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${parametro}`;

        fetch(URL_API)
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('Error en la solicitud de la API');
                }
                return respuesta.json();
            })
            .then((resultado) => {
                console.log(resultado);
                contenedor.innerHTML = ""; // Limpiar el contenedor antes de insertar nuevos datos
                resultado.results.forEach(pelicula => {
                    if (pelicula.poster_path) {
                        const tarjeta = document.createElement('div');
                        tarjeta.id = 'tarjeta';
                        
                        const contenedorImagen = document.createElement('div');
                        contenedorImagen.id = 'contenedorImagen';
                        const imagen = document.createElement('img');
                        imagen.src = `${path}${pelicula.poster_path}`;
                        imagen.id = 'imagen';
                        contenedorImagen.appendChild(imagen);

                        const texto = document.createElement('div');
                        texto.id = 'texto';
                        const p = document.createElement('p');
                        p.textContent = pelicula.title;
                        texto.appendChild(p);

                        tarjeta.appendChild(contenedorImagen);
                        tarjeta.appendChild(texto);
                        contenedor.appendChild(tarjeta);
                    }
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    ejecutar("lo ultimo");
});

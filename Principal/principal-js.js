function ejecutar(parametro) {
    const path = "https://image.tmdb.org/t/p/original/";
  
    const contenedor = document.getElementById("contenedor");
  
    let URL_API =
      "https://api.themoviedb.org/3/search/movie?api_key=6ef51d843bfe08d642d218c1c25c2915&language=es-ES&query=${encodeURIComponent(parametro)}";
  
    fetch(URL_API)
     .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error(`HTTP error! status: ${respuesta.status}`);
      }
      return respuesta.json();
    })
    .then((resultado) => {
      console.log(resultado);
      contenedor.innerHTML = "";
      for (const pelicula of resultado.results) {
        if (pelicula.poster_path) {
          contenedor.innerHTML += `
            <div class='tarjeta'>
              <div class='contenedorImagen'>
                <img src="${path}${pelicula.poster_path}" class='imagen' alt='Poster de ${pelicula.title}'>
              </div>
              <div class='texto'>
                <p>${pelicula.title}</p>
              </div>
            </div>
          `;
        }
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      contenedor.innerHTML = "<p>Error al cargar los datos. Por favor, intenta de nuevo más tarde.</p>";
    });
}

ejecutar("lo ultimo");
  ejecutar("lo ultimo");

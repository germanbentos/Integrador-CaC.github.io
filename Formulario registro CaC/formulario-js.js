var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var contraseña = document.getElementById("contraseña");
var opcionPaises = document.querySelector("#opcion_paises");
var paises = document.querySelector("#paises");
var contenidoMenuDesplegable = document.querySelector("#contenido_menu_desplegable");
var menu_desplegable = document.querySelector("#menu_desplegable");
var menu_desplegable_svg = document.querySelector("#menu_desplegable_svg");
var contenedorVacio = document.querySelector("#contenedor_vacio");
var btnEnviar = document.querySelector("#btn_enviar");
var btnCerrar = document.querySelector("#cerrar_pop_up");
var popUpValidacion = document.querySelector("#pop_up_validacion");
var popUpRegistro = document.querySelector("#pop_up_registro");

document.querySelectorAll("#opcion_paises > .paises") .forEach((paises) => {
    paises.addEventListener("click",(e) => {
        e.preventDefault();
         contenidoMenuDesplegable.innerHTML = e.currentTarget.innerHTML;
         opcionPaises.classList.toggle("active");
         paises.classList.toggle("active");
    })
});

menu_desplegable_svg.addEventListener("click", () => {
    opcionPaises.classList.toggle("active");
    paises.classList.toggle("active");
    
})

btnEnviar.addEventListener("click", (e) => { 
    if (!nombre.value || !apellido.value || !email.value || !contraseña.value ){
        document.getElementById("contenedor_pop_up_validacion").style.display = "flex";
        document.getElementById("pop_up_validacion").style.display = "flex";
        document.getElementById("msj1").style.display = "flex";
} else{
    document.getElementById("contenedor_pop_up_registro").style.display = "flex";
    document.getElementById("pop_up_registro").style.display = "flex";
    document.getElementById("msj2").style.display = "flex";
}
})
function cerrarPopUp(){
    document.getElementById("contenedor_pop_up_validacion").style.display = "none";
    document.getElementById("contenedor_pop_up_registro").style.display = "none";
    document.getElementById("pop_up_validacion").style.display = "none";
    document.getElementById("pop_up_registro").style.display = "none";
    document.getElementById("msj1").style.display = "none";
    document.getElementById("msj2").style.display = "none";
    }

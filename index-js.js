var usuario = document.getElementById("usuario");
var contrasena = document.getElementById("contrasena");
var root = "@admi";
var btn = document.getElementById ("btn");
var modal = document.getElementById("pop_up");
var msj1 = document.getElementById("msj1");
var msj2 = document.getElementById("msj2");
var btnCerrar = document.getElementById("cerrar_pop_up");


btn.addEventListener("click", () => {
    var modal = document.getElementById("pop_up");
    var msj1 = document.getElementById("msj1");
    var msj2 = document.getElementById("msj2");

    if(usuario.value && contrasena.value == root){
        window.location.href = "./Principal/principal.html";
    } else {
        document.getElementById("contenedor_pop_up").style.display = "flex";
        document.getElementById("pop_up").style.display = "flex";
        document.getElementById("msj1").style.display = "flex";
        document.getElementById("msj2").style.display = "flex";
    }
})

function cerrarPopUp(){
    document.getElementById("contenedor_pop_up").style.display = "none";
    document.getElementById("pop_up").style.display = "none";
    document.getElementById("msj1").style.display = "none";
    document.getElementById("msj2").style.display = "none";
    document.getElementById("usuario").value = "";
    document.getElementById("contrasena").value = "";
    
    }
    
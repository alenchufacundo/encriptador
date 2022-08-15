const contenedorErrores = document.querySelector(".encriptador__error")

//validarCaracteres
function validarMensaje(){
    let erroresPrevios = contenedorErrores.querySelectorAll(".error")
    for (let err of erroresPrevios){
        contenedorErrores.removeChild(err);
    }
    let validarMensaje = encriptador__mensaje.value;
    let letrasPermitidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for(let letra of validarMensaje){
        if (!letrasPermitidas.includes(letra)){
            var parrafo = document.createElement("p");
            parrafo.setAttribute("class","error");
            mensajeError.appendChild(parrafo);
            parrafo.textContent = "No se admiten mayúsculas o caracteres especiales ";
            break;
        }
    }
    contenedorErrores.appendChild(mensajeError);
    if (contenedorErrores.children.length === 0){
        return true;
    }
    return false;
}

//creacion de funcion de encriptado

function encriptacion(){
    if(!validarMensaje()) return;
    let mensaje = document.getElementById("encriptador__mensaje").value.toLowerCase();
    let mensajeEncriptado = mensaje.replace(/e/igm,"enter");
    mensajeEncriptado = mensajeEncriptado.replace(/i/igm,"imes");
    mensajeEncriptado = mensajeEncriptado.replace(/a/igm,"ai");
    mensajeEncriptado = mensajeEncriptado.replace(/o/igm,"ober");
    mensajeEncriptado = mensajeEncriptado.replace(/u/igm,"ufat");

    let imgChange = document.querySelector(".encriptador__img");
    imgChange.src = "./images/candadocerrado.png";
    document.querySelector(".encriptador__title").style.display = "none";
    document.querySelector(".encriptador__textarea").innerHTML = mensajeEncriptado;
    document.querySelector(".encriptador__button--copy").style.display = "show";
    document.querySelector(".encriptador__button--copy").style.display = "inherit";
}

//funcion desencriptado

function desencriptacion(){
    if(!validarMensaje()) return;
    let mensaje = document.getElementById("encriptador__mensaje").value.toLowerCase();
    let mensajeEncriptado = mensaje.replace(/enter/igm,"e");
    mensajeEncriptado = mensajeEncriptado.replace(/imes/igm,"i");
    mensajeEncriptado = mensajeEncriptado.replace(/ai/igm,"a");
    mensajeEncriptado = mensajeEncriptado.replace(/ober/igm,"o");
    mensajeEncriptado = mensajeEncriptado.replace(/ufat/igm,"u");

    let imgChange = document.querySelector(".encriptador__img");
    imgChange.src = "./images/candadoabierto.png"
    document.querySelector(".encriptador__title").style.display = "none";
    document.querySelector(".encriptador__textarea").innerHTML = mensajeEncriptado;
    document.querySelector(".encriptador__textarea").style.display = "show";
    document.querySelector(".encriptador__button--copy").style.display = "inherit";
}
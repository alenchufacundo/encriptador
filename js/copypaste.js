//copiar mensaje

function copiarMensaje(){
    let contenidoEncriptado = document.querySelector(".encriptador__textarea");
    navigator.clipboard.writeText(contenidoEncriptado.textContent);
    swal("Mensaje Copiado");   
}
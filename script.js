const textArea = document.querySelector(".text-area");
const mensajeEncriptado = document.querySelector(".mensaje-encriptado");

//Función para el boton de encriptar
function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensajeEncriptado.value = textoEncriptado
    textArea.value = "";
    mensajeEncriptado.style.backgroundImage = "none";
}

//Función para encriptar el texto
function encriptar(stringEncriptada){
    let llavesEncrip = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < llavesEncrip.length; i++){
        if(stringEncriptada.includes(llavesEncrip[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(llavesEncrip[i][0], llavesEncrip[i][1]);
        }
    }
    return stringEncriptada
}

//Función para el boton desencriptar
function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensajeEncriptado.value = textoEncriptado
    textArea.value = textoEncriptado
    textArea.value = "";
}

//Función para desencriptar el texto
function desencriptar(stringDesencriptar){
    let llavesEncrip = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < llavesEncrip.length; i++){
        if(stringDesencriptar.includes(llavesEncrip[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(llavesEncrip[i][1], llavesEncrip[i][0])
        }
    }
    return stringDesencriptar
}
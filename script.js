
function codificar() {
    var texto = document.getElementById("input-txt").value.toLowerCase();
    var textoCodificado = '';
    for (var i=0; i<texto.length; i++) {
        if (texto[i]=='e') {
        textoCodificado += 'enter';
        }else if (texto[i]=='i') {
        textoCodificado += 'imes';
        }else if (texto[i]=='a') {
        textoCodificado += 'ai';
        }else if (texto[i]=='o') {
        textoCodificado += 'ober';
        }else if (texto[i]=='u') {
        textoCodificado += 'ufat';
        }else {
        textoCodificado += texto[i];
        }
    }
    document.getElementById("input-txt").value = '';
    document.getElementById("input-txt").placeholder = "Ingrese el texto aqui"

    document.getElementById("txtEncript").style.visibility = "visible";
    document.getElementById("cop").style.visibility = "visible";
    document.getElementById("txtEncript").innerHTML = textoCodificado;
}

function check(texto, posicion, txtCheck) {

    var result = true;
    for (var i=0; i<txtCheck.length; i++) {
        if (txtCheck[i] != texto[posicion+i]) {
            result = false;
            break;
        }
    }
    return result;
}

function decodificar() {
    var texto = document.getElementById("input-txt").value.toLowerCase();
    var textoDecodificado = '';
    for (var i=0; i<texto.length; i++) {
        if (texto[i]=='e') {
        if (!check(texto, i, 'enter')) {
            textoDecodificado = false;
            break;
        }
        textoDecodificado += 'e';
        i += 4;
        }else if (texto[i]=='i') {
        if (!check(texto, i, 'imes')) {
            textoDecodificado = false;
            break;
        }
        textoDecodificado += 'i';
        i += 3;
        }else if (texto[i]=='a') {
        if (!check(texto, i, 'ai')) {
            textoDecodificado = false;
            break;
        }
        textoDecodificado += 'a';
        i += 1;
        }else if (texto[i]=='o') {
        if (!check(texto, i, 'ober')) {
            textoDecodificado = false;
            break;
        }
        textoDecodificado += 'o';
        i += 3;
        }else if (texto[i]=='u') {
        if (!check(texto, i, 'ufat')) {
            textoDecodificado = false;
            break;
        }
        textoDecodificado += 'u';
        i += 3;
        }else {
        textoDecodificado += texto[i];
        }
    }

    if(!textoDecodificado) {
        textoDecodificado = "ERROR: *** "+texto+" *** no se puede decodificar";
    }
    document.getElementById("input-txt").value = '';
    document.getElementById("input-txt").placeholder = "Ingrese el texto aqui"
    document.getElementById("txtEncript").style.visibility = "visible";
    document.getElementById("cop").style.visibility = "visible";
    document.getElementById("txtEncript").innerHTML = textoDecodificado;
}

function copiar() {
   var copyText = document.getElementById("txtEncript");

  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  navigator.clipboard.writeText(copyText.value);
}

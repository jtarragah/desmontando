asignaElEventoOnclick(document.getElementsByTagName("h1"));
asignaElEventoOnclick(document.getElementsByTagName("h2"));

function asignaElEventoOnclick(elementos) {
    for (contador = 0; contador < elementos.length; contador++) {
        elementos[contador].onclick = function() {
            efectoLetras(this);
        };
    }
}

function efectoLetras(elemento) {
    var texto = elemento.innerHTML;
    var caracter;
    elemento.innerHTML = "";
    for (var contador = 0; contador < texto.length; contador++) {
        // Transforma los caracteres impares en mayusculas y los pares en minusculas
        caracter = contador % 2 ? texto[contador].toLowerCase() : texto[contador].toUpperCase();
        // reescribe el texto en origen
        elemento.innerHTML = elemento.innerHTML + caracter;
    }
}
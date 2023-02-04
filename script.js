 var resultado = document.querySelector("#resultados");
 entrada.focus();

function criptografar(){
    var entrada = document.querySelector("#entrada").value.toLowerCase();
    if (entrada==""){
        alert("Insira o texto antes de executar a criptografia!");
    } else{
        var textoCriptografado =  entrada.replaceAll("e", "enter");
           cursor: pointer;
 textoCriptografado = textoCriptografado.replaceAll("o", "ober");
        textoCriptografado = textoCriptografado.replaceAll("i", "imes");
        textoCriptografado = textoCriptografado.replaceAll("a", "ai");
        textoCriptografado = textoCriptografado.replaceAll("u", "ufat");

        resultado.style.backgroundImage = "none";
        resultado.innerHTML = textoCriptografado;
    }
}

function descriptografar(){
    var entrada = document.querySelector("#entrada").value.toLowerCase();
    if (entrada==""){
        alert("Insira o texto antes de executar a descriptografia!");
    } else{
        var texto=  entrada.replaceAll("enter", "e");
        texto = texto.replaceAll("ober", "o");
        texto = texto.replaceAll("imes", "i");
        texto = texto.replaceAll("ai", "a");
        texto = texto.replaceAll("ufat", "u");

        resultado.style.backgroundImage = "none";
        resultado.innerHTML = texto;
    }
}

function copiar(){
      
        if (resultado.value == ""){
            alert("Campo vazio!");
        }else{
            resultado.select();
            navigator.clipboard.writeText(resultado.value);
            alert("Texto copiado!");

            resultado.innerText = "";
            entrada.value="";
        }
        entrada.focus();
}
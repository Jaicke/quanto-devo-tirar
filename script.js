var inputMedia = document.getElementById('media');
var inputMediaNecessaria =  document.getElementById('mediaNecessaria');
var divResultado =  document.getElementById('resultado');

function calcular(){
    var media = parseFloat(inputMedia.value);
    var mediaNecessaria = parseFloat(inputMediaNecessaria.value);
    validado = validar_campos(media, mediaNecessaria);
    if (validado === true) {
        final = 2 * mediaNecessaria - media

        divResultado.innerText = final;
    }

}

function limpar(){
    inputMedia.value = '';
    inputMediaNecessaria.value = '';
    divResultado.innerText = '0.00';
}

function validar_campos(media, mediaNecessaria){
    var resource = []
    var alert =  document.getElementById('error')
    var error =  document.getElementById('resource');
    
    if (media > 10 && mediaNecessaria > 10){
        resource.push('Média normal e Média necessária');
        alert.classList.remove("error");
        error.innerText = resource;
        return false;
    } else if (media > 10) {
        resource.push('Média normal');
        alert.classList.remove("error"); 
        error.innerText = resource;
        return false;       
    } else if (mediaNecessaria > 10) {
        resource.push('Média necessária');
        alert.classList.remove("error");
        error.innerText = resource;
        return false; 
    } else {
        alert.classList.add("error"); 
        return true;    
    }
}

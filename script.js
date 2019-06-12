function calcular(){
    var media = parseFloat(document.getElementById('media').value);
    var mediaNecessaria = parseFloat(document.getElementById('mediaNecessaria').value);
    validado = validar_campos(media, mediaNecessaria);
    if (validado === true) {
        final = 2 * mediaNecessaria - media

        document.getElementById('resultado').innerHTML = final;
    }
    

}

function validar_campos(media, mediaNecessaria){
    var resource = []
    var alert =  document.getElementById('error')
    var error =  document.getElementById('resource');
    
    if (media > 10 && mediaNecessaria > 10){
        resource.push('Média normal e Média necessária');
        alert.classList.remove("error");
        error.innerHTML = resource;
        return false;
    } else if (media > 10) {
        resource.push('Média normal');
        alert.classList.remove("error"); 
        error.innerHTML = resource;
        return false;       
    } else if (mediaNecessaria > 10) {
        resource.push('Média necessária');
        alert.classList.remove("error");
        error.innerHTML = resource;
        return false; 
    } else {
        alert.classList.add("error"); 
        return true;    
    }
}

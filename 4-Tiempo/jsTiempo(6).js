
function inicio(){
    
    var btnSecreto = document.getElementById("secreto");
    
    btnSecreto.style.display = "none";
    
    setTimeout(function(){
    
        btnSecreto.style.display = "inline-block";
    
    }, 3000)
}
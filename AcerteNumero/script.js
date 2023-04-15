 function PulaLinha(){
     document.write("<br>");
 } 
 function Mostra(texto){
    document.write(texto);
 }
//  essa função abaixo para de criar a lista de segredos quando vc acerta o numero :)
 function stopEncontra() {
     var segredos = [];
     var achou = false;
     segredos[0] = Math.round(Math.random() * 10);
     var i=0;
     while (i <= 1){
         if (input.value== segredos[i]){
            achou = true;
            break;
            
         }
         else{
         segredos.push(Math.round(Math.random() * 10));
         i++;
         achou = false; 
         }

     }
     if(achou== true){
         alert("Vc acertou");
     }
     else{
         alert("Vc errou")
     }
     console.log(segredos)
     
   input.value="";
   input.focus();
   
 }
function sorteia(){
    return Math.round(Math.random() * 10);

}
function sorteiaNumeros(qtd){
    var segredos = []
    var numero = 1
    while(numero<= qtd){
        var numeroAleatorio = sorteia();
        var achou = false;
        if(numeroAleatorio != 0 ){
            for (var i = 0; i < segredos.length; i++) {
                if (segredos[i] == numeroAleatorio) {
                    achou = true;
                    break;
                }
        }
        if (achou == false) {
                segredos.push(numeroAleatorio);
                numero++;
        }
    }
}
return segredos;
}
var segredos = sorteiaNumeros(5);

var input = document.querySelector("input");
input.focus();

function verifica() {

    var achou = false;

    for (var posicao = 0; posicao < segredos.length; posicao++) {

        if (input.value == segredos[posicao]) {

            alert("Você ACERTOU!");
            achou = true;
            break;
        }
    }

    if (achou == false) {

        alert("Você ERROU!");
    }

    input.value = "";
    input.focus();

}

var button = document.querySelector("button");

button.onclick = verifica;
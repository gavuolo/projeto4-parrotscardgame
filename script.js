let numCards;
numValido();

/*Validação de resposta pelo prompt*/ 
function numValido(){

    numCards = prompt('Com quantas cartas você deseja jogar? (somente de 4 a 14 cartas)');

    if ( numCards % 2 !== 0){
        alert("Digite um número par");
        numValido();
    } 
    
    else if ( numCards < 4 ) {
        alert("Digite um número maior que 4");
        numValido();
    }

    else if ( numCards > 14 ){
        alert("Digite um número menor que 14");
        numValido();
    }

    else if ( numCards == null ){
        alert("Digite um número válido");
        numValido();
    }  
    numCards = Number(numCards);
}


/*Começar o jogo + distribuição de cartas*/

let divGame = document.querySelector(".game");
divGame.innerHTML = '';
let contador = 0;

function quantidadeCartas (){
    
    while (numCards != contador){

        divGame.innerHTML += `
        <div class="card">


        <div class="face front-face ">
            
            <img src="./images/front.png" alt="">
        
        </div>
        
        <div class="face back-face">
            
            <img src="./Images/fiestaparrot.gif" alt="">
        
        </div>
        
        </div>
        `;

        contador ++;
    }

    
}
quantidadeCartas ()
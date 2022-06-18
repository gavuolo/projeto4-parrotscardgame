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
// fazer aleatoriedade das imagens
// fazer com que apareçam 2 cartas iguais
// fazer a carta ficar para cima quando acertar

let divGame = document.querySelector(".game");
divGame.innerHTML = '';
let contador = 0;
let gifBirds = ['bobross', 'explody', 'metal', 'fiesta', 'reviertit', 'triplets', 'unicorn']
gifBirds.sort(comparador)

function comparador() { 
	return Math.random() - 0.5; 
}

function quantidadeCartas (){
    
    while (numCards != contador){

        divGame.innerHTML += `
        <div class="card">


        <div class="face front-face">
            
            <img src="./Images/front.png" alt="">
        
        </div>
        
        <div class="face back-face">
            
            <img src="./Images/${gifBirds[2]}parrot.gif" alt="">
        
        </div>
        
        </div>
        `;

        contador ++;
    }

    
}
quantidadeCartas ()
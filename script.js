let numCards;
numValido();

//Validação de resposta pelo prompt
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
//-------------------------------------------------------------------------------------------

let divGame = document.querySelector(".game");
divGame.innerHTML = '';
let gifBirds = ['bobross', 'explody', 'metal', 'fiesta', 'revertit', 'triplets', 'unicorn'];

//embaralhar a array
gifBirds.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}

function distribuiCards (){

    let gifPares = [];

    for(let p = 0; p < numCards/2; p ++){
        gifPares.push(gifBirds[p]);
        gifPares.push(gifBirds[p]);
        gifPares.sort(comparador);
    }

    for (let i = 0; i < numCards; i ++){
       
        divGame.innerHTML += `
        <div class="card" onclick="virarCarta(this)">
        <div class="face front-face">
            <img src="./Images/front.png" alt="">
        </div>
        
        <div class="face back-face">
            
            <img src="./Images/${gifPares[i]}parrot.gif" class="img">
        
        </div>
        
        </div>
        `;
    }    
}
distribuiCards()

//-----------------------------------------------------
//Cartas viradas

let contador = 0;

let card1
let card2 

function virarCarta(card){

    card.classList.add('virar');

    


    //saber quantas vezes clicou
    let click = card.classList.contains('virar')

    if (click){
        contador++;
    }
    compararCards()
}




function compararCards() {
    card1 = document.querySelector(".img")

    card2 = classList.contains(".img")

    console.log(card1, card2)
   /* if (card1 !== ){
      
    } else {

    }*/


}

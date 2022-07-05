let numCards;
numValido();

//Validação de resposta pelo prompt
function numValido(){

    numCards = Number(prompt('Com quantas cartas você deseja jogar? (somente pares de 4 a 14 cartas)'));

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

    else if ( isNaN(numCards) ){
        alert("Digite um número válido");
        numValido();
    }  
}
//-------------------------------------------------------------------------------------------

let divGame = document.querySelector(".game");
divGame.innerHTML = '';
let gifBirds = ['bobross', 'explody', 'metal', 'fiesta', 'revertit', 'triplets', 'unicorn'];

//embaralhar a array
;

function comparador() { 
	return Math.random() - 0.5; 
}
let gifPares = [];

//-------------------------------------------------------------------------------------------
// Adcionar cartas
function distribuiCards (){

    gifBirds.sort(comparador)
    
    for(let p = 0; p < numCards/2; p ++){
        gifPares.push(gifBirds[p]);
        gifPares.push(gifBirds[p]);
        gifPares.sort(comparador);
    }

    for (let i = 0; i < numCards; i ++){
       
        divGame.innerHTML += `
        <div class="card" onclick="virarCarta(this)" data-card="${gifPares[i]}">
        <div class="face front-face">
            <img src="./Images/front.png" alt="">
        </div>
        
        <div class="face back-face" >
            
            <img src="./Images/${gifPares[i]}parrot.gif" class="img">
        
        </div>
        
        </div>
        `;
    }    
}
distribuiCards()

//-------------------------------------------------------------------------------------------
// Virar cartas e comparar

let contador = 0;

let card1
let card2 

let trancar = false;

function virarCarta(card){
    if(trancar){
        return false;
    }

    card.classList.add('virar');

    if(!card1){
        card1 = card

        return false;
    }

    card2 = card;
    
    //saber quantas vezes clicou
    let click = card.classList.contains('virar')

    if (click){
        contador +=2;
    }
    console.log(click, contador)
    compararCards()
}


function compararCards() {
    let verificar = card1.dataset.card === card2.dataset.card
    console.log(verificar)
    

    if (!verificar){
        trancar = true
        setTimeout(resetCards =>{
        card1.classList.remove('virar');
        card2.classList.remove('virar');

        card1 = null
        card2= null

        trancar = false  
               
        }, 1000);} else if (verificar){
            card1.classList.add('acertou');
            card2.classList.add('acertou');

            card1 = null
            card2= null
        }

        setTimeout(fimJogo, 500)
    }
 
//-------------------------------------------------------------------------------------------
// Resetar o jogo

    function fimJogo(){

        let fimGame = document.querySelectorAll(".acertou");
        console.log(fimGame)

        if (fimGame.length === numCards){
            
            alert(`Parabéns! você ganhou usando ${contador} jogadas`)
            restart()
        }

    }
    
    function restart(){
        let reset = prompt(`Quer jogar novamente? responda "sim" ou "não"`)

        if (reset == "sim"){
            location.reload(true)

        } else if (reset == "não") {
            alert(`Beleza, valeu por jogar!`)
        }
        else {
            alert(`Respostas válidas, somente: "sim" ou "não"`)
            restart()
        }
        
    }
let numCards;

/*Validação de resposta pelo prompt*/ 
function numValido(numCards){

    numCards = prompt('Com quantas cartas você deseja jogar? (somente de 4 a 14 cartas)');

    if ( numCards % 2 !== 0){
        alert("Digite um número par");
        numValido(numCards)
    } 
    
    else if ( numCards < 4 ) {
        alert("Digite um número maior que 4");
        numValido(numCards)
    }
    else if ( numCards > 14 ){
        alert("Digite um número menor que 14");
        numValido(numCards)

    }
    else if ( numCards == null ){
        alert("Digite um número válido");
        numValido(numCards)
    }  

}
numValido(numCards)


/*Começar o jogo + distribuição de cartas*/

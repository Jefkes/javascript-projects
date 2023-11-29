document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.memory-card');
  
 let hasFlippedCards = false; 
 let lockBoard = false;
 let firstCard, secondCard; 
 
  function flipCard() {
    if (lockBoard) return; 
    if (this === firstCard) return; 
    
    this.classList.add('flip');

    if(!hasFlippedCards) {

      hasFlippedCards = true; 
      firstCard = this; 
      return; 
    }

    secondCard = this; 
    
    checkForMatch(); 
  }

  function checkForMatch() {

    if (firstCard.dataset.foto === secondCard.dataset.foto) {
      disableCards(); 
      return; 
    }

    unflipCards(); 

  }

  function disableCards() {

    firstCard.removeEventListener('click',flipCard); 
    secondCard.removeEventListener('click',flipCard); 
    resetBoard(); 
  }

  function unflipCards() {
    lockBoard = true; 
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetBoard();
    }, 1500);
  }

cards.forEach(card => card.addEventListener('click', flipCard));

function resetBoard() {
  [hasFlippedCards, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}


(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();
});


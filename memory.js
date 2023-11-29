document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.memory-card');
  
  function flipCard() {
    console.log('Card clicked!');
    this.classList.toggle('flip');
  }
cards.forEach(card => card.addEventListener('click', flipCard));

(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();
});


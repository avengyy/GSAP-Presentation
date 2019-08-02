const playBtn = document.querySelector('#play');
const reverseBtn = document.querySelector('#reverse');

playBtn.addEventListener('click', function() {
  TweenMax.to('.box-1', 1, { x: 700, ease: Back.easeOut });
  TweenMax.to('.box-1', 1, { y: 200, delay: 1, ease: Elastic.easeOut });
});

reverseBtn.addEventListener('click', function() {
  TweenMax.to('.box-1', 1, { y: 0, ease: Bounce.easeOut });
  TweenMax.to('.box-1', 1, { x: 0, delay: 1, ease: SteppedEase.config(12) });
});

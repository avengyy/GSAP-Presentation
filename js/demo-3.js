const playBtn = document.querySelector('#play');
const reverseBtn = document.querySelector('#reverse');

playBtn.addEventListener('click', function() {
  TweenMax.fromTo('.box-1', 1, { opacity: 1 }, { x: 500, opacity: 0 });
});

reverseBtn.addEventListener('click', function() {
  TweenMax.fromTo('.box-1', 1, { x: 500, opacity: 0 }, { x: 0, opacity: 1 });
});

const playBtn = document.querySelector('#play');
const reverseBtn = document.querySelector('#reverse');
const box = document.querySelectorAll('.box-small');

playBtn.addEventListener('click', function() {
  TweenMax.staggerTo(box, 1, { rotation: 360, y: 100 }, 0.5);
});

reverseBtn.addEventListener('click', function() {
  TweenMax.staggerTo(box, 1, { rotation: 0, y: 0 }, 0.5);
});

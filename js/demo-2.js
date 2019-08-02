const playBtn = document.querySelector('#play');
const reverseBtn = document.querySelector('#reverse');

playBtn.addEventListener('click', function() {
  TweenMax.from('.box-2', 1, { y: -100, opacity: 0 });
});

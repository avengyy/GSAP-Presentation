const playBtn = document.querySelector('#play');
const reverseBtn = document.querySelector('#reverse');
const box = document.querySelector('.box-1');

const tl = new TimelineMax({ paused: true });

tl.to(box, 1, { x: 700 })
  .to(box, 3, { y: 300, scale: 2, backgroundColor: 'blue' }, 2)
  .to(box, 0.5, { x: 0, scale: 1 }, '-=0.5');

playBtn.addEventListener('click', function(e) {
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }

  tl.play();
});

reverseBtn.addEventListener('click', function(e) {
  tl.reverse();
});

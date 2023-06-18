const btn = document.querySelector('[data-toggle="popover"]');
const popover = document.querySelector('[data-widget="popover-top"]');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const positionBth = btn.getBoundingClientRect();
  popover.style = `position:absolute; left:${positionBth.left-670}px; top:${positionBth.top-310}px`;

  if (popover.classList.contains('hidden')) {
    popover.classList.remove('hidden');
    popover.classList.add('active');
    
  } else {
    popover.classList.remove('active');
    popover.classList.add('hidden');
  }
});
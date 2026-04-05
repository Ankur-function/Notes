const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal')
const button = document.querySelector('#openBtn');

document.addEventListener('click',(e)=>{
})

/**
Below solution ChatGpt gave me :-

    const openBtn = document.querySelector('#openBtn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

// Reusable functions
function openModal() {
  overlay.classList.remove('hidden');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  overlay.classList.add('hidden');
  document.body.classList.remove('no-scroll');
}

// 1) Open button
openBtn.addEventListener('click', openModal);

// 2) Overlay handles BOTH:
//    - close button click
//    - outside modal click
overlay.addEventListener('click', (e) => {
  const isCloseBtn = e.target.closest('.closeBtn');
  const isOutsideModal = !e.target.closest('.modal');

  if (isCloseBtn || isOutsideModal) {
    closeModal();
  }
});

// 3) Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeModal();
  }
});
 */

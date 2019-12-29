function toggleMessenger() {
  const messenger = document.querySelector('#messenger');
  const action = messenger.classList.contains('open') ? 'remove' : 'add';
  messenger.classList[action]('open');
}

const togglers = document.querySelectorAll('.toggle-messenger');
togglers.forEach(toggler => toggler.addEventListener('click', toggleMessenger));

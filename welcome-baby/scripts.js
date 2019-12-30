function toggleMessenger() {
  const messenger = document.querySelector('#messenger');
  const action = messenger.classList.contains('open') ? 'remove' : 'add';
  messenger.classList[action]('open');
}

const togglers = document.querySelectorAll('.toggle-messenger');
togglers.forEach(toggler => toggler.addEventListener('click', toggleMessenger));

async function sendMessage(e) {
  e.preventDefault();

  const formData = {};
  new FormData(event.target).forEach((value, key) => {
    formData[key] = value;
  });

  await fetch(
    'https://us-central1-welcome-baby.cloudfunctions.net/addMessage',
    {
      method: 'POST',
      body: JSON.stringify(formData)
    }
  );

  event.target.reset();
  toggleMessenger();
}

const form = document.querySelector('#messenger form');
form.addEventListener('submit', sendMessage);

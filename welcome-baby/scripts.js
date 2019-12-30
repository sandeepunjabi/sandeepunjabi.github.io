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

  const body = document.querySelector('body');

  try {
    body.classList.add('isBusy');

    await fetch(
      'https://us-central1-welcome-baby.cloudfunctions.net/addMessage',
      {
        method: 'POST',
        body: JSON.stringify(formData)
      }
    );

    event.target.reset();
    toggleMessenger();
  } catch {
    alert('Could not send message. Please try again.');
  } finally {
    body.classList.remove('isBusy');
  }
}

const form = document.querySelector('#messenger form');
form.addEventListener('submit', sendMessage);

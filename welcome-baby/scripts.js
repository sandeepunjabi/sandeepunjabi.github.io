/*===============
 - NAVIGATION
===============*/
function toggleMessenger() {
  const body = document.querySelector('body');
  const action = body.classList.contains('messenger-visible')
    ? 'remove'
    : 'add';
  body.classList[action]('messenger-visible');
}

const togglers = document.querySelectorAll('.toggle-messenger');
togglers.forEach(toggler => toggler.addEventListener('click', toggleMessenger));

/*===============
 - MESSAGE FORM
===============*/
async function sendMessage(e) {
  e.preventDefault();

  const form = e.target;
  const formData = {};
  new FormData(form).forEach((value, key) => {
    formData[key] = value;
  });

  const body = document.querySelector('body');

  try {
    body.classList.add('isBusy');

    await fetch(
      'https://us-central1-welcome-baby.cloudfunctions.net/addMessage',
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    form.reset();
    toggleMessenger();

    setTimeout(() => alert('Thank You...'), 100);
  } catch {
    alert('Could not send message. Please try again.');
  } finally {
    body.classList.remove('isBusy');
  }
}

const form = document.querySelector('#messenger form');
form.addEventListener('submit', sendMessage);

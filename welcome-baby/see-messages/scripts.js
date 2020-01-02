function renderMessages(messages) {
  const html = [];
  messages.forEach(({ body }) => {
    html.push(`
      <article class="message">
        <h3>${body.name}</h3>
        <p>${body.message}</p>
      </article>
    `);
  });

  document.querySelector('#messages').innerHTML = html.join('');
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const token = e.target.querySelector('input').value;
  const response = await fetch(
    'https://us-central1-welcome-baby.cloudfunctions.net/getMessages',
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const data = await response.json();
  renderMessages(Object.values(data));
}

document
  .querySelector('#intro form')
  .addEventListener('submit', handleFormSubmit);

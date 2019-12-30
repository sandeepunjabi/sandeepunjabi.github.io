const firebaseConfig = {
  apiKey: "AIzaSyC4tooIIlF2KujkF5ABd5wFCjhkPDT98eE",
  authDomain: "welcome-baby.firebaseapp.com",
  databaseURL: "https://welcome-baby.firebaseio.com",
  projectId: "welcome-baby",
  storageBucket: "welcome-baby.appspot.com",
  messagingSenderId: "637910658035",
  appId: "1:637910658035:web:ea04167a06141972778086",
  measurementId: "G-LE51SQX4ME"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function toggleMessenger() {
  const messenger = document.querySelector('#messenger');
  const action = messenger.classList.contains('open') ? 'remove' : 'add';
  messenger.classList[action]('open');
}

const togglers = document.querySelectorAll('.toggle-messenger');
togglers.forEach(toggler => toggler.addEventListener('click', toggleMessenger));

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const div = document.querySelector('#modal');
div.className = 'hidden';

const likeSpans = document.querySelectorAll('.like-glyph');

for (let i of likeSpans) {
  i.addEventListener('click', () => {
    mimicServerCall()
    .then( res => {
      if (i.className == 'activated-heart') {
        i.className = 'ayy lmao'
        i.textContent = EMPTY_HEART
      } else {
        i.textContent = FULL_HEART;
        i.className = 'activated-heart';
      }  
    })
    .catch(err => {
      div.className = 'ayy lmao'
      const p = document.querySelector('#modal-message')
      p.textContent = err
      setTimeout(() => {
        div.className = 'hidden'
      }, 5000)
    })
  })
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

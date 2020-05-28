let blueState = false;

const html = document.querySelector('html');
const toggle = document.getElementById('toggle-button');
toggle.onclick = function() {
  blueState = !blueState;

  if (blueState) {
    html.classList.add('blue')
  } else {
    html.classList.remove('blue');
  }
}

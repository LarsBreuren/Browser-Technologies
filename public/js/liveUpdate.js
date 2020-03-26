const input = document.getElementById('text');
const log = document.getElementById('shirtText');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

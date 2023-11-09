function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const textDiv = document.getElementById('text');

  button.addEventListener('click', () => {
    textDiv.hidden = !textDiv.hidden;
  });
}

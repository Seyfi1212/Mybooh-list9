const addButton = document.querySelector('#addButton');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const colorInput = document.querySelector('#color');
const bookList = document.querySelector('#bookList');

function addBook() {
  const title = titleInput.value;
  const author = authorInput.value;
  const color = colorInput.value;
  const type = document.querySelector('input[name="type"]:checked');

  if (!title || !author || !color || !type) {
    return;
  }

  const newRow = `
    <tr style="color: ${color}">
      <td>${title}</td>
      <td>${author}</td>
      <td>${type.value}</td>
    </tr>
  `;

  bookList.insertAdjacentHTML('beforeend', newRow);
  titleInput.value = '';
  authorInput.value = '';
  colorInput.value = '';
  document.querySelector('input[name="type"]:checked').checked = false;
}

addButton.addEventListener('click', addBook);

titleInput.addEventListener('input', function () {
  addButton.disabled = !titleInput.value || !authorInput.value || !colorInput.value || !document.querySelector('input[name="type"]:checked');
});

authorInput.addEventListener('input', function () {
  addButton.disabled = !titleInput.value || !authorInput.value || !colorInput.value || !document.querySelector('input[name="type"]:checked');
});

colorInput.addEventListener('input', function () {
  addButton.disabled = !titleInput.value || !authorInput.value || !colorInput.value || !document.querySelector('input[name="type"]:checked');
});

document.querySelectorAll('input[name="type"]').forEach(radio => {
  radio.addEventListener('change', function () {
    addButton.disabled = !titleInput.value || !authorInput.value || !colorInput.value || !document.querySelector('input[name="type"]:checked');
  });
});
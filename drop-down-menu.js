const button = document.createElement('button');
button.innerText = 'X';
const container = document.querySelector('.container');

function dropDownMenu() {
  const container = document.createElement('div');
  container.classList.add('drop_down_menu');

  const option1 = document.createElement('span');
  option1.innerText = 'option1';
  const option2 = document.createElement('span');
  option2.innerText = 'option2';
  const option3 = document.createElement('span');
  option3.innerText = 'option3';
  const option4 = document.createElement('span');
  option4.innerText = 'option4';

  container.append(option1);
  container.append(option2);
  container.append(option3);
  container.append(option4);

  return container;
}

button.addEventListener('click', () => {
  document.querySelector('.drop_down_menu').classList.toggle('active');
});
container.append(button);
container.append(dropDownMenu());

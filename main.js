
const warning = document.querySelector('.warning');
let loginForm = document.querySelector('.todo-entry');
const cardGrid = document.querySelector('.basic-grid');
loginForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    console.log('once');
    const todoText = document.querySelector('.todo-text');
    const date = new Date(document.querySelector('.date').value); //fix date formatting
    console.log(date);
    if(todoText.value === '' || date.valueAsDate === null)
    {
        warning.innerHTML = 'Please enter all fields';
        setTimeout(() => warning.innerHTML='', 1000);
    }
    else
    {
        createCard(date, todoText, e);
    }
};

function createCard(date, todoText, e)
{
    const formattedDate = formatDate(date);
    console.log(formattedDate);
    const btn = document.createElement('button');
    btn.className = 'delete';
    btn.innerHTML = 'delete';
    btn.addEventListener("click", function(e) {
        e.target.parentNode.remove();
      });
    console.log('success');
    const card = document.createElement('div');
    card.className='card';

    const dateElement = document.createElement('h1');
    dateElement.className='date-text';
    dateElement.innerHTML = `${formattedDate}`;

    const textElement = document.createTextNode(todoText.value);
    textElement.className = 'text-stuff';

    card.appendChild(dateElement);
    //card.appendChild(document.createElement('br'));
    card.appendChild(textElement);
    card.appendChild(btn);
    cardGrid.appendChild(card);

    todoText.value = '';
    date.value = '';
};

function formatDate(date)
{
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = mm + '/' + dd + '/' + yyyy;

    return formattedToday;
}

function getCurrentDate()
{
    let currentDate = new Date();
    currentDate = formatDate(currentDate);
}



const warning = document.querySelector('.warning');
let loginForm = document.querySelector('.todo-entry');
const userList = document.querySelector('.todo-list');
loginForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    const todoText = document.querySelector('.todo-text');
    const date = document.querySelector('.date');
    if(todoText.value === '')
    {
        
        console.log('invalid text');
        console.log(todoText.value);

        warning.innerHTML = 'Please enter all fields';
        setTimeout(() => warning.remove(), 1000);
        
    }
    else if(isNaN(date.valueAsDate))
    {
        console.log('invalid date');
        console.log(date.valueAsDate);

        warning.innerHTML = 'Please enter all fields';
        setTimeout(() => warning.remove(), 1000);
    }
    else
    {
        console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${todoText.value} ${date.value}`));
        userList.appendChild(li);
        todoText.value = '';
        date.value = '';
    }
};
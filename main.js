
const warning = document.querySelector('.warning');
let loginForm = document.querySelector('.todo-entry');
const userList = document.querySelector('.todo-list');
loginForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    console.log('once');
    const todoText = document.querySelector('.todo-text');
    const date = document.querySelector('.date');
    if(todoText.value === '' || date.valueAsDate === null)
    {
        warning.innerHTML = 'Please enter all fields';
        setTimeout(() => warning.innerHTML='', 1000);
    }

    else
    {
        console.log(date.valueAsDate);
        const btn = document.createElement('button');
        btn.className = 'delete';
        btn.innerHTML = 'delete';
        btn.addEventListener("click", function(e) {
            e.target.parentNode.remove();
          });
        console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${date.value}`));
        //li.appendChild(document.write('<br>'));
        li.appendChild(document.createTextNode(`${todoText.value}`));
        li.appendChild(btn);
        userList.appendChild(li);

        todoText.value = '';
        date.value = '';
    }
};
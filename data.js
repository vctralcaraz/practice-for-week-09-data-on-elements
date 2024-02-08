// Your code here
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add');
    const nameInput = document.getElementById('name');
    const selectOption = document.getElementById('type');
    const shoppingList = document.getElementById('shopping-list');

    const handleAdd = e => {
        e.preventDefault();
        const li = document.createElement('li');
        li.innerText = `${nameInput.value} - ${selectOption.value}`;
        li.setAttribute('data-type', selectOption.value);
        shoppingList.appendChild(li);
        nameInput.value = '';
    }

    addButton.addEventListener('click', handleAdd);
});
